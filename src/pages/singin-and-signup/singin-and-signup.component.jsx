import React from 'react';
import './singin-and-signup.component';

import SignIn from '../../components/signIn/SignIn.component';
import SignUp from '../../components/signUp/signUp.component';

const SingInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SingInAndSignUp;