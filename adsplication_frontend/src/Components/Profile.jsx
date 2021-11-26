import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components";
import axios from 'axios'

const Profile = () => {


    const [user, setUser] = useState([])

    
   
  useEffect(() => {
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

    console.log(localStorage.getItem('token'))
    const csrftoken = getCookie('csrftoken');
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/');
    } else {
      axios('http://127.0.0.1:8000/api/rest-auth/user/', {
        method: 'GET',
        headers: {
            "X-CSRFToken": csrftoken,
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      })
        .then(data => {
            setUser(data.data)
            console.log(data.data)
        }).catch(err=>console.log(err));
    }
  }, []);

  const phone = useRef(null)
  const acn = useRef(null)
  const bankName = useRef(null)
  const accountName = useRef(null)

  const saveProfile = ()=>{
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

      const details = {
          id : 3,
          full_name : user.username,
          email : user.email,
          phone_number: phone.current.value,
          account_number: acn.current.value,
          bank_name: bankName.current.value,
          account_name: accountName.current.value,

      }
    axios('http://127.0.0.1:8000/api/saveProfile', {
        method: 'POST',
        data : JSON.stringify(details),
        headers: {
            "X-CSRFToken": csrftoken,
          'Content-Type': 'application/json',
        }
      })
        .then(data => {
            setUser(data.data)
            console.log(data.data)
        }).catch(err=>console.log(err));
  }

    const GreetUser = styled.p`
        text-decoration: underline;
        font-weight: 300;
        color: #6e67ff;
    `;

    const HeadTitle = styled.div`
    font-size: 30px;
    color : rgb(60,60,60);
    padding: 10px;
`;

    const Button = styled.div`
        background: #6e67ff;
        color: white;
        padding: 14px 0;
        width: 100%;
        border-radius : 10px;
        margin-top : 10px;
        text-align : center;
    `;

    const Form = styled.form`
    width: 100%;
    height: auto;
    `;
    return (
        <div>
             <GreetUser>
                 Hi, User!
             </GreetUser>

                <HeadTitle>
                    Profile
                </HeadTitle>

             <Form onSubmit={()=>saveProfile()}>
                    <input type="text" placeholder='Full Name' defaultValue={user.username}/>
                    <input type="email" placeholder='Email' defaultValue={user.email}/>
                    <input type="tel" placeholder='Phone Number' ref={phone} />
                    <h3> Add Bank Details : </h3>
                    <input type="text" placeholder="Bank Account Number" ref={acn}/>
                    <input type="text" placeholder='Account Name' ref={accountName}/>
                    <input type="text" placeholder='Bank Name e.g First Bank' ref={bankName}/>

                    <Button onClick={()=>saveProfile()}> Save </Button>
            </Form>
        </div>
    )
}

export default Profile
