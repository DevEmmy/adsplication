import React, { useState } from 'react'
import styled from "styled-components";

const AuthPage = () => {

    const [ hasAccount, setHasAccount ] = useState(false)


    const loginAPI = async () =>{
        const resp = await fetch('http://localhost:8000/api/rest-auth/login/');
        const data = ( resp )=>{
            resp.json()
        }
    }

    const HeadTitle = styled.h3`
        font-size: 30px;
        color : rgb(60,60,60);
    `;

    const HasAccount = styled.p`
        font-weight : light;
    `;

    const SignInOption = styled.p`
        text-decoration : underline;
        display : inline;
        color: #6e67ff;
    `;

    const Form = styled.form`
        width: 100%;
        height: auto;
    `;

    const Button = styled.div`
    border: none;
    background : #6e67ff;
    color : white;
    border-radius : 10px;
    width: 100%;
    text-align: center;
    padding:14px 0;
    margin-top : 10px
`;


    const SignIn = () =>{
        return(
            <div>
                <HeadTitle>
                    Sign In
                </HeadTitle>

                <Form action="">
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />
                    <Button> Sign In</Button>
                </Form >
                <HasAccount>
                    I don't have an account Yet, <SignInOption onClick={()=>setHasAccount(false)}>Sign Up</SignInOption> 
                </HasAccount>
            </div>
        )
    }

    const SignUp = ()=>{
        return (
            <div>
                <HeadTitle>
                    Sign Up
                </HeadTitle>

                <form action="">
                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password'/>
                    <Button> Sign Up</Button>
                </form>
                <HasAccount>
                    I have an account, <SignInOption onClick={()=>setHasAccount(true)}>Sign In</SignInOption> 
                </HasAccount>
            </div>
        )
    }

    return (
     <div>
         { hasAccount ? <SignIn /> : <SignUp/> }
     </div>   
    )
}

export default AuthPage
