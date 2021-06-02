import React ,{useEffect,useState} from 'react';
import styled from 'styled-components';
import play from './images/play-icon-black.png' ;
import trailer from './images/play-icon-white.png' ;
import group from './images/group-icon.png' ;
import {useParams} from 'react-router-dom';
import db from '../firebase';
import { setMovies } from '../features/movies/movieSlice';



function Detail() {

    const [movie,setMovie] = useState('');
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());
            }
            else{

            }
        })
        
    }, [])
    
    return (
        <Container>
           {
               movie && (
                   <>
                        <Background>
                            <img src={movie.backgroundImg}/>
                        </Background>
                        <ImageTitle>
                            <img src={movie.titleImg} />
                        </ImageTitle>
                        <Controls>
                            <PlayButton>
                                    <img src={play}/>
                                    <span>PLAY</span>
                            </PlayButton>
                            <TrailerButton>
                                    <img src={trailer}/>
                                    <span>TRAILER</span>
                            </TrailerButton>
                            <AddButton>
                                    <span>+</span>
                            </AddButton>
                            <GroupWatchButton>
                                    <img src={group}/>
                            </GroupWatchButton>
                        </Controls>
                            
                        <Subtitle>
                            {movie.subTitle}
                        </Subtitle>
                        <Description>
                            {movie.description}
                        </Description>
                   </>
               )
           }
        </Container>
    )
}

export default Detail


const Container = styled.div `
    min-height : calc(100vh - 70px);
    padding: 0 calc( 3.5vw  +  5px);
    position:relative;
    

`
const Background = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;    
    z-index:-1;
    opacity:0.8;

    img{
        width:100vw;
        height:100vh;
        object-fit:cover;
    }
`

const ImageTitle = styled.div`
    height :30vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    margin-top:60px;

    @media (max-width: 680px){
    height :25vh;
    width:30vw;
    min-height:120px;
    min-width:170px;
    margin-top:40px;
    }
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }

   
`

const Controls = styled.div`
    margin-top:20px;
    display:flex;
    align-items:center;

    @media (max-width: 680px){
        margin-top:15px;
    }

`

const PlayButton = styled.button `

    border-radius:4px;
    font-size:15px;
    display:flex;
    padding:0px 24px;
    margin-right:22px;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198,198,198);
    }

    @media (max-width: 680px){
        border-radius:4px;
        font-size:12px;
        display:flex;
        padding:0px 18px;
        margin-right:18px;
        align-items:center;
        height:40px;
        background:rgb(249,249,249);
        border:none;
        letter-spacing:1.8px;
        cursor:pointer;

    }

    @media (max-width: 500px){
        border-radius:3px;
        font-size:10px;
        display:flex;
        padding:0px 14px;
        margin-right:14px;
        align-items:center;
        height:32px;
        background:rgb(249,249,249);
        border:none;
        letter-spacing:1.2px;
        cursor:pointer;
    }
`

const TrailerButton = styled(PlayButton) `
    background:rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`

const AddButton = styled.button `
    width:44px;
    margin-right:16px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border: 2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
        font-size:30px;
        color:white;
    }

    @media (max-width: 680px){
        width:36px;
        margin-right:12px;
        height:36px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        border: 2px solid white;
        background-color:rgba(0,0,0,0.6);
        cursor:pointer;
        span{
            font-size:20px;
            color:white;
        }
    }

    @media (max-width: 500px){
        width:28px;
        margin-right:10px;
        height:28px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        border: 2px solid white;
        background-color:rgba(0,0,0,0.6);
        cursor:pointer;
        span{
            font-size:16px;
            color:white;
        }
    }

`
const GroupWatchButton = styled(AddButton)`
        background:rgb(0,0,0);
`
const Subtitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height :20px;
    margin-top :26px;

    @media (max-width: 680px){
        font-size:11px;
        min-height :15px;
        margin-top :20px;

    }

    @media (max-width: 500px){
        font-size:11px;
        min-height :12px;
        margin-top :16px;
    }
`
const Description = styled.div`
    line-height :1.4;
    font-size:20px;
    margin-top:16px;
    max-width:650px;
    color:rgb(249,249,249);
    @media (max-width: 680px){
        font-size:15px;
        min-height :15px;
        margin-top :20px;
        line-height :1.2;
        max-width:60vw;
    }

    @media (max-width: 500px){
        font-size:12px;
        min-height :11px;
        margin-top :16px;
        line-height :1;
        max-width:75vw;
    }

`