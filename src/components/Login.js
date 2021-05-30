import React from 'react';
import styled from 'styled-components';
import loginbackground from './images/login-background.jpg';
import Cta1 from './images/cta-logo-one.svg';
import cta2 from './images/cta-logo-two.png';

function Login() {
    return (
        <Container>
            <CTA>
                <CtaLogoOne src = {Cta1}/>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                This is  the Description, This is  the DescriptionThis is  the DescriptionThis is  the DescriptionThis is  the Description
                This is  the DescriptionThis is  the DescriptionThis is  the DescriptionThis is  the DescriptionThis is  the DescriptionThis is  the Descriptio
                This is  the Description
                </Description>
                <CtaLogoTwo src={cta2}/>
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position :relative;
    height : calc(100vh - 70px);
    display:flex;
    align-items:center;
    justify-content:center;

    &:before{
        background-image:url(${loginbackground}) ;
        background-position : top;
        background-size:cover;
        background-repeat:no-repeat;
        content:"";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
        opcaity:0.7;
    }
`

const CTA = styled.div`
    max-width:650px;
    padding :80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
`

const CtaLogoOne = styled.img`

`
const CtaLogoTwo = styled.img`

`

const SignUp = styled.a`
     width:100%;
     background-color:#0063e5;
     font-weight :bold;
     padding:17px 0;
     color:#f9f9f9;
     border-radius:4px;
     text-align:center;
     font-size:18px;
     cursor:pointer;
     transition : all 250ms;
     letter-spacing :1.5;
     margin-top:8px;
     margin-bottom:12px;

     &:hover{
         background:#0483ee;
     }

`

const Description = styled.p`
    line-height :1.5;
    letter-spacing:1.4;
    font-size:11px;
    text-align:center;

`