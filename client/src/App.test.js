import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserForm from './Components/Form'
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; 


describe('<App>', () => {
  it('renders without crashing', () => {
      render (<App />);
  });
  it('renders login button', () => {
    const userform = render (<UserForm />);

    userform.getByText(/login/i)
});
})
