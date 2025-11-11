import { styled } from '@linaria/react';
import { tokens } from '@mstyle/theme';
import { spacing } from '@/utils';
import { ButtonSize, ButtonColor, ButtonVariant } from './types';

interface StyledButtonProps {
  size: ButtonSize;
  color: ButtonColor;
  variant?: ButtonVariant;
  shadow?: boolean;
  fluid?: boolean;
  disabled?: boolean;
  hasText?: boolean;
  hasIcon?: boolean;
}

const variantColor: Record<
  ButtonColor,
  {
    normal: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    hover: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    focus: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    active: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    disabled: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
  }
> = {
  primary: {
    normal: {
      color: tokens.components.buttons.primary.normal.text,
      backgroundColor: tokens.components.buttons.primary.normal.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.normal.backgroundImage,
      icon: tokens.components.buttons.primary.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.primary.hover.text,
      backgroundColor: tokens.components.buttons.primary.hover.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.hover.backgroundImage,
      icon: tokens.components.buttons.primary.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.primary.hover.text,
      backgroundColor: tokens.components.buttons.primary.hover.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.hover.backgroundImage,
      icon: tokens.components.buttons.primary.hover.icon,
    },
    active: {
      color: tokens.components.buttons.primary.active.text,
      backgroundColor: tokens.components.buttons.primary.active.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.active.backgroundImage,
      icon: tokens.components.buttons.primary.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.primary.disabled.text,
      backgroundColor:
        tokens.components.buttons.primary.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.primary.disabled.backgroundImage,
      icon: tokens.components.buttons.primary.disabled.icon,
    },
  },
  secondary: {
    normal: {
      color: tokens.components.buttons.secondary.normal.text,
      backgroundColor:
        tokens.components.buttons.secondary.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.normal.backgroundImage,
      icon: tokens.components.buttons.secondary.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.secondary.hover.text,
      backgroundColor:
        tokens.components.buttons.secondary.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.hover.backgroundImage,
      icon: tokens.components.buttons.secondary.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.secondary.hover.text,
      backgroundColor:
        tokens.components.buttons.secondary.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.hover.backgroundImage,
      icon: tokens.components.buttons.secondary.hover.icon,
    },
    active: {
      color: tokens.components.buttons.secondary.active.text,
      backgroundColor:
        tokens.components.buttons.secondary.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.active.backgroundImage,
      icon: tokens.components.buttons.secondary.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.secondary.disabled.text,
      backgroundColor:
        tokens.components.buttons.secondary.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.disabled.backgroundImage,
      icon: tokens.components.buttons.secondary.disabled.icon,
    },
  },
  system_regular: {
    normal: {
      color: tokens.components.buttons.system_regular.normal.text,
      backgroundColor:
        tokens.components.buttons.system_regular.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.normal.backgroundImage,
      icon: tokens.components.buttons.system_regular.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.system_regular.hover.text,
      backgroundColor:
        tokens.components.buttons.system_regular.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.hover.backgroundImage,
      icon: tokens.components.buttons.system_regular.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.system_regular.hover.text,
      backgroundColor:
        tokens.components.buttons.system_regular.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.hover.backgroundImage,
      icon: tokens.components.buttons.system_regular.hover.icon,
    },
    active: {
      color: tokens.components.buttons.system_regular.active.text,
      backgroundColor:
        tokens.components.buttons.system_regular.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.active.backgroundImage,
      icon: tokens.components.buttons.system_regular.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.system_regular.disabled.text,
      backgroundColor:
        tokens.components.buttons.system_regular.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.disabled.backgroundImage,
      icon: tokens.components.buttons.system_regular.disabled.icon,
    },
  },
  system_light: {
    normal: {
      color: tokens.components.buttons.system_light.normal.text,
      backgroundColor:
        tokens.components.buttons.system_light.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.normal.backgroundImage,
      icon: tokens.components.buttons.system_light.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.system_light.hover.text,
      backgroundColor:
        tokens.components.buttons.system_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.hover.backgroundImage,
      icon: tokens.components.buttons.system_light.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.system_light.hover.text,
      backgroundColor:
        tokens.components.buttons.system_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.hover.backgroundImage,
      icon: tokens.components.buttons.system_light.hover.icon,
    },
    active: {
      color: tokens.components.buttons.system_light.active.text,
      backgroundColor:
        tokens.components.buttons.system_light.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.active.backgroundImage,
      icon: tokens.components.buttons.system_light.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.system_light.disabled.text,
      backgroundColor:
        tokens.components.buttons.system_light.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.disabled.backgroundImage,
      icon: tokens.components.buttons.system_light.disabled.icon,
    },
  },
  custom_white: {
    normal: {
      color: tokens.components.buttons.custom_white.normal.text,
      backgroundColor:
        tokens.components.buttons.custom_white.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom_white.normal.backgroundImage,
      icon: tokens.components.buttons.custom_white.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.custom_white.hover.text,
      backgroundColor:
        tokens.components.buttons.custom_white.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom_white.hover.backgroundImage,
      icon: tokens.components.buttons.custom_white.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.custom_white.hover.text,
      backgroundColor:
        tokens.components.buttons.custom_white.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom_white.hover.backgroundImage,
      icon: tokens.components.buttons.custom_white.hover.icon,
    },
    active: {
      color: tokens.components.buttons.custom_white.active.text,
      backgroundColor:
        tokens.components.buttons.custom_white.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom_white.active.backgroundImage,
      icon: tokens.components.buttons.custom_white.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.custom_white.disabled.text,
      backgroundColor:
        tokens.components.buttons.custom_white.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom_white.disabled.backgroundImage,
      icon: tokens.components.buttons.custom_white.disabled.icon,
    },
  },
  custom500: {
    normal: {
      color: tokens.components.buttons.custom500.normal.text,
      backgroundColor:
        tokens.components.buttons.custom500.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom500.normal.backgroundImage,
      icon: tokens.components.buttons.custom500.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.custom500.hover.text,
      backgroundColor:
        tokens.components.buttons.custom500.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom500.hover.backgroundImage,
      icon: tokens.components.buttons.custom500.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.custom500.hover.text,
      backgroundColor:
        tokens.components.buttons.custom500.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom500.hover.backgroundImage,
      icon: tokens.components.buttons.custom500.hover.icon,
    },
    active: {
      color: tokens.components.buttons.custom500.active.text,
      backgroundColor:
        tokens.components.buttons.custom500.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom500.active.backgroundImage,
      icon: tokens.components.buttons.custom500.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.custom500.disabled.text,
      backgroundColor:
        tokens.components.buttons.custom500.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.custom500.disabled.backgroundImage,
      icon: tokens.components.buttons.custom500.disabled.icon,
    },
  },
  blur_light: {
    normal: {
      color: tokens.components.buttons.blur_light.normal.text,
      backgroundColor:
        tokens.components.buttons.blur_light.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.blur_light.normal.backgroundImage,
      icon: tokens.components.buttons.blur_light.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.blur_light.hover.text,
      backgroundColor:
        tokens.components.buttons.blur_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.blur_light.hover.backgroundImage,
      icon: tokens.components.buttons.blur_light.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.blur_light.hover.text,
      backgroundColor:
        tokens.components.buttons.blur_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.blur_light.hover.backgroundImage,
      icon: tokens.components.buttons.blur_light.hover.icon,
    },
    active: {
      color: tokens.components.buttons.blur_light.active.text,
      backgroundColor:
        tokens.components.buttons.blur_light.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.blur_light.active.backgroundImage,
      icon: tokens.components.buttons.blur_light.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.blur_light.disabled.text,
      backgroundColor:
        tokens.components.buttons.blur_light.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.blur_light.disabled.backgroundImage,
      icon: tokens.components.buttons.blur_light.disabled.icon,
    },
  },
  transparent: {
    normal: {
      color: tokens.components.buttons.transparent.normal.text,
      backgroundColor:
        tokens.components.buttons.transparent.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.transparent.normal.backgroundImage,
      icon: tokens.components.buttons.transparent.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.transparent.hover.text,
      backgroundColor:
        tokens.components.buttons.transparent.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.transparent.hover.backgroundImage,
      icon: tokens.components.buttons.transparent.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.transparent.hover.text,
      backgroundColor:
        tokens.components.buttons.transparent.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.transparent.hover.backgroundImage,
      icon: tokens.components.buttons.transparent.hover.icon,
    },
    active: {
      color: tokens.components.buttons.transparent.active.text,
      backgroundColor:
        tokens.components.buttons.transparent.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.transparent.active.backgroundImage,
      icon: tokens.components.buttons.transparent.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.transparent.disabled.text,
      backgroundColor:
        tokens.components.buttons.transparent.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.transparent.disabled.backgroundImage,
      icon: tokens.components.buttons.transparent.disabled.icon,
    },
  },
};

const buttonStyleRules: Record<string, (props: StyledButtonProps) => string> = {
  padding({ size, hasIcon, hasText }) {
    if (hasIcon && hasText) {
      const paddingBySize = {
        xs: `0 ${spacing(1)} 0 ${spacing(0.75)}`, // '0 1rem 0 0.75rem'
        s: `0 ${spacing(1)} 0 ${spacing(0.75)}`,
        m: `0 ${spacing(1)} 0 ${spacing(0.75)}`,
        l: `0 ${spacing(1)} 0 ${spacing(0.75)}`,
        xl: `0 ${spacing(1.25)} 0 ${spacing(1)}`,
        xxl: `0 ${spacing(1.25)} 0 ${spacing(1)}`,
      };
      return paddingBySize[size];
    }
    if (hasIcon && !hasText) {
      const paddingBySize = {
        xs: `0 ${spacing(0.5)}`,
        s: `0 ${spacing(0.5)}`,
        m: `0 ${spacing(0.5)}`,
        l: `0 ${spacing(0.5)}`,
        xl: `0 ${spacing(0.5)}`,
        xxl: `0 ${spacing(0.5)}`,
      };
      return paddingBySize[size];
    }
    const paddingBySize = {
      xs: `0 ${spacing(0.75)}`, // '0 0.75rem'
      s: `0 ${spacing(0.75)}`,
      m: `0 ${spacing(1)}`,
      l: `0 ${spacing(1.25)}`,
      xl: `0 ${spacing(1.25)}`,
      xxl: `0 ${spacing(1.25)}`,
    };
    return paddingBySize[size];
  },
  minHeight({ size }) {
    const minHeightBySize = {
      xs: spacing(1.5),
      s: spacing(1.75),
      m: spacing(2),
      l: spacing(2),
      xl: spacing(2.5),
      xxl: spacing(3),
    };
    return minHeightBySize[size];
  },
  borderRadius({ size, variant }) {
    if (variant === 'rounded') {
      return tokens.borderRadius.MAX;
    }
    const borderRadiusBySize = {
      xs: tokens.borderRadius.M,
      s: tokens.borderRadius.M,
      m: tokens.borderRadius.M,
      l: tokens.borderRadius.M,
      xl: tokens.borderRadius.L,
      xxl: tokens.borderRadius.L,
    };
    return borderRadiusBySize[size];
  },
  boxShadow({ shadow }) {
    return shadow ? '0 0.5rem 1rem -0.5rem rgba(0, 0, 0, 0.3)' : 'none';
  },
  width({ fluid }) {
    return fluid ? '100%' : 'auto';
  },
  minWidth({ hasText, size }) {
    if (hasText && size === 'l') {
      return spacing(6.5);
    }
    if (hasText && size === 'xl') {
      return spacing(7.3);
    }
    return 'auto';
  },
  color({ color }) {
    return variantColor[color].normal.color;
  },
  backgroundColor({ color }) {
    return variantColor[color].normal.backgroundColor;
  },
  backgroundImage({ color }) {
    return variantColor[color].normal.backgroundImage;
  },
  fill({ color }) {
    return variantColor[color].normal.icon;
  },
  backdropFilter({ color }) {
    if (color === 'blur_light') {
      return `blur(${spacing(2.5)})`;
    }
    return 'none';
  },
};

const buttonHoverStyleRules: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color({ color }) {
    return variantColor[color].hover.color;
  },
  backgroundColor({ color }) {
    return variantColor[color].hover.backgroundColor;
  },
  backgroundImage({ color }) {
    return variantColor[color].hover.backgroundImage;
  },
  fill({ color }) {
    return variantColor[color].hover.icon;
  },
};

const buttonFocusStyleRules: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color({ color }) {
    return variantColor[color].focus.color;
  },
  backgroundColor({ color }) {
    return variantColor[color].focus.backgroundColor;
  },
  backgroundImage({ color }) {
    return variantColor[color].focus.backgroundImage;
  },
  fill({ color }) {
    return variantColor[color].focus.icon;
  },
};

const buttonActiveStyleRules: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color({ color }) {
    return variantColor[color].active.color;
  },
  backgroundColor({ color }) {
    return variantColor[color].active.backgroundColor;
  },
  backgroundImage({ color }) {
    return variantColor[color].active.backgroundImage;
  },
  fill({ color }) {
    return variantColor[color].active.icon;
  },
};

const buttonDisabledStyleRules: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color({ color }) {
    return variantColor[color].disabled.color;
  },
  backgroundColor({ color }) {
    return variantColor[color].disabled.backgroundColor;
  },
  backgroundImage({ color }) {
    return variantColor[color].disabled.backgroundImage;
  },
  fill({ color }) {
    return variantColor[color].disabled.icon;
  },
};

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;
  border-radius: ${buttonStyleRules.borderRadius};
  padding: ${buttonStyleRules.padding};
  min-height: ${buttonStyleRules.minHeight};
  width: ${buttonStyleRules.width};
  min-width: ${buttonStyleRules.minWidth};
  box-shadow: ${buttonStyleRules.boxShadow};
  color: ${buttonStyleRules.color};
  background-color: ${buttonStyleRules.backgroundColor};
  background-image: ${buttonStyleRules.backgroundImage};
  backdrop-filter: ${buttonStyleRules.backdropFilter};

  & svg path,
  & svg circle {
    fill: ${buttonStyleRules.fill};
  }

  &:hover {
    color: ${buttonHoverStyleRules.color};
    background-color: ${buttonHoverStyleRules.backgroundColor};
    background-image: ${buttonHoverStyleRules.backgroundImage};
  }

  &:focus {
    color: ${buttonFocusStyleRules.color};
    background-color: ${buttonFocusStyleRules.backgroundColor};
    background-image: ${buttonFocusStyleRules.backgroundImage};
  }

  &:active {
    color: ${buttonActiveStyleRules.color};
    background-color: ${buttonActiveStyleRules.backgroundColor};
    background-image: ${buttonActiveStyleRules.backgroundImage};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${buttonDisabledStyleRules.color};
    background-color: ${buttonDisabledStyleRules.backgroundColor};
    background-image: ${buttonDisabledStyleRules.backgroundImage};
  }
`;

interface StyledTextContentProps {
  size: ButtonSize;
}

const textContentStyleRules: Record<
  string,
  (props: StyledTextContentProps) => string
> = {
  fontSize({ size }) {
    const fontSizeBySize = {
      xs: spacing(0.75),
      s: spacing(0.75),
      m: spacing(0.8),
      l: spacing(0.9),
      xl: spacing(1),
      xxl: spacing(1.3),
    };
    return fontSizeBySize[size];
  },
  lineHeight({ size }) {
    const lineHeightBySize = {
      xs: spacing(1.5),
      s: spacing(1.75),
      m: spacing(2),
      l: spacing(2),
      xl: spacing(2.5),
      xxl: spacing(3),
    };
    return lineHeightBySize[size];
  },
  fontWeight({ size }) {
    const fontWeightBySize = {
      xs: '500',
      s: '600',
      m: '600',
      l: '600',
      xl: '600',
      xxl: '600',
    };
    return fontWeightBySize[size];
  },
};

export const TextContent = styled.div<StyledTextContentProps>`
  font-size: ${textContentStyleRules.fontSize};
  line-height: ${textContentStyleRules.lineHeight};
  font-weight: ${textContentStyleRules.fontWeight};
`;

interface StyledIconContentProps {
  size: ButtonSize;
  hasText?: boolean;
}

const iconContentStyleRules: Record<
  string,
  (props: StyledIconContentProps) => string
> = {
  marginRight({ size, hasText }) {
    if (hasText) {
      const marginRightBySize = {
        xs: spacing(0.5),
        s: spacing(0.5),
        m: spacing(0.5),
        l: spacing(0.5),
        xl: spacing(0.75),
        xxl: spacing(0.75),
      };
      return marginRightBySize[size];
    }
    return '0';
  },
  opacity({ hasText }) {
    return hasText ? '0.9' : '1';
  },
};

export const IconContent = styled.div<StyledIconContentProps>`
  margin-right: ${iconContentStyleRules.marginRight};
  opacity: ${iconContentStyleRules.opacity};
  width: ${spacing(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;

  & svg {
    width: 100%;
    height: auto;
  }
`;
