import React, { useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import './index.css';

type props = {
  Name: string,
  Count: number,
  Color: string,
}

const maxWitdh: number = 300;
const weatherlist: Array<props> = [
  {
    Name: 'sunny',
    Count: 40,
    Color: '#ff4500',
  },{
    Name: 'cloudy',
    Count: 20,
    Color: '#666666',
  },{
    Name: 'rainny',
    Count: 30,
    Color: '#1e90ff',
  },{
    Name: 'thunder',
    Count: 10,
    Color: '#ffd700',
  },
];

function fillGraph (ctx: any, max: number, min: number, color: string, value: number) {
  const textX = (min + max) / 2 - 10;
  
  ctx.fillStyle = 'black';
  ctx.fillText(value, textX, 30);
  ctx.font = '12px serif';
  ctx.fillStyle = color
  ctx.fillRect(min, 40, max, 50);
  ctx.save();
  
}

function Graph() {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;

    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();
    let max: number = 0;
    let min: number = 0;

    weatherlist.forEach((value) => {
      console.log(value);
      max += value.Count / 100 * maxWitdh;
      fillGraph(ctx, max, min, value.Color, value.Count);
      min = max;
    });
  })

  return (
    <div className="graph-class">
      <canvas className="canvas" ref={canvasRef} width={300} height={50} />
    </div>
  );
}

export default Graph;