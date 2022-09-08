import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSignupUserMutation } from 'redux/auth/authApi';
import { Spinner } from 'components/Spinner';
import * as S from './SignUpForm.styled';
import * as message from 'features/notify/notify';

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
    <div>
      <h2>Let's register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register('name')} />
        <p>{errors.name?.message}</p>
        <input placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>
        <input
          type={shown ? 'text' : 'password'}
          placeholder="Password"
          {...register('password')}
        />
        <span onClick={handleClickShow}>
          {shown ? <S.ShownIco /> : <S.HideIco />}
        </span>
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword')}
        />
        <p>{errors.confirmPassword?.message}</p>
        <button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner size={15} /> : 'Sign up'}
        </button>
      </form>
    </div>
  );
};
