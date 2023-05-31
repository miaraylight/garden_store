import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import s from "./style.module.css";
import key from '../../apiKey'

export default function FooterMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 52.5079105, lng: 13.3744579 }), []);

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName={s.map_container}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
