import { styled } from '@linaria/react';
import { tokens } from '@mstyle/theme';
import { spacing } from '@/utils';
import { type VariantProps } from './demo';

// Use style maps for each styled component.
const wrapperStyleRules: Record<string, (props: VariantProps) => string> = {
  padding({ size = 'small' }) {
    const paddingBySize = {
      small: spacing(0.75),
      medium: spacing(1),
      large: spacing(2),
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
  width({ size = 'small', fluid = false }) {
    const widthBySize = {
      small: `calc(${tokens.spacing} * 10)`,
      medium: `calc(${tokens.spacing} * 15)`,
      large: `calc(${tokens.spacing} * 20)`,
    };
    if (fluid) {
      return '100%';
    }
    return widthBySize[size];
  },
};

// Use Linaria to define styled components
export const Wrapper = styled.div<VariantProps>`
  max-width: ${wrapperStyleRules.width};
  background-color: ${wrapperStyleRules.backgroundColor};
  padding: ${wrapperStyleRules.padding};
  border-radius: ${tokens.borderRadius.L};
`;

export const Title = styled.h2`
  color: ${tokens.colors.textNeutral100};
  margin: 0;
`;
