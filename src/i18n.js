/**
 * i18n.js
 * 
 * This contains react-intl initializaion
 * 
 * exports AppLocaleList, translatedMessages, DEFAULT_LOCALE
 */

const AppLocaleList = [
    { name: 'English', code: 'en', lang: 'English' },
    { name: '中文', code: 'zh', lang: 'Chinese' },
    { name: 'русский', code: 'ru', lang: 'Russian' },
    { name: 'Française', code: 'fr', lang: 'French' }
];

const addLocaleData = require('react-intl').addLocaleData; 

const en = require('react-intl/locale-data/en');
const fr = require('react-intl/locale-data/fr');
const ru = require('react-intl/locale-data/ru');
const zh = require('react-intl/locale-data/zh');

addLocaleData(en);
addLocaleData(zh);
addLocaleData(fr);
addLocaleData(ru);

const enTranslationMessages = require('./translations/en.json');
const frTranslationMessages = require('./translations/fr.json');
const ruTranslationMessages = require('./translations/ru.json');
const zhTranslationMessages = require('./translations/zh.json');

const translatedMessages = {
    en: enTranslationMessages,
    fr: frTranslationMessages,
    ru: ruTranslationMessages,
    zh: zhTranslationMessages
};

const DEFAULT_LOCALE = navigator.language.match(/^[A-Za-z]{2}/)[0];

export { AppLocaleList, translatedMessages, DEFAULT_LOCALE };