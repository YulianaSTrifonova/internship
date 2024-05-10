import { Key } from "react";
import Tile from "../Tile/Tile";
import "./board.css";

export default function Board({
  tiles,
}: {
  tiles: { x: number; y: number; value: number }[];
}) {
  return (
    <div className="board-border">
      <div className="board-grid">
        {tiles.map(
          (tile: { x: number; y: number; value: number }, index: Key) => (
            <Tile key={index} x={tile.x} y={tile.y} value={tile.value} />
          )
        )}
      </div>
    </div>
  );
}
