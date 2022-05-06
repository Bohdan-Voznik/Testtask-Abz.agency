import { Section, Title } from './Success.styled';
import { ReactComponent as Svg } from 'img/Success.svg';
import { Container } from 'components/Container/Container';

export const Success = () => {
  return (
    <Section>
      <Container>
        <Title>User successfully registered</Title>
        <Svg />
      </Container>
    </Section>
  );
};
