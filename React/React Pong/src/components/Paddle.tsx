import "./paddle.css"

export default function Paddle({ x, y }: { x: number; y: number }) {
  return <div className="paddle" style={{ gridRow: x, gridColumn: y }}></div>;
}
