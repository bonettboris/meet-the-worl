import React from "react";

const FilterComponent = ({searchData}) => {
    return (
        <div className="filter card">
            <div className="filter__title">
                <h2 className="text--style">Filter</h2>
            </div>
            <div className="filter__form">
                <input type="text" className="input--style" placeholder="Find your country" onChange={(e) => searchData(e)}/>
            </div>
        </div>
    )
};

export default FilterComponent;
