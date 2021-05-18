import React from 'react';
import linkedin from '../../../Icons/linkedin.png'
import github from '../../../Icons/github.png';

const FooterComponent = () => {
    return(
        <footer className="footerContainer">
            <h3 style={{color:'white', marginLeft: '18px'}}>Created by B.Bonett jaramillo</h3>
            <div style={{margin: '0 0 7px 18px'}}>
                <a style={{marginRight: '15px'}} href='https://www.linkedin.com/in/boris-bonett-1270721a5/'><img src={linkedin} alt={linkedin}/></a>
                <a><img src={github} alt={github}/></a>
            </div>
        </footer>
    );
};

export default FooterComponent;