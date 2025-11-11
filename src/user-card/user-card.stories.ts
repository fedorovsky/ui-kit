import { UserCard } from './user-card';

export default {
  title: 'UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    type: {
      control: {
        type: 'radio',
      },
      options: ['square', 'circle'],
      defaultValue: 'square',
    },
  },
  args: {
    size: 'medium',
    type: 'square',
  },
};

export const Primary = {
  args: {},
};
