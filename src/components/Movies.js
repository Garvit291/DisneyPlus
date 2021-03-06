import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {selectMovies} from '../features/movies/movieSlice';
import {useSelector} from 'react-redux';

function Movies() {
    const movies = useSelector(selectMovies);
    

    return (
        <Container>
            <h4>
                Recommended for you
            </h4>
            <Content>
                { movies && 
                 movies.map((movie)=>(
                    <Wrap key ={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt = {"movieCard"} />
                        </Link>
                    </Wrap>
                 ))
                }
                </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
margin-bottom:20px;

`
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
    margin-bottom:20px;

    @media (max-width: 680px){
        grid-gap:20px;
        grid-template-columns: repeat(2,minmax(0,1fr));
        margin-bottom:18px;
    }

    @media (max-width: 420px){
        grid-gap:15px;
        grid-template-columns: repeat(1,minmax(0,1fr));
        margin-bottom:12px;
    }
`
const Wrap = styled.div`
    
    border-radius:10px;
    overflow:hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    cursor:ponter;

    img{
        
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

`