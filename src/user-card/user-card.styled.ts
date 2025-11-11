import { styled } from '@linaria/react';
import { tokens } from '@mstyle/theme';
import { spacing } from '@/utils';
import type { UserCardProps } from './user-card';

export const Root = styled.div`
  background-color: ${tokens.colors.neutral100};
  border-radius: ${tokens.borderRadius.L};
  padding: calc(${tokens.spacing} * 0.5); // calc example 0.5rem
  display: flex;
  gap: ${spacing(1)}; // spacing example
  align-items: center;
`;

const avatarStyleRules: Record<string, (props: UserCardProps) => string> = {
  width({ size = 'small' }) {
    const widthBySize = {
      small: '3rem',
      medium: '5rem',
      large: '8rem',
    };
    return widthBySize[size];
  },
  height({ size = 'small' }) {
    const heightBySize = {
      small: '3rem',
      medium: '5rem',
      large: '8rem',
    };
    return heightBySize[size];
  },
};

export const Avatar = styled.img<UserCardProps>`
  width: ${avatarStyleRules.width};
  height: ${avatarStyleRules.height};
  border-radius: ${(props) => {
    if (props.type === 'circle') {
      return tokens.borderRadius.MAX;
    }
    if (props.type === 'square') {
      return tokens.borderRadius.L;
    }
    return tokens.borderRadius.L;
  }};
`;

export const Name = styled.h2<UserCardProps>`
  font-size: 2rem;
`;
