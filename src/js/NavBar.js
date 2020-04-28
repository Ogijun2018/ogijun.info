import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HamburgerSpin } from 'react-animated-burgers';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

export const NavigationContainer = styled.div
`
    width: 100%;
    height: 7%;
    position: fixed;
    // background-color: #262626;
    z-index: 9999;
`

export const NewItem = styled(Link)
`   
    margin-right: 50px;
    font-size: 0.6em;
    cursor: pointer;
    color: #262626;
    text-decoration: none;
    float: right;

    &:hover {
        transition: 0.3s;
        text-decoration: none;
        color: gray;
    }
`

export const ContactButton = styled.div
`
    margin-right: 50px;
    font-size: 0.6em;
    cursor: pointer;
    color: #262626;
    text-decoration: none;
    float: right;

    &:hover {
        transition: 0.3s;
        text-decoration: none;
        color: gray;
    }
`

export const StyledFaTwitter = styled(FaTwitter)
`
    margin-top: -35px;
    margin-right: 50px;
    color: #262626;
    width: 30;
    &:hover {
        transition: 0.3s;
        text-decoration: none;
        color: gray;
    }
`

export const StyledFaInstagram = styled(FaInstagram)
`
    margin-top: -35px;
    margin-right: 50px;
    color: #262626;
    width: 30;
    &:hover {
        transition: 0.3s;
        text-decoration: none;
        color: gray;
    }
`

export const PStyledFaTwitter = styled(FaTwitter)
`
    color: white;
    width: 30;
`

export const PStyledFaInstagram = styled(FaInstagram)
`
    color: white;
    width: 30;
`

export const PNewItem = styled(Link)
`   
    font-size: 1.5em;
    cursor: pointer;
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: none;
        color: gray;
    }
`

export const PContactButton = styled.div
`
    font-size: 1.5em;
    cursor: pointer;
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: none;
        color: gray;
    }
`

export const ListContainer = styled.ul
`   
    padding-top: 15px;
    list-style: none;
    float: right;
`

export const PListContainer = styled.ul
`  
    z-index: 10;
    position: fixed;
    left: -30px; /*謎*/
    list-style: none;
    width: 100%;
    height: 100vh;
    margin-top: -40px;
    padding-top: 100px;
    text-align: center;
    background-color: rgba(0,0,0,0.8);
`

export const ListItem = styled.li
`   
    align-items: center;
    float: left;
    font-size: 40px;
`

export const PListItem = styled.li
`
    margin-top: 30px;
`

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hamburgerPress: false,
        }
        this.onHamburgerButtonPress = this.onHamburgerButtonPress.bind(this);
    }

    onHamburgerButtonPress(){
        this.setState({
            hamburgerPress: !this.state.hamburgerPress,
        });
        //背景のスクロール許可・禁止
        if(!this.state.hamburgerPress){
            document.body.setAttribute('style', 'overflow: hidden;');
        }else{
            document.body.removeAttribute('style', 'overflow: hidden;');
        }
    }

    scrollToTop(Interface){
        if(Interface === "phone"){
            this.onHamburgerButtonPress();
        }
        animateScroll.scrollToTop({duration: 2000, smooth: "easeInOutQuint"});
    }

    scrollToBottom(Interface){
        if(Interface === "phone"){
            this.onHamburgerButtonPress();    
        }
        animateScroll.scrollToBottom({duration: 2000, smooth: "easeInOutQuint"});
    }

    render() {
        return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
            {this.props.responsive === "phone" &&
                <div>
                    <PNewItem onClick={() => {this.scrollToTop()}} to={"/"} style={{color: "gray", position: "fixed", fontSize: 20, left: "0.8rem", top: "0.8rem", zIndex: 9999}}>Jun Ogino</PNewItem>
                    <HamburgerSpin buttonHeight={20} buttonWidth={20} buttonStyle={{position: 'fixed', right: '0.8rem', top: '0.15rem', zIndex: 9999}} isActive={this.state.hamburgerPress} toggleButton={this.onHamburgerButtonPress} barColor="gray" />
                        <PListContainer className="animated fadeIn" style={{display: this.state.hamburgerPress ? "block" : "none"}}>
                            <PListItem>
                                <PNewItem onClick={() => {this.scrollToTop("phone")}} to={"/"}>Home</PNewItem>
                            </PListItem>
                            <PListItem>
                                <PNewItem onClick={this.onHamburgerButtonPress} to={"/About"}>About</PNewItem>
                            </PListItem>
                            <PListItem>
                                <PNewItem onClick={this.onHamburgerButtonPress} to={"/Works"}>Works</PNewItem>
                            </PListItem>
                            <PListItem>
                                <PContactButton onClick={() => {this.scrollToBottom("phone")}}>
                                    Contact
                                </PContactButton>
                            </PListItem>
                            <PListItem>
                                <div>
                                <a href="https://www.instagram.com/jun_0gin0/" style={{marginRight: 30}}>
                                    <PStyledFaInstagram></PStyledFaInstagram>
                                </a>
                                <a href="https://twitter.com/juginon" style={{marginLeft: 30}}>
                                    <PStyledFaTwitter></PStyledFaTwitter>
                                </a>
                                </div>
                            </PListItem>
                        </PListContainer>
                </div>
            }
            {this.props.responsive === "desktop" &&
                <NavigationContainer>
                    <ListContainer>
                        <ListItem style={{position: "absolute", left: 40}}>
                            <NewItem to={"/"}>Jun Ogino</NewItem>
                        </ListItem>
                        <ListItem>
                            <NewItem to={"/About"}>About</NewItem>
                        </ListItem>
                        <ListItem>
                            <NewItem to={"/Works"}>Works</NewItem>
                        </ListItem>
                        <ListItem >
                            <ContactButton onClick={() => {this.scrollToBottom("desktop")}}>
                                Contact
                            </ContactButton>
                        </ListItem>
                        <ListItem>
                            <a href="https://www.instagram.com/jun_0gin0/">
                                <StyledFaInstagram></StyledFaInstagram>
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://twitter.com/juginon">
                                <StyledFaTwitter></StyledFaTwitter>
                            </a>
                        </ListItem>
                    </ListContainer>                 
                </NavigationContainer>
            }
        </div>
      );
  }
}

export default NavigationBar;