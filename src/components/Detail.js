import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import db from "../firebase";

const Detail = (props) => {
    const { id } = useParams();
    const [ detailData, setDetailData ] = useState({});

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
                <Player>
                     <img class="base64-image" 
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbeq9RgAAACV0Uk5TAFhqMqr/+o0f8eh6DdVnwlSvQpwv94oc5HcJ0knbQN8MTu9gcy+KIuoAAAB/SURBVHic7dO5EoJAFETRQbkuqKCyKS4g8P/fCJRVJlK8DogsOz7BTE+Pc/984i2WpvFhtd4YaEufYLefRLxzCAUE0VFAcDoLCOJEQKRZbiO4XAsbwe0uIB5fpY0gngIqK+FMrzlup/QkNC68nbCC6T3VA7GWKW3cNa39W34yHdTNCNmD8G7+AAAAAElFTkSuQmCC"
                     alt=""
                     />
                     <span>Play</span>
                </Player>
                <Trailer>
                     <img class="base64-image" 
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////53h4sAAAABh0Uk5TAHB/IKD/nxDv31+/QK+PMPDA4FCAkLBgyXZ3BwAAAH1JREFUeJztk0cOgDAQA2mG0CG0//8UEIi+eM+IOY8i20kc52fD9XzqBADCiEiYMd67hoU4UUhAmikkIBcb4EghRDtJUwOFJDS4SlODUiHB3JI9SLiN8eBUipNqnsk2tF3V8p06vnjP767mr8AOsrJKQt6N4CXvztDy3/JJRk2aBxl9uYRmAAAAAElFTkSuQmCC"
                     alt=""
                     />
                     <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span />
                    <span />
                </AddList>
            </Controls>
            <Description>
                {detailData.description }
            </Description>
     </ContentMeta>
    </Container>
    );
};

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

const Trailer = styled(Player)`
background: rgb(0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;

const AddList = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content; center;
align-items: center;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;

&:hover {
    background: rgb(198, 198, 198);
}

span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(pdeg);
        width: 16px;
        margin-left: 13px;
    }

    &:nth-child(2) {
        height: 16px;
        transform: translateX(-8.5px) rotate(0deg);
        width: 2px;
    }
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
