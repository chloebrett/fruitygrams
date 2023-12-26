import { useEffect, useState } from "react";
import { Stage, Layer, Rect, Text, Group } from "react-konva";
import {
  extractWordsHorizontal,
  extractWordsVertical,
  validateWords,
} from "./Validator";
import socket from "./Socket";

console.log(socket);

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 10;

interface CellState {
  shapeId: string | null;
}

interface BoardState {
  cells: CellState[][];
}

interface ShapeState {
  id: string;
  cellX: number;
  cellY: number;
  isDragging: boolean;
  letter: string;
}

let nextId = 0;

const generateShape: (letter: string) => ShapeState = (letter) => ({
  id: (nextId++).toString(),
  cellX: 0,
  cellY: 0,
  isDragging: false,
  letter,
});

const cellXToX = (cellX: number) => cellX * 60;

const cellYToY = (cellY: number) => cellY * 60;

const xToCellX = (x: number) => Math.round(x / 60);

const yToCellY = (y: number) => Math.round(y / 60);

const INITIAL_STATE: ShapeState[] = [];
const INITIAL_BOARD_STATE: BoardState = {
  cells: [...Array(BOARD_HEIGHT)].map(() =>
    [...Array(BOARD_WIDTH)].map(() => ({ shapeId: null }))
  ),
};

const extractLetters = (board: BoardState, rects: ShapeState[]) => {
  const letters: string[][] = [];
  for (let y = 0; y < board.cells.length; y++) {
    const row = board.cells[y];
    letters.push(new Array());
    for (let x = 0; x < row.length; x++) {
      const rect = rects.find(
        (shape) => shape.cellX === x && shape.cellY === y
      );
      letters[y].push(rect?.letter || " ");
    }
  }
  return letters;
};

const logLetters = (board: BoardState, rects: ShapeState[]) => {
  console.log(
    extractLetters(board, rects)
      .map((row) => row.join(""))
      .join("\n")
  );
};

const resetServerState = () => {
  socket.send("/reset");
};

const Canvas = () => {
  const [board, setBoard] = useState<BoardState>(INITIAL_BOARD_STATE);
  const [rects, setRects] = useState<ShapeState[]>(INITIAL_STATE);

  useEffect(() => {
    const listener = (event: MessageEvent<any>) => {
      const data = event.data as string;

      if (data.includes("[letters]")) {
        const letters: string[] = data.substring("[letters]".length).split("");
        const shapes = letters.map(generateShape);
        setRects(shapes);
      }
    };

    socket.addEventListener("message", listener);

    return () => socket.removeEventListener("message", listener);
  });

  console.log(board);
  logLetters(board, rects);
  const extracted = extractLetters(board, rects);
  console.log(
    extractWordsHorizontal(extracted),
    extractWordsVertical(extracted)
  );
  const validityCheckResult = validateWords(extracted);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setRects(
      rects.map((rect) => {
        return {
          ...rect,
          isDragging: rect.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e: any) => {
    const target = e.target;
    const id = target.id();
    const rectPrevState = rects.find((rect) => rect.id == id);
    const newCellX = xToCellX(e.target.x());
    const newCellY = yToCellY(e.target.y());

    setRects((prev) =>
      prev.map((rect) => {
        if (rect.id === id) {
          target.setAbsolutePosition({
            x: cellXToX(newCellX),
            y: cellYToY(newCellY),
          });
          return {
            ...rect,
            cellX: newCellX,
            cellY: newCellY,
            isDragging: false,
          };
        } else {
          return { ...rect };
        }
      })
    );

    setBoard((prev) => ({
      ...prev,
      cells: prev.cells.map((row: CellState[], y: number) =>
        row.map((cell: CellState, x: number) => {
          if (x == newCellX && y == newCellY) {
            return {
              ...cell,
              shapeId: id,
            };
          } else if (x === rectPrevState?.cellX && y === rectPrevState?.cellY) {
            return {
              ...cell,
              shapeId: null,
            };
          } else {
            return cell;
          }
        })
      ),
    }));
  };

  return (
    <div>
      <p>
        Valid words ({validityCheckResult.validWords.length}):{" "}
        {validityCheckResult.validWords.join(", ")}
      </p>
      <p>
        Invalid words ({validityCheckResult.invalidWords.length}):{" "}
        {validityCheckResult.invalidWords.join(", ")}
      </p>
      <button onClick={resetServerState}>Reset</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {rects.map((rect) => (
            <Group
              id={rect.id}
              key={`group-${rect.id}`}
              x={cellXToX(rect.cellX)}
              y={cellYToY(rect.cellY)}
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <Rect
                key={rect.id}
                width={60}
                height={60}
                fill="#fff"
                opacity={0.8}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={rect.isDragging ? 10 : 5}
                shadowOffsetY={rect.isDragging ? 10 : 5}
                scaleX={rect.isDragging ? 1.2 : 1}
                scaleY={rect.isDragging ? 1.2 : 1}
              />
              <Text key={`text-${rect.id}`} text={rect.letter} fontSize={40} />
            </Group>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
