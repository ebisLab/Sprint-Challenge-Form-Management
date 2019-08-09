import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik, setNestedObjectValues} from 'formik';
import * as Yup from 'yup';
import '../index.css';


function UserForm({ errors, touched, values, status, name }){
    const[users, setUsers] = useState([]);
    // const[dataInfo, setDataInfo] = useState([]);

    useEffect(() => {
   if(status){
       setUsers([...users, status]);
   }
   
    }, [status])
// console.log(errors, 'errors')
console.log('users', users)

    return (
        <div>
            <h1>Form Section</h1>
            <div className="forminput">
            <Form>
            {touched.username && errors.username && <span className="error">{errors.username}</span>}
            <Field className="user-input"
            type="text"
            name="username"
            placeholder="username"
          />
            {touched.password && errors.password && <span className="error">{errors.password}</span>}

          <Field
            type="text"
            name="password"
            placeholder="password"
          />
          <button type="submit">Login</button>
            </Form>
            <section>
            {users.map(user => (
        <div key={user.token}>
            <h2>Welcome {values.username}!</h2>
            <p>{name}</p>
            
            {/* {this.state.isLoggedIn
    ? this.state.data.map(object => (
      <Show name={object.name}/>
    )): null} */}


            </div>
        ))}
        <p></p>
            </section>
            </div>
            </div>
    );
};


const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || '', 
            password: password || ''
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
    console.log(values.username)

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