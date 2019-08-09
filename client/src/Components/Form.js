import React from 'react';
import axios from 'axios';
import {Form, Field, withFormik, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';


function UserForm(props){
    
    return (
        <div>
            <h1>Form Section</h1>
           
            <form>
            <input
            type="text"
            name="username"
            onChange={``}
            placeholder="username"
          />
          <input
            type="text"
            name="password"
            onChange={``}
            placeholder="password"
          />
            </form>
            <button>Login</button>
            
            </div>
    );
};

export default UserForm;