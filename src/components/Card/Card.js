import React from 'react';
import s from './Card.module.css';

class Card extends React.Component {
    render() {
        const { eng, rus } = this.props;
        return (
            <div className={s.card}>
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        {this.props.eng}
                    </div>
                    <div className={s.cardBack}>
                        {this.props.rus}
                    </div>
                </div>

            </div>
        );
    }
}

export default Card;
