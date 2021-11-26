import React, { useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import axios from 'axios'

const AuthPage = () => {

    const [ hasAccount, setHasAccount ] = useState(false)

    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
          window.location.replace('http://localhost:3000/profile');
        } else {
          setLoading(false);
        }
      }, []);


    // const loginAPI = async () =>{
    //     const resp = await fetch('http://localhost:8000/api/rest-auth/login/');
    //     const data = ( resp )=>{
    //         resp.json()
    //     }
    // }

    const username = useRef(null)
    const email = useRef(null)
    const password1 = useRef(null)
    const password2 = useRef(null)

   

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    const register = async ()=>{

        const user =  {
            username : username?.current.value , email : email?.current.value, password1: password1?.current.value, password2: password2?.current.value, 
        }

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/rest-auth/registration/',
            data: JSON.stringify(user),
            headers: {
                "X-CSRFToken": csrftoken,
                    "Content-Type": "application/json"
                }
            }).then(data=>{console.log(data.data.key);
                localStorage.clear();
                localStorage.setItem('token', data.data.key);
                window.location.replace('http://localhost:3000/profile');
            }).catch(err=>{ setErrors('An Error Occured!')})
    }


   
    const login = async ()=>{
 
        const loginData = {
            username : username.current.value , email : email.current.value, password: password1.current.value,
        }

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/rest-auth/login/',
            data: JSON.stringify(loginData),
            headers: {
                "X-CSRFToken": csrftoken,
                    "Content-Type": "application/json"
                }
            }).then(data=>{console.log(data.data.key);
                localStorage.clear();
                localStorage.setItem('token', data.data.key);
                window.location.replace('http://localhost:3000/profile');
            }).catch(err=>{ setErrors('An Error Occured!')})
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

                <Form onSubmit={()=>login()}>
                <input type="text" placeholder='username' ref={username}/>
                    <input type="email" placeholder='Email' ref={email}/>
                    <input type="password" placeholder='Password' ref={password1}/>
                    <Button onClick={()=>login()}> Sign In</Button>
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

                <form onSubmit={()=>register()}>
                    <input type="text" placeholder='username' ref={username}/>
                    <input type="email" placeholder='Email' ref={email}/>
                    <input type="password" placeholder='Password' ref={password1}/>
                    <input type="password" placeholder='Confirm Password' ref={password2}/>
                    <Button onClick={()=>register()}> Sign Up</Button>
                </form>
                <HasAccount>
                    I have an account, <SignInOption onClick={()=>setHasAccount(true)}>Sign In</SignInOption> 
                </HasAccount>
            </div>
        )
    }

    return (
     <div>
         { !loading  &&
          hasAccount ? <SignIn /> : <SignUp/> 
        }
     </div>   
    )
}

export default AuthPage
