import { useState } from "react";
import { Stage, Layer, Rect, Text, Group } from "react-konva";
import {
  extractWordsHorizontal,
  extractWordsVertical,
  validateWords,
} from "./Validator";

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

const generateShapes: () => ShapeState[] = () =>
  [...Array(26)].map((_, i) => ({
    id: i.toString(),
    cellX: generateRandomInt(0, BOARD_WIDTH - 1),
    cellY: generateRandomInt(0, BOARD_HEIGHT - 1),
    isDragging: false,
    letter: getLetter(i),
  }));

const cellXToX = (cellX: number) => cellX * 60;

const cellYToY = (cellY: number) => cellY * 60;

const xToCellX = (x: number) => Math.round(x / 60);

const yToCellY = (y: number) => Math.round(y / 60);

const generateRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getLetter = (index: number) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return chars.substring(index, index + 1);
};

const generateRandomLetter = () => {
  const index = generateRandomInt(0, 25);
  return getLetter(index);
};

const INITIAL_STATE = generateShapes();
const INITIAL_BOARD_STATE: BoardState = {
  cells: [...Array(BOARD_HEIGHT)].map((_, y) =>
    [...Array(BOARD_WIDTH)].map((_, x) => {
      const foundShape = INITIAL_STATE.find(
        (shape) => shape.cellX === x && shape.cellY === y
      );
      return { shapeId: foundShape?.id || null };
    })
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

const Canvas = () => {
  const [board, setBoard] = useState<BoardState>(INITIAL_BOARD_STATE);
  const [rects, setRects] = useState<ShapeState[]>(INITIAL_STATE);

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
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Drag squares around!" />
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
