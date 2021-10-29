import React from 'react'
import { Container, Form, Button, Input } from 'semantic-ui-react'

const Login = () => {
  return (
    <Container>
        <Form data-cy="sign-in-form" >
        <Form.Field
          name="email"
          data-cy="email-input"
          control={Input}
          label="Email"
          placeholder="example@email.com"
        />
        <Form.Field
          name="password"
          data-cy="password-input"
          control={Input}
          label="Password"
          type="password"
        />
        <Form.Field
          data-cy="btn-sign-in"
          control={Button}
          content="Submit"
        />
      </Form>
    </Container>
  )
}

export default Login
