import * as React from 'react';
import * as Styled from './demo.styled';

export interface VariantProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fluid?: boolean;
}

export interface DemoProps extends VariantProps {
  slots?: {
    wrapper?: React.ElementType;
    title?: React.ElementType;
  };
  slotProps?: {
    wrapper?: React.HTMLAttributes<HTMLDivElement>;
    title?: React.HTMLAttributes<HTMLHeadingElement>;
  };
}

export const Demo = ({
  color = 'primary',
  size = 'medium',
  fluid = false,
  slots = {},
  slotProps = {},
}: DemoProps) => {
  const Wrapper = slots.wrapper ?? Styled.Wrapper;
  const Title = slots.title ?? Styled.Title;

  const wrapperProps = slotProps.wrapper ?? {};
  const titleProps = slotProps.title ?? {};

  return (
    <Wrapper {...wrapperProps} color={color} size={size} fluid={fluid}>
      <Title {...titleProps}>{titleProps.children ?? 'Title'}</Title>
    </Wrapper>
  );
};
