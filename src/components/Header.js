import React ,{useEffect} from 'react';
import styled from 'styled-components';
import logo from './images/logo.svg';
import {auth , provider} from '../firebase';
import homeIcon from './images/home-icon.svg';
import searchIcon from './images/search-icon.svg';
import watchlistIcon from './images/watchlist-icon.svg';
import originalIcon from './images/original-icon.svg';
import movieIcon from './images/movie-icon.svg';
import seriesIcon from './images/series-icon.svg';
import out from './images/out.png';
import {selectUserName , selectUserPhoto,setUserLogin,setSignOut} from '../features/user/userSlice';
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';


export default function Header() {

    useEffect (()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({

                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))

                history.push("/");
            }
        })
    })

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
                let user = result.user;
                dispatch(setUserLogin(
                    {
                        name:user.displayName,
                        email:user.email,
                        photo:user.photoURL
                    }
                ))

                history.push("/");
            }
        )
    }

    const signOut = () =>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            history.push("/login");
        })
    }
    
    return (
        <Nav>
            <Logo  src={logo}/>
                { (!userName) ?

                    <LoginContainer>
                        <LoginButton onClick = {signIn}>
                            Login
                        </LoginButton>
                    </LoginContainer>
                    

                    :
                    <>
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
                <UserImg src={userPhoto} onClick={signOut}/>
                

               
                </>

                }
                
            

        </Nav>
    )
}
    

const Nav = styled.nav`
    height: 70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;

    @media (max-width: 680px){
        height: 55px;
       
        padding:0 28px;
    }

    @media (max-width: 500px){
        height: 40px;
       
        padding:0 20px;
    }

`

 const Logo = styled.img`
    width:80px;

    @media (max-width: 680px){
        width:60px;

    }

    @media (max-width: 500px){
        width:48px;

    }

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

    @media (max-width: 880px){
        a{
            display:flex;
            align-items:center;
            padding: 0 10px;
            cursor:pointer;
        
        
            img{
                height:2.5vw;
            }
    
            span{
                font-size:.8vw;
                letter-spacing:1.2px;
                position :relative;
    
                &:after{
                    content:"";
                    height:1.5px;
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
    
            
        }    
    }

    @media (max-width: 520px){
        a{
            
            padding: 0 6px;
           
            
    
            
        }    

    }
 `
const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    background-color:white;
    cursor:pointer;
    margin-right:10px;

    @media (max-width: 880px){
        width:32px;
        height:32px;

    }

    @media (max-width: px)520{
        width:28px;
        height:28px;

    }
    
    
    
`

const LoginButton = styled.div`
    border:1px solid #f9f9f9;
    padding :8px 16px;
    border-radius:4px;
    letter-spacing:1.5;
    text-transform:uppercase;
    background-color : rgba(0,0,0,0.6);
    transition:all 0.2s ease 0s;
    cursor:pointer;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }

    @media (max-width: 680px){
        padding :6px 12px;
        border-radius:3px;
        letter-spacing:1.2;
        height:35px;
    }

    @media (max-width: 500px){
        padding :4px 8px;
        border-radius:3px;
        letter-spacing:.5px;
        height:28px;
        font-size:12px;
    }

`
 
const LoginContainer = styled.div`
    display:flex;
    flex:1;
    justify-content:flex-end;
`

const Signout = styled.img`
    width:48px;
    height:48px;
    margin-left:10px;
    background-color:white;
    
`