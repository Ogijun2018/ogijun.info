import React from "react";
import DesktopPage from "./js/components/DesktopPage";
import PhonePage from "./js/components/PhonePage";
import styles from "./styles/styles.module.css";
import MediaQuery from "react-responsive";
import { FiChevronDown } from 'react-icons/fi';
import mylogo from './js/components/images/mylogo.png';
import dekitaMock from './js/components/images/dekita_mock.png';
import contactPic from './js/components/images/contact_pic.jpg';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundChange: false,
    };
  }

  render() {
    return (
      <React.Fragment>
      <link rel="stylesheet" href="https://use.typekit.net/urt8xoe.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <MediaQuery query="(max-width:767px)">
        <div className={styles.Page}>
          <div className={styles.pMyName}>
            <div>
              <div className="animated fadeIn">
                <p className={styles.pJun}><span className={styles.J}>J</span>UN</p>
              </div>
              <div className="animated fadeIn delay-1s">
                <p className={styles.pOgino}>OGINO</p>
              </div>
            </div>
            <div className={styles.pPosition}>
              <div className="animated fadeIn delay-2s slower">
                <p><span className={styles.F}>F</span>ront-end Developer</p>
              </div>
            </div>
          </div>
        </div>
        <PhonePage pageName={"About"} imgName={mylogo} showMoreBtn={true} text={
          <div>
            <p>Welcome to my portfolio!</p>
            <p>I'm always looking to create good design, good products.</p>
            <p>I still have a lot to learn, but I'm working hard every day.</p>
          </div>
        }></PhonePage>
        <PhonePage pageName={"Works"} imgName={dekitaMock} showMoreBtn={true} text={
          <div>
            <p>Apps, design, research, and more...</p>
          </div>
        }></PhonePage>
        <PhonePage pageName={"Contact"} imgName={contactPic} showMoreBtn={false} text={
          <div>
            <div>
              <a href="mailto:ogijun.mk@hotmail.co.jp" className={styles.link}>ogijun.mk@hotmail.co.jp</a>
            </div>
            <div style={{marginTop: 20}}>
              <a href="https://www.wantedly.com/users/87254893" className={styles.link}>Wantedly</a>
              <a href="https://twitter.com/juginon">
                  <FaTwitter style={{fontSize:20, marginLeft: 20}} className={styles.link}></FaTwitter>
              </a>
              <a href="https://www.instagram.com/jun_0gin0/">
                  <FaInstagram style={{fontSize:20, marginLeft:20}} className={styles.link}></FaInstagram>
              </a>
            </div>
          </div>
        }></PhonePage>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px">
        <div className={styles.Page}>
          <div className={styles.MyName}>
            <div>
              <div className="animated fadeIn">
                <p className={styles.Jun}><span className={styles.J}>J</span>UN</p>
              </div>
              <div className="animated fadeIn delay-1s">
                <p className={styles.Ogino}>OGINO</p>
              </div>
            </div>
            <div className={styles.Position}>
              <div className="animated fadeIn delay-2s slower">
                <p><span className={styles.F}>F</span>ront-end Developer</p>
              </div>
            </div>
          </div>
          <div className={styles.ScrollDown}><FiChevronDown/>scroll down</div>
        </div>
        <DesktopPage layout={"left"} pageName={"About"} imgName={mylogo} showMoreBtn={true} text={
          <div>
            <p>Welcome to my portfolio!</p>
            <p>I'm always looking to create good design, good products.</p>
            <p>I still have a lot to learn, but I'm working hard every day.</p>
          </div>
          }></DesktopPage>
        <DesktopPage layout={"right"} pageName={"Works"} imgName={dekitaMock} showMoreBtn={true} text={
          <div>
            <p>Apps, design, research, and more...</p>
          </div>
        }></DesktopPage>
        <DesktopPage layout={"left"} pageName={"Contact"} imgName={contactPic} showMoreBtn={false} text={
          <div>
            <div>
              <a href="mailto:ogijun.mk@hotmail.co.jp" className={styles.link}>ogijun.mk@hotmail.co.jp</a>
            </div>
            <div style={{marginTop: 30}}>
              <a href="https://www.wantedly.com/users/87254893" className={styles.link}>Wantedly</a>
            </div>
            <div style={{marginTop: 20}}>
              <a href="https://twitter.com/juginon">
                  <FaTwitter style={{fontSize:40}} className={styles.link}></FaTwitter>
              </a>
              <a href="https://www.instagram.com/jun_0gin0/">
                  <FaInstagram style={{fontSize:40, marginLeft:30}} className={styles.link}></FaInstagram>
              </a>
            </div>
          </div>
        }></DesktopPage>
      </MediaQuery>
      </React.Fragment>
    );
  }
}