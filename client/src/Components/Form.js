import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';


function UserForm(){


    return (
        <div>
            <h1>Form Section</h1>
           
            <Form>
            <Field className="user-input"
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
            
            {/* <Field>Hello</Field> */}
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

export default FormikLoginForm;