import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    isDragging: false,
  }));
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
    setRects(
      rects.map((rect) => {
        return {
          ...rect,
          isDragging: false,
        };
      })
    );
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Drag squares around!" />
        {rects.map((rect) => (
          <Rect
            key={rect.id}
            id={rect.id}
            x={rect.x}
            y={rect.y}
            width={60}
            height={60}
            fill="#fff"
            opacity={0.8}
            draggable
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={rect.isDragging ? 10 : 5}
            shadowOffsetY={rect.isDragging ? 10 : 5}
            scaleX={rect.isDragging ? 1.2 : 1}
            scaleY={rect.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
