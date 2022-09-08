import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useLoginMutation } from 'redux/auth/authApi';
import { Spinner } from 'components/Spinner';
import * as C from 'components/SignUpForm/SignUpForm.styled.js';
import * as message from 'features/notify/notify';

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
    <div>
      <h2>Let's sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <div>
          <input
            type={shown ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          <span onClick={handleClickShow}>
            {shown ? <C.ShownIco /> : <C.HideIco />}
          </span>
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner size={15} /> : 'Login'}
        </button>
      </form>
    </div>
  );
};
