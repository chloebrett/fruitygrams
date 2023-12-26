import React from 'react';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';

function generateShapes() {
  return [...Array(26)].map((_, i) => ({
    id: i.toString(),
    x: snapValue(Math.random() * window.innerWidth),
    y: snapValue(Math.random() * window.innerHeight),
    isDragging: false,
    letter: getLetter(i),
  }));
}

const snapValue = (value: number) => {
  const out = Math.round(value / 60) * 60
  console.log(`in: ${value}, out: ${out}`)
  return out
}

const generateRandomInt = (min: number, max: number) =>
  (Math.random() * (max - min + 1)) + min

const getLetter = (index: number) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return chars.substring(index, index + 1);
}

const generateRandomLetter = () => {
  const index = generateRandomInt(0, 25);
  return getLetter(index);
}

const INITIAL_STATE = generateShapes();

const Canvas = () => {
  const [rects, setRects] = React.useState(INITIAL_STATE);

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
    setRects(
      rects.map((rect) => {
        if (rect.id === id) {
          console.log(e.target);
          const x = snapValue(e.target.x());
          const y = snapValue(e.target.y());
          target.setAbsolutePosition({ x, y })
          return {
            ...rect,
            x, y,
            isDragging: false,
          }
        } else {
          return { ...rect, isDragging: false, }
        }
      })
    );
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Drag squares around!" />
        {rects.map((rect) => (
          <Group id={rect.id} key={`group-${rect.id}`} x={rect.x} y={rect.y} draggable onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}><Rect
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
            /><Text key={`text-${rect.id}`} text={rect.letter} fontSize={40} /></Group>
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
