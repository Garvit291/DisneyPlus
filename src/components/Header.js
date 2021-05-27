import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import homeIcon from '../images/home-icon.svg';
import searchIcon from '../images/search-icon.svg';
import watchlistIcon from '../images/watchlist-icon.svg';
import originalIcon from '../images/original-icon.svg';
import movieIcon from '../images/movie-icon.svg';
import seriesIcon from '../images/series-icon.svg';

export default function Header() {
    return (
        <Nav>
            <Logo  src={logo}/>
                <NavMenu>
                    <a>
                        <img src={homeIcon}/>
                        <span>HOME</span>  
                    </a>
                    <a>
                        <img src={searchIcon}/>
                        <span>SEARCH</span>  
                    </a>
                    <a>
                        <img src={watchlistIcon}/>
                        <span>WATCHLIST</span>  
                    </a>
                    <a>
                        <img src={originalIcon}/>
                        <span>ORIGINAL</span>  
                    </a>
                    <a>
                        <img src={movieIcon}/>
                        <span>MOVIE</span>  
                    </a>
                    <a>
                        <img src={seriesIcon}/>
                        <span>SERIES</span>  
                    </a>
                    
                </NavMenu>
                <UserImg src=""/>
            

        </Nav>
    )
}
    

const Nav = styled.nav`
    height: 70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;

`

 const Logo = styled.img`
    width:80px;

 `
 const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;

    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
    
    
        img{
            height:20px;
        }

        span{
            font-size:13px;
            letter-spacing:1.42px;
            position :relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                // top:0;
                left:0;
                right:0;
                bottom:-6px;
                opactity:0;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
                transform:scaleX(0);

            }
        }

        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }    
 `
const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    background-color:white;
    cursor:pointer;
`