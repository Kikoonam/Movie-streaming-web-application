import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img scr="/images/home-icon.svg"></img>
                    <span>HOME</span>
                </a>

                <a>
                    <img scr="/images/search-icon.svg"></img>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"></img>
                    <span>WATCHLIST</span>
                </a>

                <a>
                    <img src="/images/original-icon.svg"></img>
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="/images/movie-icon.svg"></img>
                    <span>MOVIES</span>
                </a>
                
                <a>
                    <img src="/images/series-icon.svg"></img>
                    <span>SERISES</span>
                </a>
                

            

            </NavMenu>
            <UserImg src="https://wimg.ruan8.com/uploadimg/image/20190131/20190131130305_65861.jpg"/>

           
        </Nav>
    )
}

export default Header

const Nav = styled.nav`

height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x: hidden;
`

const Logo = styled.img`
width:80px;
`

const NavMenu = styled.div`
flex:1;
display:flex;
margin-left:20px;
align-items:center;
a{
    display: flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;

    img{
        height:20px;
        }

    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
         
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transition:all 250ms cubic-beizer(0.25,0.46,0.45,0.94) 0s;
            transform-origin: left center;
            transform:scaleX(0);

               }
        }
      
    &:hover{
          span: after{
              transform:scaleX(1);
              opacity:1;
                       }
            } 
    
 }
`
const UserImg = styled.img`
width : 48px;
height: 48px;
border-radius:50%;
cursor:pointer;
`
