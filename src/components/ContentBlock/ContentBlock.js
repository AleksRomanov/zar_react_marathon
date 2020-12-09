import React from 'react';
import s from './ContentBlock.module.css';

// import ReactLogo from '../../logo.svg';
// import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

const ContentBlock = ({title, contentText}) => {

    return (
        <div className={s.content}>
            <div className={s.wrap}>
                {title && <h1 className={s.title}>{title}</h1>}

                {/*<img src={ReactLogo} alt=""/>*/}
                {/*/!*<ReactLogoSvg />*!/*/}
                {contentText && <p className={s.contentText}>{contentText}</p>}
            </div>
        </div>
    )
}
export default ContentBlock;
