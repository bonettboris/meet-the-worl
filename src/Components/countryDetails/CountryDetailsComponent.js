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
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CountryDetailsModal;
