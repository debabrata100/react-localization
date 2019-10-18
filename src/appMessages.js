/*
 * App Messages
 *
 * This contains all the text for the App component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'reactlocalization.app';

export default defineMessages({
  projectHeader: {
    id: `${scope}.header`,
    defaultMessage: 'Localization in Create React App',
  },
  projectFooter: {
    id: `${scope}.footer`,
    defaultMessage: 'Love you 3000',
  }
});
