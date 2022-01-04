import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import db from "../firebase";
import ReactPlayer from 'react-player';


const Detail = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    const { id } = useParams();
    const [ detailData, setDetailData ] = useState({});

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) => {
            if(doc.exists){
                setDetailData(doc.data());
                console.log('Found a movie successlly');
            }
            else{
                console.log('no such document in firebase');
            }
         }).catch((error) => {
             console.log("Error getting document:", error);
         });
    }, [id]);

    return (
    <Container>
        <Background>
            <img
            alt = { detailData.title }
            src = { detailData.backgroundImg }
            />
        </Background>

        <ImageTitle>
             <img
            alt = { detailData.title }
            src = { detailData.titleImg }
            />
        </ImageTitle>

        <ContentMeta>
            <Controls>
                <Player onClick={toggle}>
                {isOpened && (
                    <Video>
                        <ReactPlayer url={detailData.trailer} playing={true} width='100%' height='100%'/>
                    </Video>
                )}
                     <img class="base64-image" 
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbeq9RgAAACV0Uk5TAFhqMqr/+o0f8eh6DdVnwlSvQpwv94oc5HcJ0knbQN8MTu9gcy+KIuoAAAB/SURBVHic7dO5EoJAFETRQbkuqKCyKS4g8P/fCJRVJlK8DogsOz7BTE+Pc/984i2WpvFhtd4YaEufYLefRLxzCAUE0VFAcDoLCOJEQKRZbiO4XAsbwe0uIB5fpY0gngIqK+FMrzlup/QkNC68nbCC6T3VA7GWKW3cNa39W34yHdTNCNmD8G7+AAAAAElFTkSuQmCC"
                     alt=""
                     />
                     <span>Play</span>
                </Player>
              </Controls>
            <Subtitle>
                { detailData.subTitle }             
            </Subtitle>
            <Description>
                {detailData.description }
            </Description>
     </ContentMeta>
    </Container>
    );
};

const Video = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    padding-left:100px;
    width: 100%;
    height: 100%;
    z-index: 10;
`;

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vm + 5px);
`;

const Background = styled.div`
left: 0px;
opacity: 0.8;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;

img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
        width: initial;
    }
}
`;

const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 20px auto;
height: 30vw;
min-height: 250px;
padding-left:25px;
padding-bottom: 25px;
width: 100%;

img{
    max-width: 600px;
    min-width: 200px;
    width: 35vm;
}
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 20px 20px;
min-height: 56px;
`;

const Player = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius: 4px;
align-items: center;
cursor: pointer;
display: flex;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249, 249, 249);
border: none;
color: rgb(0, 0, 0);

img {
    width: 32px;
}

&:hover {
    background: rgb(198, 198, 198);
}

@media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
        width: 25px;
    }
}
`;


const Subtitle = styled.div`
line-height: 1.4;
font-size: 20px;
pading: 16px 0px;
color: rgb(249, 249, 249);

border-radius: 5px;
margin: 20px;

@media (max-width: 600px) {
    font-size: 14px
}
`;

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
pading: 16px 0px;
color: rgb(249, 249, 249);

border-radius: 5px;
margin: 20px;

@media (max-width: 600px) {
    font-size: 14px
}
`;

export default Detail;
