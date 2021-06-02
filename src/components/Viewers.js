import React from 'react'
import styled from 'styled-components';
import v1 from './images/viewers-disney.png';
import v2 from './images/viewers-pixar.png';
import v3 from './images/viewers-marvel.png';
import v4 from './images/viewers-starwars.png';
import v5 from './images/viewers-national.png';


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={v1} alt = {"viewerlogo"}/>
            </Wrap>
            <Wrap>
                <img src={v2} alt = {"viewerlogo"} />
            </Wrap>
            <Wrap>
                <img src={v3} alt = {"viewerlogo"}/>
            </Wrap>
            <Wrap>
                <img src={v4} alt = {"viewerlogo"}/>
            </Wrap>
            <Wrap className="spec">
                <img src={v5} alt = {"viewerlogo"}/>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns:repeat(5,minmax(0,1fr));
    grid-gap:25px;
    padding:30px 0 26px;

    @media (max-width: 680px){
        margin-top:15px;
        padding:15px 0 20px;
        grid-template-columns:repeat(2,minmax(0,1fr));
        grid-gap:20px;

        
    }

    @media (max-width: 500px){
        margin-top:15px;
        padding:10px 0 15px;
        grid-gap:12px;
        
    }
    
`

const Wrap = styled.div`

    cursor:pointer
    border-radius:3px;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width:100%;
        hieght:100%;
        object-fit:cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }

    @media (max-width: 680px){
        border-radius:2px;
    border:2px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 20px 26px -7px, rgb(0 0 0 / 73%) 0px 12px 8px -8px;
    }
`