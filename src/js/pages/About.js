import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove} from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { RiCodeSSlashLine, RiUserHeartLine } from "react-icons/ri";
import { ReactComponent as HTML } from '../components/images/html.svg';
import { ReactComponent as CSS } from '../components/images/css-3.svg';
import { ReactComponent as Expo } from '../components/images/expo.svg';
import { ReactComponent as Javascript } from '../components/images/javascript.svg';
import { ReactComponent as REACT } from '../components/images/react.svg';
import { ReactComponent as Redux } from '../components/images/redux.svg';
import { ReactComponent as Python } from '../components/images/python.svg';

import styles from '../../styles/about.module.css';
import MyPic from '../components/images/about_mypic.jpg';

import anime from "animejs";

export default class About extends React.Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://use.typekit.net/urt8xoe.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <MediaQuery query="(max-width:767px)">
          <div style={{position:"absolute", height: "180%", width: "100%"}}>
            <div style={{position: "relative", top: "4%", paddingLeft: "4%"}}>
              <IoIosRemove style={{color: "#FFAB00", marginBottom: "3%"}}></IoIosRemove>
              About Me
            </div> 
            <div style={{position: "relative", top: "5%", paddingLeft: "14%"}}>
              <div className={styles.pMyName}>
                荻野 隼
              </div>
              <div style={{fontSize: 18}}>
                Jun Ogino
              </div>
            </div>

            <div style={{width: "80%",position:"relative",top: "6%",left: "10%"}}>
              <img src={MyPic} alt=""/>
            </div>
            <div style={{position: "relative", fontSize: "0.5rem", width: "80%", top: "8%", left:"10%"}}>
              <p>1998年1月26日生まれ、東京都出身。趣味は体を動かすこと。</p>
              <div style={{fontSize: 20, marginTop: -10}}>
                <FaPencilAlt className={styles.headerLogo1}></FaPencilAlt>
                Education
              </div>
              <p style={{marginTop:5}}>都立武蔵野北高校(普通科)を卒業後、電気通信大学 情報理工学域に進学。B2からI類(情報系)に所属し、B3からメディア情報学プログラムに所属。2020年3月に卒業し、同年4月、大学院に進学。<br></br>卒業研究テーマは "休憩時の運動が集中力に与える影響" 。</p>
              <div style={{fontSize: 20}}>
                <RiCodeSSlashLine className={styles.headerLogo2}></RiCodeSSlashLine>
                Programming
              </div>
              <p style={{marginTop:5}}>大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。</p>
              <p>B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。</p>
              <div style={{fontSize: 20}}>
                <RiUserHeartLine className={styles.headerLogo2}></RiUserHeartLine>
                Hobby
              </div>
              <p style={{marginTop: 5}}>大学の陸上競技部に所属し、現在も選手として活動中。<br></br>2018年 第97回関東陸上競技大会<br></br>男子2部 十種競技 第6位入賞。</p>
              <p style={{fontSize: 18}}>Personal Best</p>
              <table className={styles.table}>
                <tbody>
                <tr>
                  <td>100m</td>
                  <td>11"42</td>
                </tr>
                <tr>
                  <td>走幅跳</td>
                  <td>6m82cm</td>
                </tr>
                <tr>
                  <td>走高跳</td>
                  <td>196cm</td>
                </tr>
                <tr>
                  <td>400m</td>
                  <td>50.82</td>
                </tr>
                <tr>
                  <td>110mH</td>
                  <td>15"51</td>
                </tr>
                <tr>
                  <td>1500m</td>
                  <td>4'28"19</td>
                </tr>
                <tr>
                  <td>十種競技</td>
                  <td>6008点</td>
                </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{position: "relative", top: "10%", paddingLeft: "5%"}}>
              <IoIosRemove style={{color: "#FFAB00", marginBottom: "3%"}}></IoIosRemove>
              Skill set
            </div>
            <div style={{position: "relative", top: "12%"}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '42%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.pSkillbarAnimation}>
              </div>
              <div className={styles.pSkillbarWhite}></div>
              <p className={styles.pSkillPersent1}>70%</p>
              <div className={styles.pSkillNameContainer}>
                <HTML style={{position:"absolute", left: "8vw", width: "10vw", zIndex: 1}}></HTML>
                <CSS style={{position:"absolute", left: "15vw", width:　"10vw"}}></CSS>
                <p className={styles.pSkillName1}>
                  HTML&CSS
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "18%"}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '48%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.pSkillbarAnimation}>
              </div>
              <div className={styles.pSkillbarWhite}></div>
              <p className={styles.pSkillPersent1}>80%</p>
              <div className={styles.pSkillNameContainer}>
                <Javascript style={{position:"absolute", left: "10vw", width:　"12vw"}}></Javascript>
                <p className={styles.pSkillName1}>
                  JavaScript
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "24%"}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '48%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.pSkillbarAnimation}>
              </div>
              <div className={styles.pSkillbarWhite}></div>
              <p className={styles.pSkillPersent1}>80%</p>
              <div className={styles.pSkillNameContainer}>
                <REACT style={{position:"absolute", left: "10vw", width: "13vw"}}></REACT>
                <p className={styles.pSkillName1}>
                  React/React Native
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "30%"}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '30%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.pSkillbarAnimation}>
              </div>
              <div className={styles.pSkillbarWhite}></div>
              <p className={styles.pSkillPersent1}>50%</p>
              <div className={styles.pSkillNameContainer}>
                <Redux style={{position:"absolute", left: "10vw", width: "13vw"}}></Redux>
                <p className={styles.pSkillName1}>
                  Redux/Redux saga
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "36%"}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '36%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.pSkillbarAnimation}>
              </div>
              <div className={styles.pSkillbarWhite}></div>
              <p className={styles.pSkillPersent1}>60%</p>
              <div className={styles.pSkillNameContainer}>
                <Expo style={{position:"absolute", left: "12vw", width: "13vw"}}></Expo>
                <p className={styles.pSkillName1}>
                  Expo
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "41%", paddingBottom: 100}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '24%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.pSkillbarAnimation}>
              </div>
              <div className={styles.pSkillbarWhite}></div>
              <p className={styles.pSkillPersent2}>40%</p>
              <div className={styles.pSkillNameContainer}>
                <Python style={{position:"absolute", left: "10vw", width: "13vw"}}></Python>
                <p className={styles.pSkillName2}>
                  Python
                </p>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px">
        <div className={styles.Page}>
          <div className={styles.innerPage}>
            <IoIosRemove style={{position: "absolute", color: "#FFAB00", top: "13%", left: "5%"}}></IoIosRemove>
            <div style={{position: "absolute", top: "11%", left: "7%", fontWeight: 500, fontSize: 40}}>About Me</div>
            <div>
              <div className={styles.MyName}>
                荻野 隼
              </div>
              <div style={{fontSize: 20, position: "absolute", top: "28%", left: "8%"}}>
                Jun Ogino
              </div>
              <div style={{width: "35%",position:"absolute",top: "35%",left: "8%"}}>
                <img src={MyPic} alt=""/>
              </div>
              <div style={{position: "absolute", fontSize: 18, width: "43%", height: "80%", top: "27%", right: "5%"}}>
                <p>1998年1月26日生まれ、東京都出身。趣味は体を動かすこと。</p>
                  <div style={{fontSize: 20, marginTop: -10}}>
                    <FaPencilAlt className={styles.headerLogo}></FaPencilAlt>
                    Education
                  </div>
                  <p style={{marginTop:5}}>都立武蔵野北高校(普通科)を卒業後、電気通信大学 情報理工学域に進学。B2からI類(情報系)に所属し、B3からメディア情報学プログラムに所属。2020年3月に卒業し、同年4月、大学院に進学。<br></br>卒業研究テーマは "休憩時の運動が集中力に与える影響" 。</p>
                  <div style={{fontSize: 20}}>
                    <RiCodeSSlashLine className={styles.headerLogo}></RiCodeSSlashLine>
                    Programming
                  </div>
                  <p style={{marginTop:5}}>大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。</p>
                  <p>B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。</p>
                  <div style={{fontSize: 20}}>
                    <RiUserHeartLine className={styles.headerLogo}></RiUserHeartLine>
                    Hobby
                  </div>
                  <p style={{marginTop: 5}}>大学の陸上競技部に所属し、現在も選手として活動中。<br></br>2018年 第97回関東陸上競技大会<br></br>男子2部 十種競技 第6位入賞。</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Page}>
          <div className={styles.innerPage}>
            <IoIosRemove style={{position: "absolute", color: "#FFAB00", top: "13%", left: "5%"}}></IoIosRemove>
            <div style={{position: "absolute", top: "11%", left: "7%", fontWeight: 500, fontSize: 40}}>Skill set</div>
              <div style={{position: "relative", top: "30%"}}>
              <div ref = { ref => {
                anime({
                    targets: ref,
                    width: '17.5%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.skillbarAnimation}>
                </div>
                <div className={styles.skillbarWhite}></div>
                <div className={styles.skillNameContainer}>
                  <p className={styles.skillName}>HTML&CSS</p>
                  <p className={styles.skillPersent}>70%</p>
                  <HTML style={{position:"relative", width: "10%", zIndex: 1,}}></HTML>
                  <CSS style={{position:"relative", width:　"10%", marginLeft: -15}}></CSS>
                </div>
              </div>
              <div style={{position: "relative", top: "30%", left: "40%"}}>
              <div ref = { ref => {
                anime({
                    targets: ref,
                    width: '20%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.skillbarAnimation}>
                </div>
                <div className={styles.skillbarWhite}></div>
                <div className={styles.skillNameContainer}>
                  <p className={styles.skillName}>JavaScript</p>
                  <p className={styles.skillPersent}>80%</p>
                  <Javascript style={{position:"relative", width:　"30%"}}></Javascript>
                </div>
              </div>
              <div style={{position: "relative", top: "50%"}}>
              <div ref = { ref => {
                anime({
                    targets: ref,
                    width: '20%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.skillbarAnimation}>
                </div>
                <div className={styles.skillbarWhite}></div>
                <div className={styles.skillNameContainer}>
                  <p className={styles.skillName}>React/React&nbsp;Native</p>
                  <p className={styles.skillPersent}>80%</p>
                  <REACT style={{position:"relative", width: "30%", zIndex: 1}}></REACT>
                </div>
              </div>
              <div style={{position: "relative", top: "50%", left: "40%"}}>
              <div ref = { ref => {
                anime({
                    targets: ref,
                    width: '12.5%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.skillbarAnimation}>
                </div>
                <div className={styles.skillbarWhite}></div>
                <div className={styles.skillNameContainer}>
                  <p className={styles.skillName}>Redux/Redux&nbsp;saga</p>
                  <p className={styles.skillPersent}>50%</p>
                  <Redux style={{position:"relative", width:　"30%"}}></Redux>
                </div>
              </div>
              <div style={{position: "relative", top: "70%"}}>
              <div ref = { ref => {
                anime({
                    targets: ref,
                    width: '15%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.skillbarAnimation}>
                </div>
                <div className={styles.skillbarWhite}></div>
                <div className={styles.skillNameContainer}>
                  <p className={styles.skillName}>Expo</p>
                  <p className={styles.skillPersent}>60%</p>
                  <Expo style={{position:"relative", width: "30%", zIndex: 1}}></Expo>
                </div>
              </div>
              <div style={{position: "relative", top: "70%", left: "40%"}}>
                <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '10%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} className={styles.skillbarAnimation}>
                </div>
                <div className={styles.skillbarWhite}></div>
                <div className={styles.skillNameContainer}>
                  <p className={styles.skillName}>Python</p>
                  <p className={styles.skillPersent}>40%</p>
                  <Python style={{position:"relative", width: "30%", zIndex: 1}}></Python>
                </div>
              </div>
          </div> 
        </div>
        </MediaQuery>
      </div>
    );
  }
}