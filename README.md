# UI kit

## Overview
React-based UI library styled with Linaria, a zero-runtime CSS-in-JS solution.  
It is built with Vite for fast, efficient builds and uses Storybook to provide component documentation and interactive previews.

## Features
- React + TypeScript support
- Linaria for styling without runtime overhead
- Storybook integration for live component previews and documentation

## Installation
```bash
npm install @organization/ui-kit
```

## Usage (Demo)
Before using the package, you need to set up the global theme.
```jsx
// main.ts, app.tsx ...
import '@organization/theme/theme.css';
```
After that, you can leverage all the benefits of the ui-kit.
```jsx
import { Demo } from '@organization/ui-kit/demo';
// import { Demo } from '@organization/ui-kit';

function App() {
  return <Demo color="promary" size="medium" />;
} 
```

## Developing
Install
```bash
npm install
```
Run Storybook
```bash
npm run storybook
```
Build the library
```bash
npm run build
```

## Adding a Component
You should follow the **kebab-case** convention when naming files and directories.

### Component Structure
```
component-name/                     # Component directory
├── component-name.stories.ts       # Storybook stories: usage examples and visual docs
├── component-name.styled.ts        # Styled-components / linaria styles
├── component-name.tsx              # Core React component (logic + JSX)
└── index.ts                        # Entry point: re-exports for cleaner imports
```
### Styles
- Use [Linaria](https://linaria.dev/) to define styled components.
- Use **global-theme** tokens to define properties.
- Use style maps for each styled component.
- Use mapping for variant props.
- Use **Wrapper** or **Root** for the root element of a component.
- By default, use rem units for sizing.
- There is a global CSS variable `--spacing` equal to 1rem by default. This can be useful for third-party projects where you might need a different base spacing. 
- Use the utility `spacing()` to ensure consistent spacing values within components.  

If you need to change this default value, simply override it in your CSS:
```css
:root {
  --spacing: 0.875rem; /* example override */
}
```

Example:
```typescript
import { styled } from '@linaria/react';
import { tokens } from '@organization/theme';
import { spacing } from '@/utils';
import { type VariantProps } from './demo';

// Use style maps for each styled component.
const wrapperStyleRules: Record<string, (props: VariantProps) => string> = {
  padding({ size = 'small' }) {
    const paddingBySize = { // Use mapping for variant props
      small: spacing(0.75), // Use the utility `spacing()` to ensure consistent spacing values within components. 
      medium: spacing(1),
      large: spacing(2), // 'calc(var(--spacing) * 2)'
    };
    return paddingBySize[size];
  },
  backgroundColor({ color = 'primary' }) {
    const backgroundColorByColor = {
      primary: tokens.colors.primary100, // Use global-theme tokens to define properties
      secondary: tokens.colors.secondary100,
    };
    return backgroundColorByColor[color];
  },
};

// Use Linaria to define styled components
// Use Wrapper or Root for the root element of a component.
export const Wrapper = styled.div<VariantProps>`
  background-color: ${wrapperStyleRules.backgroundColor};
  padding: ${wrapperStyleRules.padding};
`;
```

### Storybook
- Use Storybook to showcase the components.
- Use the title as the component name.
- Use args to control the presentation.

Example:
```typescript
import { Demo } from './demo';

export default {
  title: 'Demo', // Use the title as the component name.
  component: Demo,
  tags: ['autodocs'],
  argTypes: { // Use args to control the presentation.
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    fluid: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    size: 'medium',
    color: 'primary',
    fluid: false,
  },
};

export const Primary = {
  args: {},
};
```


