import React from 'react';
import { Button } from './button';

const UserAdd = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <g fillRule="evenodd">
      <path
        fill="#fff"
        stroke="none"
        d="M7.2222 10.3924c-2.3218 0-4.204-1.8787-4.204-4.1962S4.9004 2 7.2222 2c2.3218 0 4.204 1.8787 4.204 4.1962s-1.8822 4.1962-4.204 4.1962zM5.1742 19H2.5876a3.1726 3.1726 0 0 1-1.1306-.2077c-.4128-.1575-.7127-.3434-.9-.5575-.654-.7483-.9937-2.2311.495-4.131.9925-1.2664 2.675-2.1967 4.122-2.2339 1.447-.037 2.6-.037 4.0962 0 1.4962.0372 3.1296.9675 4.122 2.234 1.4888 1.8998 1.1491 3.3826.495 4.1309-.1872.2141-.4872.4-.9.5575A3.1726 3.1726 0 0 1 11.8569 19H5.174zM17.5 4.55H20v1.7h-2.5V8.8h-1.6667V6.25h-2.5v-1.7h2.5V2H17.5v2.55z"
        fillRule="nonzero"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
      defaultValue: 'l',
    },
    color: {
      control: {
        type: 'radio',
      },
      options: [
        'primary',
        'secondary',
        'system_regular',
        'system_light',
        'custom_white',
        'custom500',
        'blur_light',
        'transparent',
      ],
      defaultValue: 'system_regular',
    },
    children: {
      control: {
        type: 'text',
      },
    },
    icon: {
      options: ['None', 'UserAdd'],
      mapping: {
        None: undefined,
        UserAdd: UserAdd,
      },
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    shadow: {
      control: 'boolean',
      defaultValue: false,
    },
    fluid: {
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: [undefined, 'text', 'rounded'],
      defaultValue: 'default',
    },
  },
  args: {
    size: 'l',
    color: 'system_regular',
    children: 'Button',
    shadow: false,
    disabled: false,
    fluid: false,
    variant: undefined,
  },
};

export const Primary = {
  args: {
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
  },
};

export const SystemRegular = {
  args: {
    color: 'system_regular',
  },
};

export const SystemLight = {
  args: {
    color: 'system_light',
  },
};

export const CustomWhite = {
  args: {
    color: 'custom_white',
  },
};

export const Custom500 = {
  args: {
    color: 'custom500',
  },
};

export const BlurLight = {
  args: {
    color: 'blur_light',
  },
};

export const Transparent = {
  args: {
    color: 'transparent',
  },
};
