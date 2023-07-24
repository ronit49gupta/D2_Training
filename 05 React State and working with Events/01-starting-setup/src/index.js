import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import {IntlProvider} from 'react-intl';
import English from './lang/en.json';

const locale = navigator.language;

let lang = English;
// if (locale==="en") {
//    lang = English;
// } else {
//    if (locale === "fr") {
//        lang = French;
//    } else {
//        lang = Arabic;
//    }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale ={locale} messages={English}>
       <App />
   </IntlProvider>
);
