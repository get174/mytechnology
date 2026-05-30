import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Circuit board / network theme
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const gridSpacing = 80;
    const cols = Math.ceil(canvas.width / gridSpacing) + 2;
    const rows = Math.ceil(canvas.height / gridSpacing) + 2;

    // Create grid of potential nodes
    for (let i = 0; i < cols * rows * 0.3; i++) {
      const gridX = Math.floor(Math.random() * cols);
      const gridY = Math.floor(Math.random() * rows);
      nodes.push({
        x: gridX * gridSpacing + Math.random() * 40 - 20,
        y: gridY * gridSpacing + Math.random() * 40 - 20,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 2,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    // Connect nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i >= j) return;
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < gridSpacing * 1.5) {
          node.connections.push(j);
          other.connections.push(i);
        }
      });
    });

    // Data packets traveling along connections
    const packets: Array<{
      from: number;
      to: number;
      progress: number;
      speed: number;
      active: boolean;
    }> = [];

    for (let i = 0; i < 30; i++) {
      if (nodes.length > 0) {
        packets.push({
          from: Math.floor(Math.random() * nodes.length),
          to: Math.floor(Math.random() * nodes.length),
          progress: Math.random(),
          speed: Math.random() * 0.005 + 0.002,
          active: Math.random() > 0.5,
        });
      }
    }

    let animationFrameId: number;
    let time = 0;

    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const animate = () => {
      time += 0.005;

      // Dark background with minimal fade for cleaner look
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle radial glow from center (very subtle, won't interfere with text)
      const centerGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      centerGlow.addColorStop(0, 'rgba(249, 115, 22, 0.04)');
      centerGlow.addColorStop(0.5, 'rgba(249, 115, 22, 0.02)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all connections first (below nodes)
      nodes.forEach((node, i) => {
        node.pulse += node.pulseSpeed;

        node.connections.forEach((j) => {
          const other = nodes[j];
          if (!other) return;

          // Connection line with subtle gradient
          const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
          gradient.addColorStop(0, hexToRgba('#f97316', 0.08));
          gradient.addColorStop(0.5, hexToRgba('#f97316', 0.15));
          gradient.addColorStop(1, hexToRgba('#f97316', 0.08));

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw circuit trace pattern on connection
          const midX = (node.x + other.x) / 2;
          const midY = (node.y + other.y) / 2;
          ctx.beginPath();
          ctx.arc(midX, midY, 2, 0, Math.PI * 2);
          ctx.fillStyle = hexToRgba('#f97316', 0.2);
          ctx.fill();
        });
      });

      // Draw and update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const pulseSize = node.size + Math.sin(node.pulse) * 0.8;

        // Node glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 3);
        glow.addColorStop(0, hexToRgba('#f97316', 0.25));
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = '#f97316';
        ctx.fill();

        // Node inner bright spot
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();
      });

      // Draw data packets
      packets.forEach((packet) => {
        if (!packet.active || nodes.length === 0) return;

        const fromNode = nodes[packet.from];
        const toNode = nodes[packet.to];
        if (!fromNode || !toNode) return;

        packet.progress += packet.speed;
        if (packet.progress > 1) {
          packet.progress = 0;
          packet.from = Math.floor(Math.random() * nodes.length);
          packet.to = Math.floor(Math.random() * nodes.length);
        }

        const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

        // Packet glow trail
        const packetGlow = ctx.createRadialGradient(x, y, 0, x, y, 15);
        packetGlow.addColorStop(0, hexToRgba('#fbbf24', 0.6));
        packetGlow.addColorStop(0.5, hexToRgba('#f97316', 0.3));
        packetGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fillStyle = packetGlow;
        ctx.fill();

        // Packet core
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();
      });

      // Add some binary/data text effect (very subtle)
      if (Math.random() < 0.01) {
        ctx.font = '10px monospace';
        const binary = Math.random() > 0.5 ?
          Array(8).fill(0).map(() => Math.floor(Math.random() * 2)).join('') :
          Array(6).fill(0).map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
        ctx.fillStyle = hexToRgba('#f97316', 0.15);
        ctx.fillText(binary, Math.random() * canvas.width, Math.random() * canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#030712' }}
    />
  );
}
