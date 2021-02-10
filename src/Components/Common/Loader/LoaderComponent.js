import React from "react";

const LoaderComponent = () => {
    return (
        <div className="main__wrapper">
            <div className="main__wrapper__content">
                <div class="loader"></div>
                <h6 className="loader--text">Loading ...</h6>
            </div>
        </div>
    )
};

export default LoaderComponent;