import { Container } from 'components/GlobalStyles';
import { NotFound } from 'components/NotFound';
import { containerAnimation } from 'features/framer/containerAnimation';

const NotFoundPage = () => {
  return (
    <Container {...containerAnimation}>
      <NotFound />
    </Container>
  );
};

export default NotFoundPage;
