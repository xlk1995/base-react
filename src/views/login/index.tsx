import { Button, Form, FormProps, Input, App } from 'antd'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Login as LoginType } from '@/types/api'

import { apiLogin } from '@/api/user'

import storage from '@/utils/storage'

import $styles from './index.module.scss'

const Login = () => {
  const { message } = App.useApp()
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
  const onFinish: FormProps<LoginType.Params>['onFinish'] =
    async values => {
      try {
        setLoading(true)
        const data = await apiLogin(values)
        setLoading(false)
        storage.set('token', data.token)
        message.success('登录成功')
        nav('/welcome')
      } catch (error) {
        setLoading(false)
      }
    }
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
          <Form.Item<LoginType.Params>
            name='credential'
            rules={[
              {
                required: true,
                message: '请输入用户名'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<LoginType.Params>
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
            <Button
              type='primary'
              htmlType='submit'
              block
              loading={loading}
            >
              login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
