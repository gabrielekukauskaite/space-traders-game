import { useState, useEffect } from "react";

interface TimeLeftProps {
  timestamp: string;
}

function getTimeLeftString(timestamp: string): string {
  const date = Date.parse(timestamp);
  const now = Date.now();

  let diff = date - now;

  if (diff <= 0) return "0";

  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);

  return parts.join(" ");
}

const TimeLeft = ({ timestamp }: TimeLeftProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeftString(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeftString(timestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return <span>{timeLeft}</span>;
};

export default TimeLeft;
