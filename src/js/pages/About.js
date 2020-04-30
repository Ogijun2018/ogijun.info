import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove} from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { RiCodeSSlashLine, RiUserHeartLine } from "react-icons/ri";
import styled from "styled-components";
import delighters from "../components/delighters";
import { ReactComponent as HTML } from '../components/images/html.svg';
import { ReactComponent as CSS } from '../components/images/css-3.svg';
import { ReactComponent as Expo } from '../components/images/expo.svg';
import { ReactComponent as Javascript } from '../components/images/javascript.svg';
import { ReactComponent as REACT } from '../components/images/react.svg';
import { ReactComponent as Redux } from '../components/images/redux.svg';
import { ReactComponent as Python } from '../components/images/python.svg';

import styles from '../../styles/styles.module.css';
import MyPic from '../components/images/about_mypic.jpg';

import anime from "animejs";

export const PictureFuwatto = styled.div
`
width: "80%;
position:"absolute";
top: "35%";
left: "10%";

.delighter{
  transition: all .3s ease-out;
  transform: translateX(-100%);
  opacity: 0;
}

.delighter.started {
  transform: none;
  opacity: 1;
}

.delighter.started.ended{
  border: solid red 10px;
}
`

export default class About extends React.Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://use.typekit.net/urt8xoe.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <MediaQuery query="(max-width:767px)">
          <div style={{position:"absolute", height: "250%", width: "100%"}}>
            <div style={{position: "relative", top: "4%", paddingLeft: "4%"}}>
              <IoIosRemove style={{color: "#FFAB00", marginBottom: "3%"}}></IoIosRemove>
              About Me
            </div> 
            <div style={{position: "relative", top: "5%", paddingLeft: "14%"}}>
              <div style={{fontFamily: "heisei-kaku-gothic-std, sans-serif", fontSize: 25, fontWeight: 600, fontStyle: "normal"}}>
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
                <FaPencilAlt style={{color: "#FFAB00",paddingBottom: 6,fontSize: 18}}></FaPencilAlt>
                Education
              </div>
              <p style={{marginTop:5}}>都立武蔵野北高校(普通科)を卒業後、電気通信大学 情報理工学域に進学。B2からI類(情報系)に所属し、B3からメディア情報学プログラムに所属。2020年3月に卒業し、同年4月、大学院に進学。<br></br>卒業研究テーマは "休憩時の運動が集中力に与える影響" 。</p>
              <div style={{fontSize: 20}}>
                <RiCodeSSlashLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23}}></RiCodeSSlashLine>
                Programming
              </div>
              <p style={{marginTop:5}}>大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。</p>
              <p>B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。</p>
              <div style={{fontSize: 20}}>
                <RiUserHeartLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23}}></RiUserHeartLine>
                Hobby
              </div>
              <p style={{marginTop: 5}}>大学の陸上競技部に所属し、現在も選手として活動中。<br></br>2018年 第97回関東陸上競技大会<br></br>男子2部 十種競技 第6位入賞。</p>
              <p style={{fontSize: 18}}>Personal Best</p>
              <table style={{marginTop: -20,width: "90%", textAlign: "center"}}>
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
                    width: '48%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} style={{position: "absolute", top: "13%", left: "30%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
              </div>
              <div style={{position: "absolute", top: "13%", left: "30%", width: "60%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
              <p style={{position:"absolute",top: -50, right: "14vw", fontSize: 20, fontWeight: 'bold'}}>80%</p>
              <div style={{position:"absolute", top: -20}}>
                <HTML style={{position:"absolute", left: "8vw", width: "10vw", zIndex: 1}}></HTML>
                <CSS style={{position:"absolute", left: "15vw", width:　"10vw"}}></CSS>
                <p style={{position: "relative", top: -30, left: "35vw", fontSize: "0.6rem"}}>
                  HTML&CSS
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "18%"}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '54%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} style={{position: "absolute", top: "13%", left: "30%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
              </div>
              <div style={{position: "absolute", top: "13%", left: "30%", width: "60%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
              <p style={{position:"absolute",top: -50, right: "14vw", fontSize: 20, fontWeight: 'bold'}}>90%</p>
              <div style={{position:"absolute", top: -20}}>
                <Javascript style={{position:"absolute", left: "10vw", width:　"12vw"}}></Javascript>
                <p style={{position: "relative", top: -30, left: "35vw", fontSize: "0.6rem"}}>
                  JavaScript
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "24%"}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '54%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} style={{position: "absolute", top: "13%", left: "30%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
              </div>
              <div style={{position: "absolute", top: "13%", left: "30%", width: "60%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
              <p style={{position:"absolute",top: -50, right: "14vw", fontSize: 20, fontWeight: 'bold'}}>90%</p>
              <div style={{position:"absolute", top: -20}}>
                <REACT style={{position:"absolute", left: "10vw", width: "13vw"}}></REACT>
                <p style={{position: "relative", top: -30, left: "35vw", fontSize: "0.6rem"}}>
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
                }} style={{position: "absolute", top: "13%", left: "30%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
              </div>
              <div style={{position: "absolute", top: "13%", left: "30%", width: "60%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
              <p style={{position:"absolute",top: -50, right: "14vw", fontSize: 20, fontWeight: 'bold'}}>50%</p>
              <div style={{position:"absolute", top: -20}}>
                <Redux style={{position:"absolute", left: "10vw", width: "13vw", zIndex: 1}}></Redux>
                <p style={{position: "relative", top: -30, left: "35vw", fontSize: "0.6rem"}}>
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
                }} style={{position: "absolute", top: "13%", left: "30%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
              </div>
              <div style={{position: "absolute", top: "13%", left: "30%", width: "60%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
              <p style={{position:"absolute",top: -50, right: "14vw", fontSize: 20, fontWeight: 'bold'}}>60%</p>
              <div style={{position:"absolute", top: -20}}>
                <Expo style={{position:"absolute", left: "12vw", width: "13vw", zIndex: 1}}></Expo>
                <p style={{position: "relative", top: -30, left: "35vw", fontSize: "0.6rem"}}>
                  Expo
                </p>
              </div>
            </div>
            <div style={{position: "relative", top: "41%", paddingBottom: 150}}>
              <div ref = { ref => {
                  anime({
                    targets: ref,
                    width: '24%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} style={{position: "absolute", top: "13%", left: "30%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
              </div>
              <div style={{position: "absolute", top: "13%", left: "30%", width: "60%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
              <p style={{position:"absolute",top: -50, right: "14vw", fontSize: 20, fontWeight: 'bold'}}>40%</p>
              <div style={{position:"absolute", top: -20}}>
                <Python style={{position:"absolute", left: "10vw", width: "13vw", zIndex: 1}}></Python>
                <p style={{position: "relative", top: -30, left: "35vw", fontSize: "0.6rem"}}>
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
              <div style={{fontSize: 30, fontFamily: "heisei-kaku-gothic-std, sans-serif", fontWeight: 600, fontStyle: "normal", position: "absolute", top: "23%", left: "8%"}}>
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
                    <FaPencilAlt style={{color: "#FFAB00",paddingBottom: 6,fontSize: 18}}></FaPencilAlt>
                    Education
                  </div>
                  <p style={{marginTop:5}}>都立武蔵野北高校(普通科)を卒業後、電気通信大学 情報理工学域に進学。B2からI類(情報系)に所属し、B3からメディア情報学プログラムに所属。2020年3月に卒業し、同年4月、大学院に進学。<br></br>卒業研究テーマは "休憩時の運動が集中力に与える影響" 。</p>
                  <div style={{fontSize: 20}}>
                    <RiCodeSSlashLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23}}></RiCodeSSlashLine>
                    Programming
                  </div>
                  <p style={{marginTop:5}}>大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。</p>
                  <p>B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。</p>
                  <div style={{fontSize: 20}}>
                    <RiUserHeartLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23}}></RiUserHeartLine>
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
                    width: '20%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} style={{position: "absolute", left: "20%", marginTop: "2.5%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
                </div>
                <div style={{position: "absolute", left: "20%", marginTop: "2.5%", width: "25%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>HTML&CSS</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>80%</p>
                  <HTML style={{position:"relative", width: "10%", zIndex: 1,}}></HTML>
                  <CSS style={{position:"relative", width:　"10%", marginLeft: -15}}></CSS>
                </div>
              </div>
              <div style={{position: "relative", top: "30%", left: "40%"}}>
              <div ref = { ref => {
                anime({
                    targets: ref,
                    width: '22.5%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} style={{position: "absolute", left: "20%", marginTop: "2.5%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
                </div>
                <div style={{position: "absolute", left: "20%", marginTop: "2.5%", width: "25%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>JavaScript</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>90%</p>
                  <Javascript style={{position:"relative", width:　"30%"}}></Javascript>
                </div>
              </div>
              <div style={{position: "relative", top: "50%"}}>
              <div ref = { ref => {
                anime({
                    targets: ref,
                    width: '22.5%',
                    easing: 'easeInOutQuad',
                    direction: 'normal',
                  });
                }} style={{position: "absolute", left: "20%", marginTop: "2.5%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
                </div>
                <div style={{position: "absolute", left: "20%", marginTop: "2.5%", width: "25%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>React/React&nbsp;Native</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>90%</p>
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
                }} style={{position: "absolute", left: "20%", marginTop: "2.5%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
                </div>
                <div style={{position: "absolute", left: "20%", marginTop: "2.5%", width: "25%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>Redux/Redux&nbsp;saga</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>50%</p>
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
                }} style={{position: "absolute", left: "20%", marginTop: "2.5%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
                </div>
                <div style={{position: "absolute", left: "20%", marginTop: "2.5%", width: "25%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>Expo</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>60%</p>
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
                }} style={{position: "absolute", left: "20%", marginTop: "2.5%", background: "linear-gradient(to right, #FFAB00, #f83600)", height: 20, borderRadius: 50, zIndex: 1}}>
                </div>
                <div style={{position: "absolute", left: "20%", marginTop: "2.5%", width: "25%", filter: "drop-shadow(1px 4px 4px rgba(0,0,0,0.2))" , height: 20, borderRadius: 50, backgroundColor: "#EFEFEF"}}></div>
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>Python</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>40%</p>
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