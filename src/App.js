import React, { useState } from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl';
import LanguageProvider from './LanguageProvider';
import { AppLocaleList, DEFAULT_LOCALE } from './i18n';
import messages from './appMessages';

const defaultLocale = localStorage['locale'] ? localStorage['locale'] : DEFAULT_LOCALE; 

function App() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const onChangeLanguage = (e) => {
    const selectedLocale = e.target.value;
    setCurrentLocale(selectedLocale);
    localStorage.setItem('locale',selectedLocale)
}
  return (
    <LanguageProvider locale={currentLocale}>
      <div className="App">
        <h1><FormattedMessage {...messages.projectHeader} /></h1>
        <select onChange={onChangeLanguage} defaultValue={currentLocale}>
            {
                AppLocaleList.map((locale,index)=>(
                  <option key={index} value={locale.code}>{locale.name}</option>
                ))
            }
        </select>
        <footer><FormattedMessage {...messages.projectFooter} />&spades;</footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
