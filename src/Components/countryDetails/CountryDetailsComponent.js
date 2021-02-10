import React from "react";

const CountryDetailsModal = ({
  showModal,
  countrySelected,
  handleModalStatus,
}) => {

    console.log(countrySelected)
  return (
    <React.Fragment>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => handleModalStatus([], "OPEN")}
            >
              &times;
            </span>
            <h3>{countrySelected.name}</h3>
            <h3>{countrySelected.subregion}</h3>
            <h4>{countrySelected.alpha3Code}</h4>
            <h4>{countrySelected.borders + ""}</h4>
            <h4>{countrySelected.topLevelDomain[0]}</h4>
            <h4>{countrySelected.languages[0].name}</h4>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CountryDetailsModal;
