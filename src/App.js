import React from 'react';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";


const App = () => {
    return (
        <React.Fragment>
            <HeaderBlock
                title='Учите слова онлайн'
                descr='Воспользуйтесь карточками для запоминания
                    и пополнения активныйх словарных запасов.'
                headerStyle={
                    {
                        backgroundColor: 'yellow',
                        color: 'black',
                        fontsize: '50px'
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
                        fontsize: '60px'
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
