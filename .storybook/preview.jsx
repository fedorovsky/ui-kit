/** @type { import('@storybook/react-vite').Preview } */
import React from 'react';
import '@mstyle/theme/theme.css';
import './global.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light / Dark switch',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    React.useEffect(() => {
      // eslint-disable-next-line no-undef
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return <Story {...context} />;
  },
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
