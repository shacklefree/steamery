import React from "react"
import { Icon, Button, Input, Form, Divider, Card } from "antd"
import styled from "styled-components"

import { FormComponentProps } from "antd/lib/form/Form"
import { connect } from "react-redux"

import { loginWithProvider } from "../../../redux/actions/auth"

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`

interface OwnProps {
  onClose: Function
}

interface DispatchProps {
  loginWithProvider: (provider: "google" | "github") => void
}

type Props = OwnProps & DispatchProps & FormComponentProps

const AntLogin = ({ form, onClose, loginWithProvider }: Props) => {
  const { getFieldDecorator } = form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log("handle form login")
  }

  const handleGoogleLogin = () => {
    console.log("google login")
    // console.log(loginWithProvider)
    loginWithProvider("google")
    onClose()
  }

  return (
    <Card style={{ width: 300 }}>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item style={{ marginBottom: 8 }}>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item style={{ marginBottom: 8 }}>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <FlexRow>
            <a className="login-form-forgot" href="#">
              Forgot password?
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </FlexRow>
        </Form.Item>
      </Form>
      <Divider />
      <Buttons>
        <Button icon="github" size="large" shape="round" disabled />
        <Button
          icon="google"
          size="large"
          shape="round"
          onClick={handleGoogleLogin}
        />
        <Button icon="facebook" size="large" shape="round" disabled />
        <Button icon="apple" size="large" shape="round" disabled />
      </Buttons>
    </Card>
  )
}

const WrappedAntLogin = Form.create<Props>({ name: "login_form" })(AntLogin)

export default connect(null, { loginWithProvider })(WrappedAntLogin)
