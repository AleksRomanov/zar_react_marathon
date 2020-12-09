import React from 'react';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import BackgroundImage from "../src/components/HeaderBlock/img/background.jpg";
import BackgroundImage_2 from "../src/components/HeaderBlock/img/background2.jpg";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";

import {ReactComponent as ReactLogo} from '../src/components/Paragraph/img/logo.svg';
import Card from "./components/Card/Card";

const wordsList = [
    {
        eng: 'between',
        rus: 'между'
    },
    {
        eng: 'high',
        rus: 'высокий'
    },
    {
        eng: 'really',
        rus: 'действительно'
    },
    {
        eng: 'something',
        rus: 'что-нибудь'
    },
    {
        eng: 'most',
        rus: 'большинство'
    },
    {
        eng: 'another',
        rus: 'другой'
    },
    {
        eng: 'much',
        rus: 'много'
    },
    {
        eng: 'family',
        rus: 'семья'
    },
    {
        eng: 'own',
        rus: 'личный'
    },
    {
        eng: 'out',
        rus: 'из/вне'
    },
    {
        eng: 'leave',
        rus: 'покидать'
    },
];



const App = () => {
    return (
        <React.Fragment>
            <HeaderBlock
                headerStyle={
                    {
                        backgroundColor: 'yellow',
                        color: 'white',
                        fontsize: '50px',
                        backgroundImage: `url(${BackgroundImage})`
                    }
                }
            >
                <Header>
                    Время учить и учить и учииииииитььььььсяяяяя!!!!!
                </Header>
                <Paragraph>
                    Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов.
                </Paragraph>

            </HeaderBlock>

            <div>
                {
                    wordsList.map(({eng, rus}) => <Card eng={eng} rus={rus}/>)
                }
            </div>

            <HeaderBlock
                headerStyle={
                    {
                        backgroundColor: 'red',
                        color: 'white',
                        fontsize: '60px',
                        backgroundImage: `url(${BackgroundImage_2})`
                    }
                }
                // hideBackground={false}
            >
                <Header>
                    Я люблю Реакт и безумно сильно хочу его понять!!!
                </Header>
                <Paragraph>
                    Участвуем и делаем задания!!!
                </Paragraph>
                <ReactLogo />

            </HeaderBlock>

            <ContentBlock title='Страница с контентом'
                          contentText='Воспользуйтесь карточками для запоминания
                    и пополнения активныйх словарных запасов.Воспользуйтесь карточками для запоминания
                    и пополнения активныйх словарных запасов.Воспользуйтесь карточками для запоминания
                    и пополнения активныйх словарных запасов.'

            />

            <ContentBlock title='Страница с контентом 2'
                          contentText='Не пользуйтесь ничем и ничего не учите, если не хотите одержать победу!
                          Не пользуйтесь ничем и ничего не учите, если не хотите одержать победу!
                          Не пользуйтесь ничем и ничего не учите, если не хотите одержать победу!.'


            />
            <FooterBlock title='Все права защищены!'
                         footerText='Aleks Romanov 2020. Krasnoyarsk'


            />
        </React.Fragment>
    );
}

export default App;
