import { Button, Form, FormProps, Input } from 'antd'

import $styles from './index.module.scss'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}
const onFinish: FormProps<FieldType>['onFinish'] =
  values => {
    console.log('Success:', values)
  }

const Login = () => {
  return (
    <div className={$styles.login}>
      <div className={$styles['login-wrapper']}>
        <div className={$styles['login-title']}>登录</div>
        <Form
          name='basic'
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            name='username'
            rules={[
              {
                required: true,
                message: '请输入用户名'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name='password'
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
