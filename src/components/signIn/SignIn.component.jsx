import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import signInWithGoogle  from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ email:'', password:'' });
    };

    onChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.onSubmit}>

                  <FormInput
                    name="email" 
                    type="email" 
                    label="email"
                    value={this.state.email}
                    handelChange={this.onChange} 
                    required 
                    />

                   <FormInput
                    name="password" 
                    type="password" 
                    label="password"
                    value={this.state.password}
                    handelChange={this.onChange} 
                    required 
                    />
                  
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>

                </form>

            </div>
        )
    }

}

export default SignIn;