import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { HamburgerSpin } from 'react-animated-burgers';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io'; 
import { animateScroll } from 'react-scroll';

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
                    <Link className={styles.pMyNameButton} to={"/"}>Jun Ogino</Link>
                    <HamburgerSpin buttonHeight={20} buttonWidth={20} buttonStyle={{position: 'fixed', right: '0.8rem', top: '0.15rem', zIndex: 20}} isActive={this.state.hamburgerPress} toggleButton={this.onHamburgerButtonPress} barColor="gray" />
                    {/* modal */}
                    <div className={styles.pModalOutSide} style={{transition: "opacity 0.6s ease 0s", visibility: this.state.hamburgerPress ? "visible" : "hidden", opacity: this.state.hamburgerPress ? 1 : 0}}>
                        <ul className={styles.pListContainer} style={{transition: "opacity 0.6s ease 0s", visibility: this.state.hamburgerPress ? "visible" : "hidden", opacity: this.state.hamburgerPress ? 1 : 0}}>
                            <li className={styles.pListItem}>
                                <Link className={styles.pNewItem} onClick={this.onHamburgerButtonPress} to={"/"}>Home</Link>
                            </li>
                            <li className={styles.pListItem}>
                                <Link className={styles.pNewItem} onClick={this.onHamburgerButtonPress} to={"/About"} >About</Link>
                            </li>
                            <li className={styles.pListItem}>
                                <Link className={styles.pNewItem} onClick={this.onHamburgerButtonPress} to={"/Works"}>Works</Link>
                            </li>
                            <li className={styles.pListItemMini}>
                                <a className={styles.pNewItemMini} style={{fontSize: "20px", color: "#EFEFEF"}} href="mailto:ogijun.mk@hotmail.co.jp">ogijun.mk@hotmail.co.jp</a>
                            </li>
                            <li className={styles.pListItemMini}>
                                <a className={styles.pNewItemMini} style={{fontSize: "20px", color: "#EFEFEF"}} href="https://www.wantedly.com/users/87254893" >Wantedly</a>
                            </li>
                            <li className={styles.pListItemMini}>
                                <div>
                                <a href="https://www.instagram.com/jun_0gin0/" style={{marginRight: 30}}>
                                    <FaInstagram className={styles.pSNSButton}></FaInstagram>
                                </a>
                                <a href="https://twitter.com/juginon" style={{marginLeft: 30}}>
                                    <FaTwitter className={styles.pSNSButton}></FaTwitter>
                                </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            }
            {this.props.responsive === "desktop" &&
                <div className={styles.navigationContainer}>
                    <Link className={styles.myNameButton} to={"/"}>Jun Ogino</Link>
                    <ul className={styles.listContainer}>
                        {/* 右に寄せるためのfloat */}
                        <div style={{float: "right"}}>
                            <li className={styles.listItem}>
                                <Link className={styles.newItem} to={"/About"}>About</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.newItem} to={"/Works"}>Works</Link>
                            </li>
                            <li className={styles.listItem}>
                                <a className={styles.newItem} href="https://www.wantedly.com/users/87254893">
                                    Wantedly
                                </a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="mailto:ogijun.mk@hotmail.co.jp">
                                    <IoIosMail className={styles.SNSButton}></IoIosMail>
                                </a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="https://www.instagram.com/jun_0gin0/">
                                    <FaInstagram className={styles.SNSButton}></FaInstagram>
                                </a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="https://twitter.com/juginon">
                                    <FaTwitter className={styles.SNSButton}></FaTwitter>
                                </a>
                            </li>
                        </div>
                    </ul>                 
                </div>
            }
        </div>
      );
  }
}

export default NavigationBar;