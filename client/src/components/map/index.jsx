import React, { useState, useEffect } from "react";
import "./index.css";

const GoogleMaps = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [response, setResponse] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initMap();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const newMap = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
      mapTypeControl: false,
    });
    setMap(newMap);

    const newGeocoder = new window.google.maps.Geocoder();
    setGeocoder(newGeocoder);

    const newMarker = new window.google.maps.Marker({
      map: newMap,
    });
    setMarker(newMarker);

    newMap.addListener("click", (e) => {
      geocode({ location: e.latLng });
    });
  };

  const clear = () => {
    if (marker) {
      marker.setMap(null);
    }
  };

  const geocode = (request) => {
    clear();

    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;

        if (results.length > 0) {
          const { geometry } = results[0];
          const { location } = geometry;
          map.setCenter(location);
          marker.setPosition(location);
          marker.setMap(map);
          setResponse(JSON.stringify(result, null, 2));
        }
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGeocodeButtonClick = () => {
    geocode({ address: inputText });
  };

  const handleClearButtonClick = () => {
    clear();
  };

  return (
    <div>
      <div id="map"></div>
      <input
        type="text"
        placeholder="Enter a location"
        value={inputText}
        onChange={handleInputChange}
      />
      <input
        type="button"
        value="Geocode"
        className="button button-primary"
        onClick={handleGeocodeButtonClick}
      />
      <input
        type="button"
        value="Clear"
        className="button button-secondary"
        onClick={handleClearButtonClick}
      />
      <pre id="response">{response}</pre>
      <p id="instructions">
        <strong>Instructions</strong>: Enter an address in the textbox to
        geocode or click on the map to reverse geocode.
      </p>
    </div>
  );
};

export default GoogleMaps;
