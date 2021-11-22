import React from 'react'
import styled from "styled-components";

const Profile = () => {

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

             <Form action="">
                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email' />
                    <h3> Add Bank Details : </h3>
                    <input type="text" placeholder="Bank Account Number" />
                    <input type="text" placeholder='Account Name' />
                    <input type="text" placeholder='Bank Name e.g First Bank'/>

                    <Button> Save </Button>
            </Form>
        </div>
    )
}

export default Profile
