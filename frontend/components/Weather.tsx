import Image from "next/image";
import { useEffect, useState } from "react";

import { api } from "../services/api";

export default function Weather() {
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

  return temperature !== undefined || weatherIcon !== undefined ? (
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
  ) : null;
}
