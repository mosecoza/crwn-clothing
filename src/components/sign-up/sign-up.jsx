import React, {useState, useEffect} from 'react';
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../firebase/utils';
import './sign-up.scss';


const SignUp =() => {
   let [state, setState] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',

   })

   let onSubmit = async (event ) => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = state
      
      if (password !== confirmPassword) {
         alert('passwords do not match');
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password);
         createUserProfileDocument(user, {displayName})
       } catch (error) {
         console.error(error.message);
      }
   }

   let handleChange = (event) => {
      
      event.preventDefault();
      const { name, value } = event.currentTarget
      setState({
         ...state,
         [name]: value
      }, console.log('change setstate: ', state))
   }


   return (<div className='sign-up'>
    
      <h2 >I do not have an account</h2>
      <span>Sign up with your email</span>
      <form className='sign-up-form' onSubmit={onSubmit}>
         <FormInput
            type='text'
            name='displayName'
            value={state.displayName}
            onChange={handleChange}
            label='Display Name'
            required
         />
         <FormInput
            type='text'
            name='email'
            value={state.email}
            onChange={handleChange}
            label='Email'
            required
         />
         <FormInput
            type='password'
            name='password'
            value={state.password}
            onChange={handleChange}
            label='password'
            required
         />
         <FormInput
            type='password'
            name='confirmPassword'
            value={state.confirmPassword}
            onChange={handleChange}
            label='confirm Password'
            required
         />
         <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
         </div>
      </form>
   </div>)
}

export default SignUp;