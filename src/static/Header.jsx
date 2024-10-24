import { MdArrowDropDown } from "react-icons/md" 
import styled from "styled-components"
import { IoReorderTwoSharp } from "react-icons/io5";
import kudi from '../assets/kuda.png'
import myR from '../assets/nigeria.png'
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src={kudi} alt="" />
                </Logo>
                <Navigation>
                    <Link to="/">
                    <nav>
                        <span>Personal</span>
                        <MdArrowDropDown size= {20}/>
                    </nav>
                    </Link>
                    <Link to="/business">
                    <nav>
                        <span>Business</span>
                        <MdArrowDropDown size= {20}/>
                    </nav>
                    </Link>
                    <Link to="/companies">
                    <nav>
                        <span>Company</span>
                        <MdArrowDropDown size= {20}/>
                    </nav>
                    </Link>
                    <nav>
                        <span>Help</span>
                        <MdArrowDropDown size= {20}/>
                    </nav>
                </Navigation>
            </LogoNav>
            <ButtonNav>
                <SignIn> Sign In</SignIn>
                <JoinBtn>Join Kuda</JoinBtn>
                <ConBtn>
                <img src={myR} alt="" />

                </ConBtn>
                <SideNav><IoReorderTwoSharp/></SideNav>
            </ButtonNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const LogoNav = styled.div`
display: flex;
/* justify-content: space-between; */
align-items: center;
/* gap: 50px; */
`
const Logo = styled.div`
margin: 0px 80px 0px 80px;
img{
    width: 50px;
}
`
const Navigation = styled.div`
display: flex;
/* gap: 30px; */

nav{
    display: flex;
    color: #080108;
    span{
        margin-right: 3px;
        font-size: 13px;
        font-weight: 600;
    }
}
@media (max-width: 800px) {
    display: none;

}
`

const ButtonNav = styled.button`
display: flex;
align-items: center;
border: none;
gap:30;
margin-right: 20px;
@media (max-width: 800px) {
    margin-right: 30px;
}
`
const SignIn = styled.button`
background-color: transparent;
border: none;
outline: none;
font-weight: 600;
color: #40196d;

@media (max-width: 800px) {
    display: none;
}
`

const JoinBtn = styled.button`
    background-color: purple;
    color: white;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin: 0px 25px;
    @media (max-width: 800px) {
    display: none;
}
`

const ConBtn =styled.button`
    background-color: lightgreen;
    outline: none;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    margin-right: 50px;
    align-items: center;
    img{
        width: 25px;
        /* padding: 7px 0px; */
    }
    
`
const SideNav = styled.div`
    font-size: 30x;
    display: none;
    cursor: pointer;
    margin-left: 30px;

    @media (max-width: 800px) {
    display: flex;
    align-items: center;
    cursor: pointer;
}
`


