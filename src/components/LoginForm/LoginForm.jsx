import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useLoginMutation } from 'redux/auth/authApi';
import { Spinner } from 'components/Spinner';
import * as message from 'features/notify/notify';
import { ShownIco, HideIco } from 'components/GlobalStyles';
import * as S from './LoginForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

export const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [shown, setShown] = useState(false);

  const handleClickShow = () => {
    setShown(!shown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    await login(data)
      .unwrap()
      .then(payload => {
        message.successNotice(`Nice to see you ${payload.user.name}`);
        navigate('/phonebook');
      })
      .catch(() => message.failureNotice('Check credentials'));
  };

  return (
    <S.FormWrapper>
      <S.FormTitle>Let's sign in</S.FormTitle>
      <S.SignForm onSubmit={handleSubmit(onSubmit)}>
        <S.LoginInput placeholder="Email" {...register('email')} />
        <S.ErrorText>{errors.email?.message}</S.ErrorText>
        <S.InputWrapper>
          <S.PasswordInput
            type={shown ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          <S.RevealerWrapper onClick={handleClickShow}>
            {shown ? <HideIco /> : <ShownIco />}
          </S.RevealerWrapper>
        </S.InputWrapper>
        <S.ErrorText>{errors.password?.message}</S.ErrorText>

        <S.SignFormBtn type="submit" disabled={isLoading}>
          {isLoading ? <Spinner size={15} /> : 'Login'}
        </S.SignFormBtn>
      </S.SignForm>
    </S.FormWrapper>
  );
};
