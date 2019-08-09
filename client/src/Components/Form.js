import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';


function UserForm({values,status}){


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
    mapPropsToValues({username, password}){
        return{
            username: username || '', 
            password: password || '',
        }
    },

    //Yup validation
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Hold on hommie!'),
        password: Yup.string().required('Hold on hommie!'),
        
    }),

    //get setStatus
    handleSubmit(values){
    console.log(values)
    }

})(UserForm)

export default FormikLoginForm;