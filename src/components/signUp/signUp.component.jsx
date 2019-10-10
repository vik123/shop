import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './signUp.style.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async  e  => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('Password and confirm password doesnt match.');
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );

            await createUserProfileDocument(user, displayName);
            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }

        }catch(error){
            console.log(error);
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }



    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    />
                    <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        );
    }

}


export default SignUp;