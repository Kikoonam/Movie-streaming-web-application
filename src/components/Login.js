import styled from "styled-components";
import Header from "./Header";

function Login(){
    return (
        <Container>
            
        <Content>
           
            <CTA>
                <img src="/images/cta-logo-one.svg" alt="" />
                <SignUp>GET ALL THERE</SignUp>
            </CTA>
            <BgImage/>
        </Content>
    </Container>
    );
}


const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
display:flex;
box-sizing: border-box;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height:100%;
`;

const BgImage = styled.div`
height: 100%;
background-position : top ;
background-size : cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top:0;
right: 0;
left:0;
z-index : -1;
`;

const CTA = styled.div`
margin-bottom:2vw;
max-width:650px;
width:100%;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content: center;
margin-top:;
aligin-items: center;
text-align:center;
margin-right: auto;
margin-left: auto;
transition-timing-function:ease-out;
transition: opacity 0.2s;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
margin-top:20px;
width:100%;
letter-spacing: 1.5px;
font-size: 18px;
padding:16.5px 0;
border: 1px solid transparent;
border-radius:4px;
 &:hover{
     background-color:#0453ee;
     
 }
`;




export default Login;