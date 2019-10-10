import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle }  from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    };

    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({ email:'', password:'' });
    };

    handelChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handelSubmit}>

                  <FormInput
                    name="email" 
                    type="email" 
                    label="email"
                    value={this.state.email}
                    handelChange={this.handelChange} 
                    required 
                    />

                   <FormInput
                    name="password" 
                    type="password" 
                    label="password"
                    value={this.state.password}
                    handelChange={this.handelChange} 
                    required 
                    />
                  
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }

}

export default SignIn;