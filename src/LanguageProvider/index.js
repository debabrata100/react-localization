import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { translatedMessages } from '../i18n';

function LanguageProvider(props){
    return (
    <IntlProvider locale={props.locale} messages={translatedMessages[props.locale]}>
        { props.children }
    </IntlProvider>);
}
LanguageProvider.propTypes = {
    locale: PropTypes.string,
    children: PropTypes.element.isRequired,
};
export default LanguageProvider;