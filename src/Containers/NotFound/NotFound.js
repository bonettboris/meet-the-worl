import React from 'react';
import { useHistory } from "react-router-dom";


const NotFoundPage = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    }
    return(
        <div className="main__wrapper">
            <div className="main__wrapper__content">
                <h1 className="heading">Ops!, Page not found !</h1>
                <button onClick={() => goToHome()}>Go Back</button>
            </div>
        </div>
    )
}

export default NotFoundPage;
