import React from 'react';
import s from './HeaderBlock.module.css';

// import BackgroundImage from "./components/HeaderBlock/img/background.jpg"


import ReactLogo from '../../logo.svg';
// import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

const HeaderBlock = ({title, headerStyle, BackgroundImage, descr}) => {
    return (

        <div className={s.cover} style={headerStyle}>

            <img className={s.logo} src={ReactLogo} alt=""/>
            <div className={s.wrap}>
                {title && <h1 className={s.header} style={headerStyle}>{title}</h1>}

                {/*<ReactLogoSvg />*/}
                {descr && <p className={s.descr}>{descr}</p>}

            </div>
        </div>

    )
}
export default HeaderBlock;
