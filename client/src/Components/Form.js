import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';


function UserForm({ errors, touched, values, status }){
    const[users, setUsers] = useState([]);
    // const[dataInfo, setDataInfo] = useState([]);

    useEffect(() => {
   if(status){
       setUsers([...users, status]);
   }
   
    }, [status])
// console.log(errors, 'errors')


    return (
        <div>
            <h1>Form Section</h1>
           
            <Form>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field className="user-input"
            type="text"
            name="username"
            placeholder="username"
          />
            {touched.password && errors.password && <p>{errors.password}</p>}

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
    handleSubmit(values, {setStatus}){
    console.log(values)

    //form submission HTTP request
    axios
        .post(`http://localhost:5000/api/register`, values)
        .then(res=> {
            // console.log('Set Status Area')
            console.log('res', res.data)
            // resetForm();
            setStatus(res.data)
        })
        
        .catch(err => console.log(err) )
    }

})(UserForm)

export default FormikLoginForm;