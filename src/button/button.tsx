import * as React from 'react';
import { ButtonColor, ButtonSize, ButtonVariant } from './types';
import * as Styled from './button.styled';

export interface CustomButtonProps {
  icon?: React.FC;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  shadow?: boolean;
  fluid?: boolean;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = CustomButtonProps & NativeButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon: Icon,
      size = 'l',
      color = 'system_regular',
      variant,
      shadow = false,
      fluid = false,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Styled.Button
        ref={ref}
        size={size}
        color={color}
        variant={variant}
        shadow={shadow}
        fluid={fluid}
        hasText={!!children}
        hasIcon={!!Icon}
        {...rest}
      >
        {Icon && (
          <Styled.IconContent size={size} hasText={!!children}>
            <Icon />
          </Styled.IconContent>
        )}
        <Styled.TextContent size={size}>{children}</Styled.TextContent>
      </Styled.Button>
    );
  }
);

Button.displayName = 'Button';
