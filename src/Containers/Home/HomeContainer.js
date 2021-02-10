import React, { useEffect, useState } from "react";
import CountriesListComponent from "../../Components/CountriesList";
import CountryDetailsModal from "../../Components/countryDetails";
import FilterComponent from "../../Components/Filter";
import LoaderComponent from "../../Components/Common/Loader";

import SETTINGS from "../../Config";

const HomePage = () => {
  const [showCountryDetails, setShowCountryDetails] = useState(false);
  const [countries, setCountries] = useState(null);
  const [countriesList, setCountriesList] = useState(null);
  const [countrySelected, setCountrySelected] = useState(null);

  useEffect(() => {
    async function getCountries() {
      try {
        let response = await fetch(SETTINGS.API_URL);
        if (response.ok) {
          const countries = await response.json();
          setCountries(countries);
          setCountriesList(countries);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getCountries();
  }, []);

  const getCountryBySearching = (e) => {
    const value = e.target.value;
    let countriesList = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(value) ||
        country.region.toLowerCase().includes(value) ||
        country.capital.toLowerCase().includes(value) ||
        country.languages[0].iso639_1 == value ||
        country.callingCodes[0] == value
    );

    setCountriesList(countriesList);
  };

  const showCountryDetailsModal = (country, status) => {
    if (status === "OPEN") {
      setCountrySelected(country);
    }

    if (status === "CLOSE") {
      setCountrySelected(null);
    }

    setShowCountryDetails(!showCountryDetails);
  };

  return (
    <React.Fragment>
      <div>{!countriesList && (<LoaderComponent />)}</div>
      <div>
        {countriesList && (
          <div className="wrapper">
            <aside>
              <FilterComponent searchData={getCountryBySearching} />
            </aside>
            <main>
              <CountriesListComponent
                countriesList={countriesList}
                handleModalStatus={showCountryDetailsModal}
              />
            </main>
          </div>
        )}
      </div>
      <CountryDetailsModal
        showModal={showCountryDetails}
        countrySelected={countrySelected}
        handleModalStatus={showCountryDetailsModal}
      />
    </React.Fragment>
  );
};

export default HomePage;
