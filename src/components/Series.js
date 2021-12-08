import React from "react";
import styled from "styled-components";

function Series() {
  return (
    <Container>
      <h2>SERIES</h2>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>

        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Series;

const Container = styled.div`min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x:hidden;
background: url("/images/home-background.png") center center / cover 
no-repeat fixed;
&:before {
content: "";
postition: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0px 8px 14px;
  color: #000000;
  -webkit-transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  transition: transform 0.4s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: 0px 8px 14px;
    -webkit-transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transition: transform 0.4s;
  }
`


