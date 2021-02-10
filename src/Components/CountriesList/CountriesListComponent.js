import React from "react";

const CountriesListComponent = ({ countriesList, handleModalStatus }) => {
  const getLanguageByCountry = (country) => {
    return country.languages[0].iso639_1;
  };

  const getCurrencyByCountry = (country) => {
    return country.currencies[0].code;
  };

  return (
    <div>
      {countriesList.map((country) => {
        return (
          <div
            className="item card"
            key={country.numericCode}
            onClick={() => handleModalStatus(country, 'OPEN')}
          >
            <div className="item__avatar">
              <img
                className="flag flag--size"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div className="item__information">
              <div className="item__information__heading">
                <h4 className="field">
                  <span>Country Name:</span> {country.name}
                </h4>
                <h4 className="field">
                  <span>Capital:</span> {country.capital}
                </h4>
              </div>
              <div className="item__information__description">
                <h4 className="field">
                  <span>Language:</span> {getLanguageByCountry(country)}
                </h4>
                <h4 className="field">
                  <span>Region:</span> {country.region}
                </h4>
                <h4 className="field">
                  <span>Currency:</span> {getCurrencyByCountry(country)}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesListComponent;
