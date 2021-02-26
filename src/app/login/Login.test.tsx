import { exception } from 'console';
import React from 'react';

import { render } from 'tests';

import { Login } from './Login';
import { LoginForm } from './login-form/LoginForm';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByText, getByLabelText } = render(<LoginForm />);
    expect(getByText('Log In')).toBeInTheDocument();
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });
});

describe('LoginForm', () => {
  test('Password reminder', async () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText('Forgot password?')).toBeInTheDocument();
  });
});
