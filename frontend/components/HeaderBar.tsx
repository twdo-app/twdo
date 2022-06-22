import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "../services/api";

import Title from "./common/Title";

export default function HeaderBar({
  title,
  showTemperature,
}: {
  title: string;
  showTemperature?: boolean;
}) {
  const [temperature, setTemperature] = useState(undefined);
  const [weatherIcon, setWeatherIcon] = useState(undefined);

  useEffect(() => {
    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      api
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${latitude},${longitude}`
        )
        .then((res) => {
          setTemperature(res.data.current.temp_c);
          setWeatherIcon(res.data.current.condition.icon);
        });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
  }, []);

  return (
    <header className="flex items-center justify-between w-full row-span-1 col-span-3 place-self-center">
      <div className="w-full flex flex-col">
        <Title>{title}</Title>
        <p className="text-slate-600 flex gap-1 h-5 text-sm">
          {showTemperature &&
          temperature !== undefined &&
          weatherIcon !== undefined ? (
            <>
              <Image
                height="12"
                width="20"
                className="flex-1"
                src={"https:" + weatherIcon}
                alt="current weather icon"
              />{" "}
              {temperature + "°C"}
            </>
          ) : null}
        </p>
      </div>
    </header>
  );
}
