/* global kakao */

import React, { useEffect, useState, useRef } from "react";

export default function Weather(props) {
  const { markerPositions, size } = props;
  const [Weather, setWeather] = useState(null);
  const [, setMarkers] = useState([]);

  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart?appkey=F2Rw4w1N2FlrIJZmsiYjs6pSjy7B3P9AK0K3tu%2BTtMps%2FQfVU8KSOWRsSQv8AyK5MsoL8P7fRnvdwbqWVNNtDw%3D%3Dautoload=false";
    document.head.appendChild(script);

    script.onload = () => {
        Weather.maps.load(() => {
        const center = new Weather.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 3
        };
        const map = new Weather.maps.Map(container.current, options);
        //setMapCenter(center);
        setWeather(map);
      });
    };
  }, [container]);

  useEffect(() => {
    if (Weather === null) {
      return;
    }

    // save center position
    const center = Weather.getCenter();

    // change viewport size
    const [width, height] = size;
    container.current.style.width = `${width}px`;
    container.current.style.height = `${height}px`;

    // relayout and...
    Weather.relayout();
    // restore
    Weather.setCenter(center);
  }, [Weather, size]);

  useEffect(() => {
    if (Weather === null) {
      return;
    }

    const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));

    setMarkers(markers => {
      // clear prev markers
      markers.forEach(marker => marker.setMap(null));

      // assign new markers
      return positions.map(
        position => new Weather.maps.Marker({ map: Weather, position })
      );
    });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );

      Weather.setBounds(bounds);
    }
  }, [Weather, markerPositions]);

  return <div id="container" ref={container} />;
}
