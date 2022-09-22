import { Container } from 'components/GlobalStyles';
import { SignUpForm } from 'components/SignUpForm';
import { containerAnimation } from 'features/framer/containerAnimation';

const SignUpPage = () => {
  return (
    <Container {...containerAnimation}>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
