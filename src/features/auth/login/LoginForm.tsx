import { useForm } from 'react-hook-form';
import { login } from '../../../features/auth/api';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      await login(data.username, data.password);
         navigate("/dashboard/overview/summary"); 
    } catch {
      alert('로그인 실패');
    }
        navigate("/dashboard/overview/summary"); 
  };

  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <input
          {...register('username')}
          placeholder="아이디"
          className="login-input"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="비밀번호"
          className="login-input"
        />
        <button type="submit" className="login-button">
          로그인
        </button>
      </form>
    </div>
  );
}