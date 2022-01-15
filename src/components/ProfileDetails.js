import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectAllSerie, setMovies } from '../features/movie/movieSlice';
import {
    selectUserEmail,
    selectUserName,
    selectUserPhoto,
} from '../features/user/userSlice';
import db from '../firebase';
import Series from './Series';

const ProfileDetails = () => {
    const [open, setOpen] = useState(false);
    const userPhoto = useSelector(selectUserPhoto);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const movies = useSelector(selectAllSerie);

    let allSeries = [];
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('hello');
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().movie) {
                    case 'false':
                        allSeries = [
                            ...allSeries,
                            { id: doc.id, ...doc.data() },
                        ];
                        break;
                }
            });

            dispatch(
                setMovies({
                    allSerie: allSeries,
                })
            );
        });
    }, [userName]);
    return (
        <>
            <div
                style={{
                    height: '10vh',
                    width: '60%',
                    margin: '10rem auto 10rem auto',
                    color: 'white',
                    display: 'grid',
                    gridTemplateColumns: ' 73% 27%',

                    borderRadius: '10px',
                    // boxShadow: '1px 2px 4px 8px rgb(243, 174, 174)',
                }}
            >
                <div>
                    <div
                        style={{
                            margin: '3rem 0 2rem 1.5rem',
                            display: 'grid',
                            gridTemplateColumns: '20% 80%',
                            textAlign: 'left',
                        }}
                    >
                        <span
                            style={{
                                color: 'white',
                                fontSize: '27px',
                                fontWeight: 'bold',
                                borderRight: '1px solid black',
                                marginRight: '1rem',
                            }}
                        >
                            Name
                        </span>

                        <span
                            style={{
                                color: 'white',
                                fontSize: '27px',
                                fontWeight: 'bold',
                            }}
                        >
                            {' '}
                            {userName}
                        </span>
                    </div>
                    <div
                        style={{
                            margin: '3rem 0 2rem 1.5rem',
                            display: 'grid',
                            gridTemplateColumns: '20% 80%',
                            paddingBottom: '2rem',
                        }}
                    >
                        <span
                            style={{
                                color: 'white',
                                fontSize: '27px',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                borderRight: '1px solid black',
                                marginRight: '1rem',
                            }}
                        >
                            Email
                        </span>
                        <span
                            style={{
                                color: 'white',
                                fontSize: '27px',
                                fontWeight: 'bold',
                            }}
                        >
                            {' '}
                            {userEmail}
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        textAlign: 'center',
                        paddingTop: '2.5rem',

                        paddingBottom: '2rem',
                    }}
                >
                    <img
                        src={userPhoto}
                        alt='scasvjhvjh'
                        style={{
                            color: 'white',
                            height: '8rem',
                            width: '8rem',
                            borderRadius: '5rem',
                        }}
                    />
                </div>

                {/* <Content>
                <Wrap>
                    csafdvgbfkjewbfkewbgjewbgkwkjgbfekrbgvkuebglqeasdvqeu
                </Wrap>
            </Content> */}
            </div>
            <div
                style={{
                    width: '55%',
                    margin: 'auto',
                }}
            >
                <button
                    style={{
                        cursor: 'pointer',
                        borderRadius: '6px',
                        background: '#0f2027' /* fallback for old browsers */,
                        background:
                            '-webkit-linear-gradient(to right, #0f2027, #203a43)' /* Chrome 10-25, Safari 5.1-6 */,
                        background:
                            'linear-gradient(to right, #0f2027, #203a43, #2c5364)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

                        fontSize: '20px',
                        border: '1px solid black',
                        boxShadow: '-moz-initial',
                        color: 'white',

                        width: '25%',
                        padding: '1rem 1rem',
                    }}
                    onClick={() => setOpen(true)}
                >
                    watch history
                </button>
            </div>

            {open === true ? (
                <Container1>
                    <Series />
                </Container1>
            ) : null}
        </>
    );
};

const Container = styled.div`
    padding: 0 0 26px;
`;

const Container1 = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url('/images/home-background.png') center center / cover
            no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default ProfileDetails;
