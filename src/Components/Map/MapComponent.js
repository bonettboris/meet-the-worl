import React from "react";
import GoogleMapReact from "google-map-react";

import SETTINGS from "../../Config";

const MapComponent = ({ location }) => {

  const renderMapByCountry = () => {
      const coordinates = location.slice('');
      const lat = coordinates[0];
      const lng = coordinates[1];
      const settings = {
        center: {
          lat,
          lng
        }
      };

      return (
        <div style={{ height: '200px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={SETTINGS.API_KEY_MAP}
                defaultCenter={settings.center}
                defaultZoom={1}
            ></GoogleMapReact>
        </div>
      )
  }

  return (
    <React.Fragment>
        { location && (renderMapByCountry())}
    </React.Fragment>
  );
};

export default MapComponent;
