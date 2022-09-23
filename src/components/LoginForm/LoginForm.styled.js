import styled from 'styled-components';
import { Button, Input } from 'components/GlobalStyles';

export const FormWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 4px;

  @media (min-width: 475px) and (max-width: 767px) {
    max-width: 65vw;
  }

  @media screen and (min-width: 768px) {
    max-width: 45vw;
  }

  @media screen and (min-width: 1024px) {
    max-width: 30vw;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  font-size: 2rem;
  color: #2da8d8ff;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PasswordInput = styled(Input)`
  position: relative;
  padding-left: 10px;
  width: 100%;
`;

export const LoginInput = styled(Input)`
  padding-left: 10px;
`;

export const RevealerWrapper = styled.span`
  position: absolute;
  right: 17%;
  padding-top: 7px;
  padding-right: 5px;
  cursor: pointer;

  @media (min-width: 475px) and (max-width: 767px) {
    right: 23%;
  }

  @media screen and (min-width: 768px) {
    right: 30%;
  }

  @media screen and (min-width: 1024px) {
    right: 37%;
  }
`;

export const SignFormBtn = styled(Button)`
  padding: 12px;
`;

export const ErrorText = styled.p`
  color: tomato;
`;
