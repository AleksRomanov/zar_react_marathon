import React from 'react';
import s from './HeaderBlock.module.css';

import ReactLogo from '../../logo.svg';
// import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

const HeaderBlock = ({title, headerStyle, descr}) => {
    return (

        <div className={s.cover} style={headerStyle}>

            <img className={s.logo} src={ReactLogo} />
            <div className={s.wrap}>
                {title && <h1 className={s.header} style={headerStyle}>{title}</h1>}

                {/*<ReactLogoSvg />*/}
                {descr && <p className={s.descr}>{descr}</p>}

            </div>
        </div>

    )
}
export default HeaderBlock;
