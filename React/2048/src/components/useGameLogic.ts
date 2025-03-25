import { useEffect, useState } from "react";
import { ARROWS, DIRECTIONS, GRID } from "../enums";

export default function useGameLogic() {
  const [tiles, setTiles] = useState(
    [] as { x: number; y: number; value: number }[]
  );
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function initializeTiles() {
    const initialTiles = [
      { x: 0, y: 0, value: 0 },
      { x: 1, y: 0, value: 0 },
      { x: 2, y: 0, value: 0 },
      { x: 3, y: 0, value: 0 },

      { x: 0, y: 1, value: 0 },
      { x: 1, y: 1, value: 0 },
      { x: 2, y: 1, value: 0 },
      { x: 3, y: 1, value: 0 },

      { x: 0, y: 2, value: 0 },
      { x: 1, y: 2, value: 0 },
      { x: 2, y: 2, value: 0 },
      { x: 3, y: 2, value: 0 },

      { x: 0, y: 3, value: 0 },
      { x: 1, y: 3, value: 0 },
      { x: 2, y: 3, value: 0 },
      { x: 3, y: 3, value: 0 },
    ];
    addRandomTile(initialTiles);
    addRandomTile(initialTiles);
    setTiles(initialTiles);
    setScore(0);
    setGameOver(false);
  }

  function setNewTiles(
    groupedTiles: { x: number; y: number; value: number }[][]
  ) {
    const newTiles = [];
    for (let i = 0; i < groupedTiles.length; i++) {
      newTiles.push(tiles[i]);
    }
    addRandomTile(tiles);
  }

  function addRandomTile(tiles: { x: number; y: number; value: number }[]) {
    const emptyTiles = tiles.filter((tile) => tile.value === 0);
    if (emptyTiles.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * emptyTiles.length);
    emptyTiles[randomIndex].value = Math.random() < 0.9 ? 2 : 4;

    setTiles([...tiles]);
  }

  useEffect(() => {
    initializeTiles();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    const groupedTilesByRow = getGroupedTiles(GRID.ROW);
    const groupedTiledByColumn = getGroupedTiles(GRID.COL);
    switch (event.key) {
      case ARROWS.UP:
        if (canMove(DIRECTIONS.UP)) {
          moveTilesByDecrease(groupedTiledByColumn);
        }
        break;
      case ARROWS.DOWN:
        if (canMove(DIRECTIONS.DOWN)) {
          moveTilesByIncrease(groupedTiledByColumn);
        }
        break;
      case ARROWS.LEFT:
        if (canMove(DIRECTIONS.LEFT)) {
          moveTilesByDecrease(groupedTilesByRow);
        }
        break;
      case ARROWS.RIGHT:
        if (canMove(DIRECTIONS.RIGHT)) {
          moveTilesByIncrease(groupedTilesByRow);
        }
        break;
      default:
        break;
    }
  };

  function canMove(direction: string): boolean {
    const offsets: { [key: string]: { x: number; y: number } } = {
      [DIRECTIONS.UP]: { x: 0, y: -1 },
      [DIRECTIONS.DOWN]: { x: 0, y: 1 },
      [DIRECTIONS.LEFT]: { x: -1, y: 0 },
      [DIRECTIONS.RIGHT]: { x: 1, y: 0 },
    };

    return tiles.some((tile) => {
      const { x, y, value } = tile;
      const offset = offsets[direction];
      const newX = x + offset.x;
      const newY = y + offset.y;

      const adjacentTile = tiles.find(
        (adjTile) => adjTile.x == newX && adjTile.y == newY
      );

      return (
        adjacentTile &&
        (adjacentTile.value === 0 || adjacentTile.value == value)
      );
    });
  }

  function moveTilesByIncrease(
    groupedTiles: { x: number; y: number; value: number }[][]
  ) {
    // down and right
    for (let i = 0; i < groupedTiles.length; i++) {
      const tilesInGroup = groupedTiles[i];
      for (let j = 0; j < tilesInGroup.length - 1; j++) {
        const tile = tilesInGroup[j];
        const adjasentTile = tilesInGroup[j + 1];
        if (tile.value) {
          if (tile.value == adjasentTile.value) {
            const newValue = (adjasentTile.value *= 2);
            tile.value = 0;
            setScore(score + newValue);
          } else if (adjasentTile.value == 0) {
            adjasentTile.value = tile.value;
            tile.value = 0;
          }
        }
      }
    }
    setNewTiles(groupedTiles);
  }

  function moveTilesByDecrease(
    groupedTiles: { x: number; y: number; value: number }[][]
  ) {
    // up and left
    for (let i = 0; i < groupedTiles.length; i++) {
      const tilesInGroup = groupedTiles[i];
      for (let j = tilesInGroup.length - 1; j > 0; j--) {
        const tile = tilesInGroup[j];
        const adjasentTile = tilesInGroup[j - 1];
        if (tile.value) {
          if (tile.value == adjasentTile.value) {
            const newValue = (adjasentTile.value *= 2);
            tile.value = 0;
            setScore(score + newValue);
          } else if (adjasentTile.value == 0) {
            adjasentTile.value = tile.value;
            tile.value = 0;
          }
        }
      }
    }
    setNewTiles(groupedTiles);
  }

  function getGroupedTiles(groupBy: string) {
    const groupedTiles = [];
    for (let i = 0; i < 4; i++) {
      if (groupBy == GRID.ROW) {
        groupedTiles.push(tiles.filter((tile) => tile.y == i));
      } else if (groupBy == GRID.COL) {
        groupedTiles.push(tiles.filter((tile) => tile.x == i));
      }
    }
    return groupedTiles;
  }

  function checkGameOver() {
    const hasMoves = tiles.some((tile) => {
      const { x, y, value } = tile;
      const tileOnLeft = tiles.find(
        (leftTile) => leftTile.x == x - 1 && leftTile.y == y
      );
      const tileOnRight = tiles.find(
        (rightTile) => rightTile.x == x + 1 && rightTile.y == y
      );
      const tileOnTop = tiles.find(
        (topTile) => topTile.x == x && topTile.y == y - 1
      );
      const tileOnBottom = tiles.find(
        (bottomTile) => bottomTile.x == x && bottomTile.y == y + 1
      );
      return (
        (tileOnLeft && (tileOnLeft.value == value || tileOnLeft.value == 0)) ||
        (tileOnRight &&
          (tileOnRight.value == value || tileOnRight.value == 0)) ||
        (tileOnTop && (tileOnTop.value == value || tileOnTop.value == 0)) ||
        (tileOnBottom &&
          (tileOnBottom.value == value || tileOnBottom.value == 0))
      );
    });

    return !hasMoves;
  }

  useEffect(() => {
    if (tiles.length > 0 && !gameOver && checkGameOver()) {
      setGameOver(true);
    }
  }, [tiles]);

  function hasWon() {
    return tiles.some((tile) => tile.value === 2048);
  }

  function restartGame() {
    initializeTiles();
  }
  
  return { score, tiles, gameOver, hasWon, restartGame };
}
