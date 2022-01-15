//header of the website !!dont change anything!
// All the css is imported from the file "header.moudle.css" dont change anything!
// writen by Hongduzi Saiershanbayi
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { auth, provider } from '../../firebase';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from '../../features/user/userSlice';
import { useEffect } from 'react';
// import auth and provider from the file "firebase.js"
const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/Home', { replace: true });
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    navigate('/', { replace: true });
                })
                .catch((err) => alert(err.message));
        }
    };
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <header className={classes.header}>
            <img
                className={classes.logo}
                src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'
            />

            {!userName ? (
                <a className={classes.login} onClick={handleAuth}>
                    Login{' '}
                </a>
            ) : (
                <>
                    {' '}
                    <nav className={classes.nav}>
                        <a>
                            <Link to='/Home'>
                                <img src='/images/home-icon.svg'></img>
                                <span> HOME </span>
                            </Link>
                        </a>
                        <a>
                            <Link to='/Movie'>
                                <img src='/images/movie-icon.svg'></img>
                                <span>MOVIES</span>
                            </Link>
                        </a>
                        <a>
                            <Link to='/Series'>
                                <img src='/images/series-icon.svg'></img>
                                <span>SERIES</span>
                            </Link>
                        </a>

                        <a>
                            <Link to='/Profile'>
                                <img
                                    style={{
                                        borderRadius: '10px',
                                        marginRight: '2px',
                                    }}
                                    src='/images/profile-icon.png'
                                ></img>
                                <span>PROFILE</span>
                            </Link>
                        </a>
                    </nav>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )}
        </header>
    );
};
const UserImg = styled.img`
    height: 100%;
`;
const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;
