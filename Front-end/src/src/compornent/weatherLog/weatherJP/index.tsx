import React, { useRef, useEffect} from 'react';
import './index.css';

type weather = {
    weatherName: string,
    ditail: string,
}

type props = {
  Name: string,
  ditail: string,
  date: string,
}

const weatherlist: Array<props> = [
    {
      Name: 'sunny',
      ditail: "ダーツが楽しい",
      date: '2023/03/24',
    },{
      Name: 'cloudy',
      ditail: "接続がうまくいかない",
      date: '2023/03/25',
    },{
      Name: 'rainny',
      ditail: "朝起きるのが辛い",
      date: '2023/03/26',
    },{
      Name: 'thunder',
      ditail: "バックエンドが難しい",
      date: '2023/04/05',
    },
  ];

  const fillCanvas = (ctx:any, Name: string, min: number, max: number) => {
    console.log(min, max);
    ctx.beginPath();
    ctx.moveTo(25,min);
    ctx.lineTo(25,max);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.stroke();

    switch (Name) {
        case 'sunny' :
            ctx.fillStyle = '#ff4500';
            break;
        case 'cloudy' :
            ctx.fillStyle = '#666666';
            break;
        case 'thunder' :
            ctx.fillStyle = '#ffd700';
            break;
    };
  }

const WeatherJP = () => {
    const canvasRef = useRef(null);
    const getContext = (): CanvasRenderingContext2D => {
        const canvas: any = canvasRef.current;
        
        return canvas.getContext('2d');
    };

    const [weathers, setWeathers] = React.useState<weather[] | null>(null);

    React.useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch('/get');
                const json: React.SetStateAction<weather[] | null> = await res.json();
                setWeathers(json);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    console.error(e.message);
                }
            }
        };

        fetchData();

    }, []);

    const displayCanvas = () => {
        const ctx: CanvasRenderingContext2D = getContext();
        let max: number = 0;
        let min: number = 0;
        weatherlist.forEach((value) => {
            max = max + 50;
            fillCanvas(ctx ,value.Name, min, max);
            min = max;
          });
    }

        return(
            <div>
                <h3>みんなの投稿</h3>
                {weatherlist?.map((wt, index) => (
                    <div className='list' key={index}>
                        <div className='canvas'>
                            <canvas className="canvas" ref={canvasRef} width={50} height={50} onLoad={displayCanvas} />
                        </div>
                        <div className='detail'>
                            <p className='time'>9:24</p>
                            <p>{wt.ditail}</p>
                        </div>
                    </div>
                ))}
            </div>
    )

}
export default WeatherJP;
