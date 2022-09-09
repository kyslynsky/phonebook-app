import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSignupUserMutation } from 'redux/auth/authApi';
import { Spinner } from 'components/Spinner';
import * as message from 'features/notify/notify';
import { ShownIco, HideIco } from 'components/GlobalStyles';
import * as C from 'components/LoginForm/LoginForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
});

export const SignUpForm = () => {
  const [signUp, { isLoading }] = useSignupUserMutation();
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

  const onSubmit = data => {
    const { name, email, password } = data;

    signUp({ name, email, password })
      .unwrap()
      .then(payload => {
        message.successNotice(`${payload.user.name} successfully registered`);
        navigate('/phonebook');
      })
      .catch(() => message.failureNotice('User already exist'));
  };

  return (
    <C.FormWrapper>
      <C.FormTitle>Let's register</C.FormTitle>
      <C.SignForm onSubmit={handleSubmit(onSubmit)}>
        <C.LoginInput type="text" placeholder="Name" {...register('name')} />
        <C.ErrorText>{errors.name?.message}</C.ErrorText>
        <C.LoginInput placeholder="Email" {...register('email')} />
        <C.ErrorText>{errors.email?.message}</C.ErrorText>
        <C.InputWrapper>
          <C.PasswordInput
            type={shown ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          <C.RevealerWrapper onClick={handleClickShow}>
            {shown ? <HideIco /> : <ShownIco />}
          </C.RevealerWrapper>
        </C.InputWrapper>
        <C.ErrorText>{errors.password?.message}</C.ErrorText>
        <C.LoginInput
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword')}
        />
        <C.ErrorText>{errors.confirmPassword?.message}</C.ErrorText>
        <C.SignFormBtn type="submit" disabled={isLoading}>
          {isLoading ? <Spinner size={15} /> : 'Sign up'}
        </C.SignFormBtn>
      </C.SignForm>
    </C.FormWrapper>
  );
};
