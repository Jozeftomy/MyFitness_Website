import styled from 'styled-components';
import AuthImage from '../../utils/Images/AuthImage.jpg';  
import LogoImage from '../../utils/Images/LogoImage.png';      
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { useState } from 'react';
const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  @media(max-width: 700px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  @media(max-width: 700px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
position: absolute;
width: 70px;
top: 40px;
left: 60px;
z-index:10;`;

const Image = styled.img`
position: relative;
height:100vh;
width:100%;`;

const Text = styled.div`
font-size: 16px;
text-align: center;
color: ${({theme})=> theme.text_secondary};
margin-top: 16px;
@media(max-width: 700px) {
    font-size: 14px;
  }

`;
const TextButton = styled.span`
color: ${({theme})=> theme.primary};
cursor: pointer;
transition: all 0.3ease;
font-weight: 600;
`;  



const Authentication = () => {
    const [login, setLogin] = useState(false);

    return (
        <div>
            <Container>
                <Left>
                    <Logo src={LogoImage} />
                    <Image src={AuthImage} />
                </Left>
                <Right>
                    {!login ? (
                        <>
                            <SignIn/>
                            <Text>
                                Don't have an account? 
                                <TextButton onClick={()=>setLogin(true)}>SignUp</TextButton>
                            </Text>
                        </>
                    ) : (
                        <>
                            <SignUp/>
                            <Text>
                                Already have an account? 
                                <TextButton onClick={()=>setLogin(false)}>SignIn</TextButton>
                            </Text>
                        </>
                    )}
                </Right>
            </Container>
        </div>
    );
};

export default Authentication;
