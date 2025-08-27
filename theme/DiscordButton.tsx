import React from 'react';
import './DiscordButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

type DiscordButtonProps = {
  href?: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  color?: string; // 背景色(secondary時は枠線色)
  textColor?: string; // 文字色
};

function hexToRgbTuple(hex: string): [number, number, number] | null {
  let h = hex.trim();
  if (h.startsWith('#')) h = h.slice(1);
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return [r, g, b];
  }
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return [r, g, b];
  }
  return null;
}

export default function DiscordButton({
  href = 'https://discord.gg/GatQE7wGvK',
  label = 'Discordに参加する',
  className,
  variant = 'primary',
  color,
  textColor,
}: DiscordButtonProps) {
  const classes = ['aiau-discord-button'];
  if (variant === 'secondary') classes.push('secondary');
  if (className) classes.push(className);

  const bg = color || '#5865F2';
  const txt = textColor || '#ffffff';
  const rgb = hexToRgbTuple(bg) || [88, 101, 242];
  const style: React.CSSProperties = {
    // CSS変数を使って色を渡す
    ['--aiau-discord-bg' as any]: bg,
    ['--aiau-discord-text' as any]: txt,
    ['--aiau-discord-rgb' as any]: `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`,
  };

  return (
    <a
      href={href}
      className={classes.join(' ')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={style}
    >
      <span className="icon" aria-hidden>
        <FontAwesomeIcon icon={faDiscord} />
      </span>
      <span>{label}</span>
    </a>
  );
}


