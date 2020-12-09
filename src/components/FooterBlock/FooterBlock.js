import React from 'react';
import s from './FooterBlock.module.css';

// import ReactLogo from '../../logo.svg';
// import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

const FooterBlock = ({title, footerText}) => {

    return (
        <div className={s.footer}>
            <div className={s.wrap}>
                {title && <h1 className={s.title}>{title}</h1>}

                {/*<img src={ReactLogo} alt=""/>*/}
                {/*/!*<ReactLogoSvg />*!/*/}
                {footerText && <p className={s.footerText}>{footerText}</p>}
            </div>
        </div>
    )
}
export default FooterBlock;
