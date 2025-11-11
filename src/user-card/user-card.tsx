import * as Styled from './user-card.styled';

export interface UserCardProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'square' | 'circle';
}

export const UserCard = ({
  size = 'small',
  type = 'square',
}: UserCardProps) => {
  return (
    <Styled.Root>
      <Styled.Avatar src="https://i.pravatar.cc/100" size={size} type={type} />
      <Styled.Name>John Doe</Styled.Name>
    </Styled.Root>
  );
};
