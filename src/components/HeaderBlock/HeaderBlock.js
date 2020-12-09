import React from 'react';
import s from './HeaderBlock.module.css';

// import BackgroundImage from "./components/HeaderBlock/img/background.jpg"


import ReactLogo from '../../logo.svg';

const HeaderBlock = ({headerStyle, children}) => {
    return (

        <div className={s.cover} style={headerStyle}>

            <img className={s.logo} src={ReactLogo} alt=""/>
            <div className={s.wrap}>
                {children}


            </div>
        </div>

    )
}
export default HeaderBlock;
