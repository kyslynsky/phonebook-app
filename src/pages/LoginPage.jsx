import { Container } from 'components/GlobalStyles';
import { LoginForm } from 'components/LoginForm';
import { containerAnimation } from 'features/framer/containerAnimation';

const LoginPage = () => {
  return (
    <Container {...containerAnimation}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
