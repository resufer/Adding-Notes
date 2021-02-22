import React from 'react';
import { Input, Form, Button, Checkbox } from 'antd';
import style from './signIn.module.css';
import dataProcessing from '../../dataProcessing/dataProcessing';

let SignIn = ({ up, callbackSetIsAuth }) => {
  let [errorCondition, setErrorCondition] = React.useState(false);
  let [errorMessage, setErrorMessage] = React.useState('');

  const success = async (values) => {
    let response = await dataProcessing({ sign: 'signIn', ...values });
    if (response.success) {
      callbackSetIsAuth(true, values.login);
    } else {
      setErrorCondition(true);
      setErrorMessage(response.errorMessage)
    }
  };

  return (
    <div className={up ? style.hidden : undefined}>
      <div className={style.signIn}>
        <Form onFinish={success}>
          <Form.Item label="Login:" name="login" rules={[{ required: true, message: 'Please input your login!' }]}>
            <div><Input placeholder='login' /></div>
          </Form.Item>
          <Form.Item label="Password:" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <div><Input.Password placeholder='password' /></div>
          </Form.Item>
          <Form.Item name='remember' valuePropName="checked">
            <Checkbox> Remember Me </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit" className={style.submit}>Sign In</Button>
          </Form.Item>
        </Form>
      </div>

      {errorCondition && <div className={style.message}>{errorMessage}</div>}
    </div>
  )
};

export default SignIn;