import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';


function UserForm(){


    return (
        <div>
            <h1>Form Section</h1>
           
            <Form>
            <Field
            type="text"
            name="username"
            placeholder="username"
          />
          <Field
            type="text"
            name="password"
            placeholder="password"
          />
          <button>Login</button>
            </Form>
            
            
            </div>
    );
};


const FormikLoginForm = withFormik({
    mapPropsToValues({name, password}){
        return{
            name: name || '', 
            password: password || '',
        }
    }
})(UserForm)

export default UserForm;