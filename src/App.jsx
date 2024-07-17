import { useFormik } from 'formik';
import React from 'react'
/*
1.create a form with three fields: name, email, password
2.use formik to handled the form state
3.when the form is submitted, log the form values to the console.
*/
const validate = values =>{
    const errors={};
    if(!values.name){
        errors.name = 'name required'
    }
    if(!values.email){
        errors.email = 'email required'
    }
    if(!values.password){
        errors.password = 'password required'
    }
    return errors;
}
    
const App = () => {
    const formik = useFormik({
      initialValues:{
        name:'',
        email:'',
        password:''
      },
      validate,
      onSubmit: values=>{
        console.log(values)
      }  
    })
    const style={
        color: 'red',
        fontWeight:'italic'
    }
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
        <input
        type="text"
        placeholder='Name...'
        name='name'
        id='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        />
        </div>
        <div style={style}>{formik.errors.name}</div>
        <div>
        <input
        type="email"
        placeholder='Email...'
        name='email'
        id='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        />
        </div>
        <div style={style}>{formik.errors.email}</div>
        <div>
        <input
        type="password"
        placeholder='Password...'
        name='password'
        id='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        />
        </div>
        <div style={style}>{formik.errors.password}</div>
        <button type='submit'>Sign Up</button>
    </form>
  )
}

export default App;