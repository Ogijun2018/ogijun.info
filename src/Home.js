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
import anime from 'animejs';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundChange: false,
    };
  }

  componentDidMount = () => {
    let tl1 = anime.timeline({
      targets: '.cls-1',
      delay: function(el, i) { return i * 200 },
      duration: 2000,
      easing: 'easeInOutQuint',
      direction: 'alternate',
      loop: true,
    });

    tl1.add({
      strokeDashoffset: [anime.setDashoffset, 0]
    })
    .add({
          delay: 0,
          fill: "#FFAB00"
    });

    let tl2 = anime.timeline({
      targets: '.cls-2',
      delay: function(el, i) { return i * 200 },
      duration: 2000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });

    tl2.add({
      strokeDashoffset: [anime.setDashoffset, 0]
    })
    .add({
          delay: 0,
          fill: "#0336FF"
    });

    let tl3 = anime.timeline({
      targets: '.cls-3',
      delay: function(el, i) { return i * 200 },
      duration: 2000,
      easing: 'easeInOutCubic',
      direction: 'alternate',
      loop: true,
    });

    tl3.add({
      strokeDashoffset: [anime.setDashoffset, 0]
    })
    .add({
          delay: 0,
          fill: "#FF0266"
    });
  }

  render() {
    let tl = anime.timeline({
      duration: 1500,
      easing: "easeOutExpo",
    });

    return (
      <React.Fragment>
      <link rel="stylesheet" href="https://use.typekit.net/urt8xoe.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <MediaQuery query="(max-width:767px)">
        <div className={styles.Page}>
          <div className={styles.pMyName}>
            <div>
              <div>
                <p className={styles.pJun}><span className={styles.J}>J</span>UN</p>
              </div>
              <div>
                <p className={styles.pOgino}>OGINO</p>
              </div>
            </div>
            <div className={styles.pPosition}>
              <div>
                <p><span className={styles.F}>F</span>ront-end Developer</p>
              </div>
            </div>
          </div>
          <div style={{position: "absolute", top: "15%" ,left: "15%", width:"70%"}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2644 690.5" style={{fill: 'none', stroke: '#FFAB00', strokeWidth: 5}}>
                <defs>
                </defs>
                <g>
                <circle class="cls-1" cx="209" cy="70" r="70"/>
                <path class="cls-1" d="M279.62,190.76l-2.92,331C272,449.71,211.78,392.5,138.5,392.5c-.89,0-1.77,0-2.66,0l1.78-201.77Z"/>
                <path class="cls-1" d="M276.7,521.81q.3,4.56.3,9.19c0,76.37-62.13,138.5-138.5,138.5S0,607.37,0,531c0-75.48,60.69-137,135.84-138.47.89,0,1.77,0,2.66,0C211.78,392.5,272,449.71,276.7,521.81Z"/>
                <path class="cls-1" d="M487.62,190.76v.5a138.51,138.51,0,0,0-138.08,127.6l-.92-128.1Z"/>
                <path class="cls-1" d="M349.54,318.86a138.62,138.62,0,1,1-.42,10.9C349.12,326.09,349.26,322.45,349.54,318.86Z"/>
                <path class="cls-1" d="M625.62,190.76l1,139h-.5a138.5,138.5,0,0,0-138.5-138.5v-.5Z"/>
                <path class="cls-1" d="M837.63,467.47v.29h-138V340.68A138.51,138.51,0,0,0,837.63,467.47Z"/>
                <path class="cls-1" d="M699.62,340.68q-.5-5.79-.49-11.71a138.43,138.43,0,1,1,.49,11.71Z"/>
                <path class="cls-1" d="M976.62,329V467.76h-139v-.29A138.5,138.5,0,0,0,976.13,329Z"/>
                <circle class="cls-1" cx="1287" cy="334" r="140"/>
                <path class="cls-1" d="M1755.7,349.59a140.12,140.12,0,0,1-45.7,94.79A138.1,138.1,0,0,0,1617.53,409H1617a140.28,140.28,0,0,0-94.49,36.72A140.16,140.16,0,0,1,1475,340.5C1475,263,1538,200,1615.5,200S1756,263,1756,340.5Q1756,345.08,1755.7,349.59Z"/>
                <path class="cls-1" d="M1617.53,409A138.1,138.1,0,0,1,1710,444.38a140.23,140.23,0,0,1-187.5,1.34A140.28,140.28,0,0,1,1617,409Z"/>
                <path class="cls-1" d="M1755.7,349.59l1.92,200.15h-.12A140.89,140.89,0,0,0,1716,450.07c-2-2-4-3.87-6-5.69A140.12,140.12,0,0,0,1755.7,349.59Z"/>
                <path class="cls-1" d="M1757.5,549.74A140.46,140.46,0,0,1,1617,690.5c-77.47,0-140.5-63.14-140.5-140.75a139.66,139.66,0,0,1,41.15-99.41c1.59-1.59,3.2-3.13,4.85-4.62a140.23,140.23,0,0,0,187.5-1.34c2,1.82,4.07,3.72,6,5.69A140.89,140.89,0,0,1,1757.5,549.74Z"/>
                <circle class="cls-1" cx="1881" cy="80" r="72.5"/>
                <rect class="cls-1" x="1808.5" y="198.5" width="145" height="272"/>
                <path class="cls-1" d="M2170.57,472.38v.38h-138l-1-138.88h.45A138.5,138.5,0,0,0,2170.57,472.38Z"/>
                <path class="cls-1" d="M2308.62,345.12a138.58,138.58,0,1,1,.45-11.24Q2309.07,339.57,2308.62,345.12Z"/>
                <path class="cls-1" d="M2308.62,345.12V472.76h-138v-.38A138.51,138.51,0,0,0,2308.62,345.12Z"/>
                <circle class="cls-1" cx="2503" cy="340" r="141"/>
                </g></svg>
              </div>
              <div style={{position: "absolute", top: "30%" ,left: "15%", width:"70%"}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2644 690.5" style={{fill: 'none', stroke: '#0336FF', strokeWidth: 3}}>
                <defs>
                </defs>
                <g>
                <circle class="cls-2" cx="209" cy="70" r="70"/>
                <path class="cls-2" d="M279.62,190.76l-2.92,331C272,449.71,211.78,392.5,138.5,392.5c-.89,0-1.77,0-2.66,0l1.78-201.77Z"/>
                <path class="cls-2" d="M276.7,521.81q.3,4.56.3,9.19c0,76.37-62.13,138.5-138.5,138.5S0,607.37,0,531c0-75.48,60.69-137,135.84-138.47.89,0,1.77,0,2.66,0C211.78,392.5,272,449.71,276.7,521.81Z"/>
                <path class="cls-2" d="M487.62,190.76v.5a138.51,138.51,0,0,0-138.08,127.6l-.92-128.1Z"/>
                <path class="cls-2" d="M349.54,318.86a138.62,138.62,0,1,1-.42,10.9C349.12,326.09,349.26,322.45,349.54,318.86Z"/>
                <path class="cls-2" d="M625.62,190.76l1,139h-.5a138.5,138.5,0,0,0-138.5-138.5v-.5Z"/>
                <path class="cls-2" d="M837.63,467.47v.29h-138V340.68A138.51,138.51,0,0,0,837.63,467.47Z"/>
                <path class="cls-2" d="M699.62,340.68q-.5-5.79-.49-11.71a138.43,138.43,0,1,1,.49,11.71Z"/>
                <path class="cls-2" d="M976.62,329V467.76h-139v-.29A138.5,138.5,0,0,0,976.13,329Z"/>
                <circle class="cls-2" cx="1287" cy="334" r="140"/>
                <path class="cls-2" d="M1755.7,349.59a140.12,140.12,0,0,1-45.7,94.79A138.1,138.1,0,0,0,1617.53,409H1617a140.28,140.28,0,0,0-94.49,36.72A140.16,140.16,0,0,1,1475,340.5C1475,263,1538,200,1615.5,200S1756,263,1756,340.5Q1756,345.08,1755.7,349.59Z"/>
                <path class="cls-2" d="M1617.53,409A138.1,138.1,0,0,1,1710,444.38a140.23,140.23,0,0,1-187.5,1.34A140.28,140.28,0,0,1,1617,409Z"/>
                <path class="cls-2" d="M1755.7,349.59l1.92,200.15h-.12A140.89,140.89,0,0,0,1716,450.07c-2-2-4-3.87-6-5.69A140.12,140.12,0,0,0,1755.7,349.59Z"/>
                <path class="cls-2" d="M1757.5,549.74A140.46,140.46,0,0,1,1617,690.5c-77.47,0-140.5-63.14-140.5-140.75a139.66,139.66,0,0,1,41.15-99.41c1.59-1.59,3.2-3.13,4.85-4.62a140.23,140.23,0,0,0,187.5-1.34c2,1.82,4.07,3.72,6,5.69A140.89,140.89,0,0,1,1757.5,549.74Z"/>
                <circle class="cls-2" cx="1881" cy="80" r="72.5"/>
                <rect class="cls-2" x="1808.5" y="198.5" width="145" height="272"/>
                <path class="cls-2" d="M2170.57,472.38v.38h-138l-1-138.88h.45A138.5,138.5,0,0,0,2170.57,472.38Z"/>
                <path class="cls-2" d="M2308.62,345.12a138.58,138.58,0,1,1,.45-11.24Q2309.07,339.57,2308.62,345.12Z"/>
                <path class="cls-2" d="M2308.62,345.12V472.76h-138v-.38A138.51,138.51,0,0,0,2308.62,345.12Z"/>
                <circle class="cls-2" cx="2503" cy="340" r="141"/>
                </g></svg>
              </div>
              <div style={{position: "absolute", top: "45%" ,left: "15%", width:"70%"}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2644 690.5" style={{fill: 'none', stroke: '#FF0266', strokeWidth: 5}}>
                <defs>
                </defs>
                <g>
                <circle class="cls-3" cx="209" cy="70" r="70"/>
                <path class="cls-3" d="M279.62,190.76l-2.92,331C272,449.71,211.78,392.5,138.5,392.5c-.89,0-1.77,0-2.66,0l1.78-201.77Z"/>
                <path class="cls-3" d="M276.7,521.81q.3,4.56.3,9.19c0,76.37-62.13,138.5-138.5,138.5S0,607.37,0,531c0-75.48,60.69-137,135.84-138.47.89,0,1.77,0,2.66,0C211.78,392.5,272,449.71,276.7,521.81Z"/>
                <path class="cls-3" d="M487.62,190.76v.5a138.51,138.51,0,0,0-138.08,127.6l-.92-128.1Z"/>
                <path class="cls-3" d="M349.54,318.86a138.62,138.62,0,1,1-.42,10.9C349.12,326.09,349.26,322.45,349.54,318.86Z"/>
                <path class="cls-3" d="M625.62,190.76l1,139h-.5a138.5,138.5,0,0,0-138.5-138.5v-.5Z"/>
                <path class="cls-3" d="M837.63,467.47v.29h-138V340.68A138.51,138.51,0,0,0,837.63,467.47Z"/>
                <path class="cls-3" d="M699.62,340.68q-.5-5.79-.49-11.71a138.43,138.43,0,1,1,.49,11.71Z"/>
                <path class="cls-3" d="M976.62,329V467.76h-139v-.29A138.5,138.5,0,0,0,976.13,329Z"/>
                <circle class="cls-3" cx="1287" cy="334" r="140"/>
                <path class="cls-3" d="M1755.7,349.59a140.12,140.12,0,0,1-45.7,94.79A138.1,138.1,0,0,0,1617.53,409H1617a140.28,140.28,0,0,0-94.49,36.72A140.16,140.16,0,0,1,1475,340.5C1475,263,1538,200,1615.5,200S1756,263,1756,340.5Q1756,345.08,1755.7,349.59Z"/>
                <path class="cls-3" d="M1617.53,409A138.1,138.1,0,0,1,1710,444.38a140.23,140.23,0,0,1-187.5,1.34A140.28,140.28,0,0,1,1617,409Z"/>
                <path class="cls-3" d="M1755.7,349.59l1.92,200.15h-.12A140.89,140.89,0,0,0,1716,450.07c-2-2-4-3.87-6-5.69A140.12,140.12,0,0,0,1755.7,349.59Z"/>
                <path class="cls-3" d="M1757.5,549.74A140.46,140.46,0,0,1,1617,690.5c-77.47,0-140.5-63.14-140.5-140.75a139.66,139.66,0,0,1,41.15-99.41c1.59-1.59,3.2-3.13,4.85-4.62a140.23,140.23,0,0,0,187.5-1.34c2,1.82,4.07,3.72,6,5.69A140.89,140.89,0,0,1,1757.5,549.74Z"/>
                <circle class="cls-3" cx="1881" cy="80" r="72.5"/>
                <rect class="cls-3" x="1808.5" y="198.5" width="145" height="272"/>
                <path class="cls-3" d="M2170.57,472.38v.38h-138l-1-138.88h.45A138.5,138.5,0,0,0,2170.57,472.38Z"/>
                <path class="cls-3" d="M2308.62,345.12a138.58,138.58,0,1,1,.45-11.24Q2309.07,339.57,2308.62,345.12Z"/>
                <path class="cls-3" d="M2308.62,345.12V472.76h-138v-.38A138.51,138.51,0,0,0,2308.62,345.12Z"/>
                <circle class="cls-3" cx="2503" cy="340" r="141"/>
                </g></svg>
              </div>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    translateY: [0,-10],
                    easing: 'easeInOutQuad',
                    direction: 'alternate',
                    loop: true
                  })
                }} className={styles.ScrollDown} style={{left: "33%", fontSize: "0.8rem"}}><FiChevronDown/>scroll down</div>
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
              <div>
                <p ref = { ref => {
                  tl.add({
                    delay: 1000,
                    targets: ref,
                    translateX: [-100, 0],
                    opacity: [0,1],
                  })
                }} className={styles.Jun}>
                  <span className={styles.J}>J</span>UN
                </p>
              </div>
              <div>
                <p ref = { ref => {
                  tl.add({
                    targets: ref,
                    translateX: [-100, 0],
                    opacity: [0,1],
                  }, "-=1200")
                }} className={styles.Ogino}>OGINO</p>
              </div>
            </div>
            <div className={styles.Position}>
              <div ref = { ref => {
                  tl.add({
                    targets: ref,
                    opacity: [0,1],
                  }, "-=1000")
                }} >
                <p><span className={styles.F}>F</span>ront-end Developer</p>
              </div>
            </div>
          </div>
          <div style={{position: "absolute", top: "15%" ,right: "8%", width:"40%"}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2644 690.5" style={{fill: 'none', stroke: '#FFAB00', strokeWidth: 5}}>
            <defs>
            </defs>
            <g>
            <circle class="cls-1" cx="209" cy="70" r="70"/>
            <path class="cls-1" d="M279.62,190.76l-2.92,331C272,449.71,211.78,392.5,138.5,392.5c-.89,0-1.77,0-2.66,0l1.78-201.77Z"/>
            <path class="cls-1" d="M276.7,521.81q.3,4.56.3,9.19c0,76.37-62.13,138.5-138.5,138.5S0,607.37,0,531c0-75.48,60.69-137,135.84-138.47.89,0,1.77,0,2.66,0C211.78,392.5,272,449.71,276.7,521.81Z"/>
            <path class="cls-1" d="M487.62,190.76v.5a138.51,138.51,0,0,0-138.08,127.6l-.92-128.1Z"/>
            <path class="cls-1" d="M349.54,318.86a138.62,138.62,0,1,1-.42,10.9C349.12,326.09,349.26,322.45,349.54,318.86Z"/>
            <path class="cls-1" d="M625.62,190.76l1,139h-.5a138.5,138.5,0,0,0-138.5-138.5v-.5Z"/>
            <path class="cls-1" d="M837.63,467.47v.29h-138V340.68A138.51,138.51,0,0,0,837.63,467.47Z"/>
            <path class="cls-1" d="M699.62,340.68q-.5-5.79-.49-11.71a138.43,138.43,0,1,1,.49,11.71Z"/>
            <path class="cls-1" d="M976.62,329V467.76h-139v-.29A138.5,138.5,0,0,0,976.13,329Z"/>
            <circle class="cls-1" cx="1287" cy="334" r="140"/>
            <path class="cls-1" d="M1755.7,349.59a140.12,140.12,0,0,1-45.7,94.79A138.1,138.1,0,0,0,1617.53,409H1617a140.28,140.28,0,0,0-94.49,36.72A140.16,140.16,0,0,1,1475,340.5C1475,263,1538,200,1615.5,200S1756,263,1756,340.5Q1756,345.08,1755.7,349.59Z"/>
            <path class="cls-1" d="M1617.53,409A138.1,138.1,0,0,1,1710,444.38a140.23,140.23,0,0,1-187.5,1.34A140.28,140.28,0,0,1,1617,409Z"/>
            <path class="cls-1" d="M1755.7,349.59l1.92,200.15h-.12A140.89,140.89,0,0,0,1716,450.07c-2-2-4-3.87-6-5.69A140.12,140.12,0,0,0,1755.7,349.59Z"/>
            <path class="cls-1" d="M1757.5,549.74A140.46,140.46,0,0,1,1617,690.5c-77.47,0-140.5-63.14-140.5-140.75a139.66,139.66,0,0,1,41.15-99.41c1.59-1.59,3.2-3.13,4.85-4.62a140.23,140.23,0,0,0,187.5-1.34c2,1.82,4.07,3.72,6,5.69A140.89,140.89,0,0,1,1757.5,549.74Z"/>
            <circle class="cls-1" cx="1881" cy="80" r="72.5"/>
            <rect class="cls-1" x="1808.5" y="198.5" width="145" height="272"/>
            <path class="cls-1" d="M2170.57,472.38v.38h-138l-1-138.88h.45A138.5,138.5,0,0,0,2170.57,472.38Z"/>
            <path class="cls-1" d="M2308.62,345.12a138.58,138.58,0,1,1,.45-11.24Q2309.07,339.57,2308.62,345.12Z"/>
            <path class="cls-1" d="M2308.62,345.12V472.76h-138v-.38A138.51,138.51,0,0,0,2308.62,345.12Z"/>
            <circle class="cls-1" cx="2503" cy="340" r="141"/>
            </g></svg>
          </div>
          <div style={{position: "absolute", top: "37%" ,right: "8%", width:"40%"}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2644 690.5" style={{fill: 'none', stroke: '#0336FF', strokeWidth: 3}}>
            <defs>
            </defs>
            <g>
            <circle class="cls-2" cx="209" cy="70" r="70"/>
            <path class="cls-2" d="M279.62,190.76l-2.92,331C272,449.71,211.78,392.5,138.5,392.5c-.89,0-1.77,0-2.66,0l1.78-201.77Z"/>
            <path class="cls-2" d="M276.7,521.81q.3,4.56.3,9.19c0,76.37-62.13,138.5-138.5,138.5S0,607.37,0,531c0-75.48,60.69-137,135.84-138.47.89,0,1.77,0,2.66,0C211.78,392.5,272,449.71,276.7,521.81Z"/>
            <path class="cls-2" d="M487.62,190.76v.5a138.51,138.51,0,0,0-138.08,127.6l-.92-128.1Z"/>
            <path class="cls-2" d="M349.54,318.86a138.62,138.62,0,1,1-.42,10.9C349.12,326.09,349.26,322.45,349.54,318.86Z"/>
            <path class="cls-2" d="M625.62,190.76l1,139h-.5a138.5,138.5,0,0,0-138.5-138.5v-.5Z"/>
            <path class="cls-2" d="M837.63,467.47v.29h-138V340.68A138.51,138.51,0,0,0,837.63,467.47Z"/>
            <path class="cls-2" d="M699.62,340.68q-.5-5.79-.49-11.71a138.43,138.43,0,1,1,.49,11.71Z"/>
            <path class="cls-2" d="M976.62,329V467.76h-139v-.29A138.5,138.5,0,0,0,976.13,329Z"/>
            <circle class="cls-2" cx="1287" cy="334" r="140"/>
            <path class="cls-2" d="M1755.7,349.59a140.12,140.12,0,0,1-45.7,94.79A138.1,138.1,0,0,0,1617.53,409H1617a140.28,140.28,0,0,0-94.49,36.72A140.16,140.16,0,0,1,1475,340.5C1475,263,1538,200,1615.5,200S1756,263,1756,340.5Q1756,345.08,1755.7,349.59Z"/>
            <path class="cls-2" d="M1617.53,409A138.1,138.1,0,0,1,1710,444.38a140.23,140.23,0,0,1-187.5,1.34A140.28,140.28,0,0,1,1617,409Z"/>
            <path class="cls-2" d="M1755.7,349.59l1.92,200.15h-.12A140.89,140.89,0,0,0,1716,450.07c-2-2-4-3.87-6-5.69A140.12,140.12,0,0,0,1755.7,349.59Z"/>
            <path class="cls-2" d="M1757.5,549.74A140.46,140.46,0,0,1,1617,690.5c-77.47,0-140.5-63.14-140.5-140.75a139.66,139.66,0,0,1,41.15-99.41c1.59-1.59,3.2-3.13,4.85-4.62a140.23,140.23,0,0,0,187.5-1.34c2,1.82,4.07,3.72,6,5.69A140.89,140.89,0,0,1,1757.5,549.74Z"/>
            <circle class="cls-2" cx="1881" cy="80" r="72.5"/>
            <rect class="cls-2" x="1808.5" y="198.5" width="145" height="272"/>
            <path class="cls-2" d="M2170.57,472.38v.38h-138l-1-138.88h.45A138.5,138.5,0,0,0,2170.57,472.38Z"/>
            <path class="cls-2" d="M2308.62,345.12a138.58,138.58,0,1,1,.45-11.24Q2309.07,339.57,2308.62,345.12Z"/>
            <path class="cls-2" d="M2308.62,345.12V472.76h-138v-.38A138.51,138.51,0,0,0,2308.62,345.12Z"/>
            <circle class="cls-2" cx="2503" cy="340" r="141"/>
            </g></svg>
          </div>
          <div style={{position: "absolute", top: "60%" ,right: "8%", width:"40%"}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2644 690.5" style={{fill: 'none', stroke: '#FF0266', strokeWidth: 5}}>
            <defs>
            </defs>
            <g>
            <circle class="cls-3" cx="209" cy="70" r="70"/>
            <path class="cls-3" d="M279.62,190.76l-2.92,331C272,449.71,211.78,392.5,138.5,392.5c-.89,0-1.77,0-2.66,0l1.78-201.77Z"/>
            <path class="cls-3" d="M276.7,521.81q.3,4.56.3,9.19c0,76.37-62.13,138.5-138.5,138.5S0,607.37,0,531c0-75.48,60.69-137,135.84-138.47.89,0,1.77,0,2.66,0C211.78,392.5,272,449.71,276.7,521.81Z"/>
            <path class="cls-3" d="M487.62,190.76v.5a138.51,138.51,0,0,0-138.08,127.6l-.92-128.1Z"/>
            <path class="cls-3" d="M349.54,318.86a138.62,138.62,0,1,1-.42,10.9C349.12,326.09,349.26,322.45,349.54,318.86Z"/>
            <path class="cls-3" d="M625.62,190.76l1,139h-.5a138.5,138.5,0,0,0-138.5-138.5v-.5Z"/>
            <path class="cls-3" d="M837.63,467.47v.29h-138V340.68A138.51,138.51,0,0,0,837.63,467.47Z"/>
            <path class="cls-3" d="M699.62,340.68q-.5-5.79-.49-11.71a138.43,138.43,0,1,1,.49,11.71Z"/>
            <path class="cls-3" d="M976.62,329V467.76h-139v-.29A138.5,138.5,0,0,0,976.13,329Z"/>
            <circle class="cls-3" cx="1287" cy="334" r="140"/>
            <path class="cls-3" d="M1755.7,349.59a140.12,140.12,0,0,1-45.7,94.79A138.1,138.1,0,0,0,1617.53,409H1617a140.28,140.28,0,0,0-94.49,36.72A140.16,140.16,0,0,1,1475,340.5C1475,263,1538,200,1615.5,200S1756,263,1756,340.5Q1756,345.08,1755.7,349.59Z"/>
            <path class="cls-3" d="M1617.53,409A138.1,138.1,0,0,1,1710,444.38a140.23,140.23,0,0,1-187.5,1.34A140.28,140.28,0,0,1,1617,409Z"/>
            <path class="cls-3" d="M1755.7,349.59l1.92,200.15h-.12A140.89,140.89,0,0,0,1716,450.07c-2-2-4-3.87-6-5.69A140.12,140.12,0,0,0,1755.7,349.59Z"/>
            <path class="cls-3" d="M1757.5,549.74A140.46,140.46,0,0,1,1617,690.5c-77.47,0-140.5-63.14-140.5-140.75a139.66,139.66,0,0,1,41.15-99.41c1.59-1.59,3.2-3.13,4.85-4.62a140.23,140.23,0,0,0,187.5-1.34c2,1.82,4.07,3.72,6,5.69A140.89,140.89,0,0,1,1757.5,549.74Z"/>
            <circle class="cls-3" cx="1881" cy="80" r="72.5"/>
            <rect class="cls-3" x="1808.5" y="198.5" width="145" height="272"/>
            <path class="cls-3" d="M2170.57,472.38v.38h-138l-1-138.88h.45A138.5,138.5,0,0,0,2170.57,472.38Z"/>
            <path class="cls-3" d="M2308.62,345.12a138.58,138.58,0,1,1,.45-11.24Q2309.07,339.57,2308.62,345.12Z"/>
            <path class="cls-3" d="M2308.62,345.12V472.76h-138v-.38A138.51,138.51,0,0,0,2308.62,345.12Z"/>
            <circle class="cls-3" cx="2503" cy="340" r="141"/>
            </g></svg>
          </div>
          <div ref = { ref => {
                  anime({
                    targets: ref,
                    translateY: [0,-20],
                    easing: 'easeInOutQuad',
                    direction: 'alternate',
                    loop: true
                  })
                }} className={styles.ScrollDown}><FiChevronDown/>scroll down</div>
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