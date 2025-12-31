import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Checkbox, Card, Typography, Space, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  
  // React Hook Form 설정
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      username: '',
      password: '',
      remember: true,
    }
  });

  // 로그인 제출 함수
  const onSubmit = async (data: any) => {
    try {
      console.log('로그인 데이터:', data);
      // 여기에 axios 또는 react-query를 이용한 로그인 API 호출 로직 추가
      message.success('로그인에 성공했습니다!');
      navigate('/dashboard'); 
    } catch (error) {
      message.error('로그인 정보가 올바르지 않습니다.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg border-none">
        <div className="text-center mb-8">
          <Title level={2} className="mb-2">로그인</Title>
          <Text type="secondary">서비스 이용을 위해 계정 정보를 입력하세요.</Text>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* 아이디 필드 */}
          <div>
            <Controller
              name="username"
              control={control}
              rules={{ required: '아이디를 입력해주세요.' }}
              render={({ field }) => (
                <Input 
                  {...field}
                  size="large" 
                  placeholder="아이디" 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  status={errors.username ? 'error' : ''}
                />
              )}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          {/* 비밀번호 필드 */}
          <div>
            <Controller
              name="password"
              control={control}
              rules={{ required: '비밀번호를 입력해주세요.' }}
              render={({ field }) => (
                <Input.Password 
                  {...field}
                  size="large" 
                  placeholder="비밀번호" 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  status={errors.password ? 'error' : ''}
                />
              )}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <Controller
              name="remember"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox checked={value} onChange={onChange}>로그인 유지</Checkbox>
              )}
            />
            <Button type="link" size="small" className="p-0">비밀번호 찾기</Button>
          </div>

          <Button 
            type="primary" 
            htmlType="submit" 
            size="large" 
            block 
            loading={isSubmitting}
            className="bg-blue-600 mt-4"
          >
            로그인하기
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Text className="text-gray-500">계정이 없으신가요?</Text>
          <Button type="link">회원가입</Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;