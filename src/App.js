import React from 'react';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import BackgroundImage from "../src/components/HeaderBlock/img/background.jpg";
import BackgroundImage_2 from "../src/components/HeaderBlock/img/background2.jpg";


const App = () => {
    return (
        <React.Fragment>
            <HeaderBlock
                title='Учите слова онлайн'
                descr='Воспользуйтесь карточками для запоминания
                    и пополнения активныйх словарных запасов.'
                headerStyle={
                    {
                        // backgroundColor: 'yellow',
                        color: 'white',
                        fontsize: '50px',
                        backgroundImage: `url(${BackgroundImage})`
                    }
                }
            />

            <HeaderBlock
                title='Я люблю Реакт и безумно сильно хочу его понять!!!'
                descr='Участвуем и делаем задания!!!'
                headerStyle={
                    {
                        backgroundColor: 'red',
                        color: 'white',
                        fontsize: '60px',
                        backgroundImage: `url(${BackgroundImage_2})`
                    }
                }
                // hideBackground={false}
            />

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
