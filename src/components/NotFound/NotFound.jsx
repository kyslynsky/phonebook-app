import * as S from './NotFound.styled';
import { motion } from 'framer-motion';

export const NotFound = () => {
  return (
    <S.Wrapper>
      404
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        Page Not Found
      </motion.div>
    </S.Wrapper>
  );
};
