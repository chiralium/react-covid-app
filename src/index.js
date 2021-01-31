import React from 'react';
import ReactDom from 'react-dom';
import { connect, Provider } from 'react-redux';
import init_store from './redux/store';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import style from './styles.css';

import App from './components/App';

function init_app() {
    ReactDom.render(
        <AppProvider i18n={ enTranslations }>
            <Provider store={ init_store() }>
                <App/>
            </Provider>
        </AppProvider>,
        document.getElementById('root')
    );
}

init_app();