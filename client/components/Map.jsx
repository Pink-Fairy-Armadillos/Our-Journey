import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import '@reach/combobox/styles.css';
import mapStyles from './mapStyles';

// Returns a object with the browser geolocation coordinates as a promise.
const getPosition = async () => {
  try {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  } catch (error) {
    console.log(error);
  }
};

const libraries = ['places'];
const mapContainerStyle = {
  width: '90vw',
  height: '100vh',
};

// Sample data from previous project.
const center = {
  lat: 39.321,
  lng: -111.950684,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDGbK9d6uevtoiG6D0Hskjxz2AS838JoTY',
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [initialCoords, setInitialCoords] = useState(null);

  useEffect(() => {
    getPosition().then(({ coords }) =>
      setInitialCoords({
        lat: coords.latitude,
        lng: coords.longitude,
      })
    );
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setMarkers([...markers, ...data.location]);
      });
  }, []);

  const onMapClick = React.useCallback((event) => {
    const data = {
      name: 'eddy',
      rating: 3,
      locationName: 'Jersey',
      location: { longitude: event.latLng.lng(), latitude: event.latLng.lat() },
    };

    fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'loading Maps';

  return (
    <div>
      <h1>Our Journey</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={initialCoords ? 9 : 3}
        center={initialCoords ? initialCoords : center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.reviewDate}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{selected.name}</h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
