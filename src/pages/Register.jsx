import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
    ),
    url('https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260') center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Link1 = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: black;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='Name'/>
                    <Input placeholder='Last Name'/>
                    <Input placeholder='Username'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Password'/>
                    <Input placeholder='Confirm Password'/>
                    <Agreement>
                        By creating this account, I consent to the processing of
                        my personal data in accordance to the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                    <Link to='/' style={{marginRight: '400px', marginTop: '10px'}}>
                        <Link1>GO BACK TO HOME</Link1>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register