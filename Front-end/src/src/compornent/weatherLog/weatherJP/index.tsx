import React from 'react'
import LogJP from './Log-JP'

type weather = {
    weatherName: string,
    ditail: string,
}

const WeatherJP: React.FC = () => {
    const [weathers, setWeathers] = React.useState<weather[] | null>(null);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api');
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

        return(
            <div>
            {weathers?.map((wt, index) => (
                <div key={index}>
                    <p>{wt.weatherName}</p>
                    <p>{wt.ditail}</p>
                    <p>{index}</p>
                </div>
            ))}
        </div>
    )

}
export default WeatherJP;
