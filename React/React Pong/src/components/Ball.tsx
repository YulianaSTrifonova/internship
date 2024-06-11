import "./ball.css"

export default function Ball({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="ball"
      style={{ gridRow: x, gridColumn: y }}
    ></div>
  );
}
