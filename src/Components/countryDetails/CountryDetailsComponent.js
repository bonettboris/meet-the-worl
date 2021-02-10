import React from "react";
import MapComponent from "../Map";

const CountryDetailsModal = ({
  showModal,
  countrySelected,
  handleModalStatus,
}) => {
  
  const getBordersByCountry = (country) => {
    let borders = [];
    country.borders.forEach(border => {
      borders.push(` ${border} /`);
    });
    return borders;
  }

  return (
    <React.Fragment>
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <span
              className="close-button"
              onClick={() => handleModalStatus([], "OPEN")}
            >
              &times;
            </span>
            <div className="modal__content__info">
            <h4 className="field"><span>Country Name: </span>{countrySelected.name}</h4>
              <div className="avatar">
                <img
                  className="flag flag--size"
                  src={countrySelected.flag}
                  alt={countrySelected.name}
                />
              </div>
              <div>
                <h4 className="field"><span>Location:</span></h4>
                <MapComponent location={countrySelected.latlng}/>
              </div>
              <div className="description">
                <h4 className="field"><span>Region: </span>{countrySelected.subregion}</h4>
                <h4 className="field"><span>Top Level Domian: </span>{countrySelected.topLevelDomain[0]}</h4>
                <h4 className="field"><span>Code: </span>{countrySelected.alpha3Code}</h4>
                <h4 className="field"><span>Population: </span>{countrySelected.population}</h4>
                <h4 className="field"><span>Borders: </span>{getBordersByCountry(countrySelected)}</h4>
                <h4 className="field"><span>Language: </span>{countrySelected.languages[0].name}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CountryDetailsModal;
