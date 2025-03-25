import { COLORS, GREEN } from "../../enums";
import "./tile.css";

export default function Tile({
  x,
  y,
  value,
}: {
  x: number;
  y: number;
  value: number;
}) {
  function getTileColor(value: number) {
    return (GREEN[value] as string) || COLORS.BEIGE;
  }

  function getFontColor(value: number) {
    return value > 500 ? COLORS.BEIGE : COLORS.BLACK;
  }

  const tileStyle = {
    gridColumn: x,
    gridRow: y,
    backgroundColor: getTileColor(value),
    color: getFontColor(value),
  };

  return (
    <div className="tile-border">
      <div className={`tile tile-${value}`} style={tileStyle}>
        {value !== 0 && value}
      </div>
    </div>
  );
}
