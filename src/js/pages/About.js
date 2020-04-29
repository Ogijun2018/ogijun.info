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

import ProgressBar from "progressbar.js";

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
        <div className={styles.Page}>
          <div className={styles.innerPage}>
            <IoIosRemove style={{position: "absolute", color: "#FFAB00", top: "13%", left: "5%"}}></IoIosRemove>
            <div style={{position: "absolute", top: "12%", left: "12%", fontWeight: 300}}>About Me</div>
            <div>
              <div style={{fontSize: 25, fontFamily: "heisei-kaku-gothic-std, sans-serif", fontWeight: 600, fontStyle: "normal", position: "absolute", top: "19%", left: "13%"}}>
                荻野 隼
              </div>
              <div style={{fontSize: 15, position: "absolute", top: "24%", left: "13%"}}>
                Jun Ogino
              </div>
            </div>
            <div style={{width: "80%",position:"absolute",top: "30%",left: "10%"}}>
              <img src={MyPic} alt=""/>
            </div>
            <div>
              <div style={{position: "absolute", fontSize: "0.5rem", width: "80%", top: "63%", left:"10%", marginBottom: 300}}>
                <p>1998年1月26日生まれ、東京都出身。趣味は体を動かすこと。</p>
                <div style={{fontSize: 20, marginTop: -10}}>
                  <FaPencilAlt style={{color: "#FFAB00",paddingBottom: 6,fontSize: 18, marginRight: 6}}></FaPencilAlt>
                  Education
                </div>
                <p style={{marginTop:5}}>都立武蔵野北高校(普通科)を卒業後、電気通信大学 情報理工学域に進学。B2からI類(情報系)に所属し、B3からメディア情報学プログラムに所属。2020年3月に卒業し、同年4月、大学院に進学。<br></br>卒業研究テーマは "休憩時の運動が集中力に与える影響" 。</p>
                <div style={{fontSize: 20}}>
                  <RiCodeSSlashLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23, marginRight: 6}}></RiCodeSSlashLine>
                  Programming
                </div>
                <p style={{marginTop:5}}>大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。</p>
                <p>B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。</p>
                <div style={{fontSize: 20}}>
                  <RiUserHeartLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23, marginRight: 6}}></RiUserHeartLine>
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
                <div style={{position: "relative", marginTop: "1rem", fontSize: 30}}>
                  <IoIosRemove style={{color: "#FFAB00", marginLeft: "-6%"}}></IoIosRemove>
                  <div style={{position: "absolute", top: 3, left: "4%", fontWeight: 300}}>Skill set</div>
                  <div style={{position: "relative", marginTop: 15}}>
                    {/* <div ref = { ref => {
                      ProgressBar.SemiCircle(ref,{
                        strokeWidth: 6,
                        easing: 'easeInOut',
                        duration: 1400,
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        svgStyle: null,
                        from: {color: '#FFEA82'},
                        to: {color: '#ED6A5A'},
                        step: (state, bar) => {
                          bar.path.setAttribute('stroke', state.color);
                        }
                      }).animate(0.8);
                    }} style={{position: "absolute", width: "32vw", top: 15, left: "4vw"}}> */}
                    {/* </div> */}
                    <div style={{position:"absolute", top: 50, left: "11vw"}}>
                      <p style={{position:"absolute", fontSize: 15, top: -25, left: "5vw", fontWeight: 'bold'}}>80%</p>
                      <HTML style={{position:"relative", width: "10vw", zIndex: 1, marginRight: -10}}></HTML>
                      <CSS style={{position:"relative", width:　"10vw"}}></CSS>
                      <div style={{fontSize: "0.5rem", marginLeft: -5}}>
                        HTML&CSS
                      </div>
                    </div>
                  </div>
                  <div style={{position: "relative", marginLeft: "45vw" }}>
                    {/* <div ref = { ref => {
                      new ProgressBar.SemiCircle(ref,{
                        strokeWidth: 6,
                        easing: 'easeInOut',
                        duration: 1400,
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        svgStyle: null,
                        from: {color: '#FFEA82'},
                        to: {color: '#ED6A5A'},
                        step: (state, bar) => {
                          bar.path.setAttribute('stroke', state.color);
                        }
                      }).animate(0.9);
                    }} style={{position: "absolute", width: "32vw", top: 15, right: "4vw"}}> */}
                    {/* </div> */}
                    <div style={{position:"absolute", top: 50, right: "9vw"}}>
                      <p style={{position:"absolute", fontSize: 15, top: -25,fontWeight: 'bold', marginLeft: 12}}>90%</p>
                      <Javascript style={{width: "13vw", marginRight: 17}}></Javascript>
                      <div style={{position: "absolute", right: "1vw", fontSize: "0.6rem"}}>
                        JavaScript
                      </div>
                    </div>
                  </div>
                  <div style={{position: "relative", marginTop: 150}}>
                    {/* <div ref = { ref => {
                      new ProgressBar.SemiCircle(ref,{
                        strokeWidth: 6,
                        easing: 'easeInOut',
                        duration: 1400,
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        svgStyle: null,
                        from: {color: '#FFEA82'},
                        to: {color: '#ED6A5A'},
                        step: (state, bar) => {
                          bar.path.setAttribute('stroke', state.color);
                        }
                      }).animate(0.9);
                    }} style={{position: "absolute", width: "32vw", top: 15, left: "4vw"}}> */}
                    {/* </div> */}
                    <div style={{position:"absolute", top: 50, left: "10vw"}}>
                      <p style={{position:"absolute", fontSize: 15, top: -25, left: "6vw", fontWeight: 'bold'}}>90%</p>
                      <REACT style={{position:"relative", width: "14vw", zIndex: 1, marginLeft: "3vw"}}></REACT>
                      <div style={{fontSize: "0.5rem", marginLeft: "-6vw"}}>
                        React/React&nbsp;Native
                      </div>
                    </div>
                  </div>
                  <div style={{position: "relative", marginLeft: "45vw" }}>
                    {/* <div ref = { ref => {
                      new ProgressBar.SemiCircle(ref,{
                        strokeWidth: 6,
                        easing: 'easeInOut',
                        duration: 1400,
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        svgStyle: null,
                        from: {color: '#FFEA82'},
                        to: {color: '#ED6A5A'},
                        step: (state, bar) => {
                          bar.path.setAttribute('stroke', state.color);
                        }
                      }).animate(0.5);
                    }} style={{position: "absolute", width: "32vw", top: 15, right: "4vw"}}> */}
                    {/* </div> */}
                    <div style={{position:"absolute", top: 50, right: "9vw"}}>
                      <p style={{position:"absolute", fontSize: 15, top: -25,fontWeight: 'bold', marginLeft: 12}}>50%</p>
                      <Redux style={{width: "13vw", marginRight: 17}}></Redux>
                      <div style={{position: "absolute", right: "-3vw", fontSize: "0.5rem"}}>
                        Redux/Redux&nbsp;saga
                      </div>
                    </div>
                  </div>
                  <div style={{position: "relative", marginTop: 280}}>
                    {/* <div ref = { ref => {
                      new ProgressBar.SemiCircle(ref,{
                        strokeWidth: 6,
                        easing: 'easeInOut',
                        duration: 1400,
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        svgStyle: null,
                        from: {color: '#FFEA82'},
                        to: {color: '#ED6A5A'},
                        step: (state, bar) => {
                          bar.path.setAttribute('stroke', state.color);
                        }
                      }).animate(0.6);
                    }} style={{position: "absolute", width: "32vw", top: 15, left: "4vw"}}> */}
                    {/* </div> */}
                    <div style={{position:"absolute", top: 50, left: "10vw"}}>
                      <p style={{position:"absolute", fontSize: 15, top: -25, left: "6vw", fontWeight: 'bold'}}>60%</p>
                      <Expo style={{position:"relative", width: "13vw", zIndex: 1, marginLeft: "3vw", marginTop: "-3vw"}}></Expo>
                      <div style={{fontSize: "0.6rem", marginLeft: "5vw"}}>
                        Expo
                      </div>
                    </div>
                  </div>
                  <div style={{position: "relative", marginLeft: "45vw" }}>
                    {/* <div ref = { ref => {
                      new ProgressBar.SemiCircle(ref,{
                        strokeWidth: 6,
                        easing: 'easeInOut',
                        duration: 1400,
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        svgStyle: null,
                        from: {color: '#FFEA82'},
                        to: {color: '#ED6A5A'},
                        step: (state, bar) => {
                          bar.path.setAttribute('stroke', state.color);
                        }
                      }).animate(0.4);
                    }} style={{position: "absolute", width: "32vw", top: 15, right: "4vw"}}> */}
                    {/* </div> */}
                    <div style={{position:"absolute", top: 50, right: "9vw"}}>
                      <p style={{position:"absolute", fontSize: 15, top: -25,fontWeight: 'bold', marginLeft: 12}}>40%</p>
                      <Python style={{width: "13vw", marginRight: 17}}></Python>
                      <div style={{position: "absolute", right: "5vw", fontSize: "0.6rem"}}>
                        Python
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <FaPencilAlt style={{color: "#FFAB00",paddingBottom: 6,fontSize: 18, marginRight: 6}}></FaPencilAlt>
                    Education
                  </div>
                  <p style={{marginTop:5}}>都立武蔵野北高校(普通科)を卒業後、電気通信大学 情報理工学域に進学。B2からI類(情報系)に所属し、B3からメディア情報学プログラムに所属。2020年3月に卒業し、同年4月、大学院に進学。<br></br>卒業研究テーマは "休憩時の運動が集中力に与える影響" 。</p>
                  <div style={{fontSize: 20}}>
                    <RiCodeSSlashLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23, marginRight: 6}}></RiCodeSSlashLine>
                    Programming
                  </div>
                  <p style={{marginTop:5}}>大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。</p>
                  <p>B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。</p>
                  <div style={{fontSize: 20}}>
                    <RiUserHeartLine style={{color: "#FFAB00",paddingBottom: 6,fontSize: 23, marginRight: 6}}></RiUserHeartLine>
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
                {/* <div ref = { ref => {
                  new ProgressBar.Line(ref,{
                    strokeWidth: 6,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    svgStyle: {width: "100%", height: "100%"},
                    from: {color: '#FFEA82'},
                    to: {color: '#ED6A5A'},
                    step: (state, bar) => {
                      bar.path.setAttribute('stroke', state.color);
                    }
                  }).animate(0.8);
                }} style={{position: "absolute", width: "25%", left: "20%", marginTop: "2%"}}>
                </div> */}
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>HTML&CSS</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>80%</p>
                  <HTML style={{position:"relative", width: "10%", zIndex: 1, marginRight: -10}}></HTML>
                  <CSS style={{position:"relative", width:　"10%"}}></CSS>
                </div>
              </div>
              <div style={{position: "relative", top: "30%", left: "40%"}}>
                {/* <div ref = { ref => {
                  new ProgressBar.Line(ref,{
                    strokeWidth: 6,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    svgStyle: {width: "100%", height: "100%"},
                    from: {color: '#FFEA82'},
                    to: {color: '#ED6A5A'},
                    step: (state, bar) => {
                      bar.path.setAttribute('stroke', state.color);
                    }
                  }).animate(0.9);
                }} style={{position: "absolute", width: "25%", left: "20%", marginTop: "2%"}}>
                </div> */}
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>JavaScript</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>90%</p>
                  <Javascript style={{position:"relative", width:　"30%"}}></Javascript>
                </div>
              </div>
              <div style={{position: "relative", top: "50%"}}>
                {/* <div ref = { ref => {
                  new ProgressBar.Line(ref,{
                    strokeWidth: 6,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    svgStyle: {width: "100%", height: "100%"},
                    from: {color: '#FFEA82'},
                    to: {color: '#ED6A5A'},
                    step: (state, bar) => {
                      bar.path.setAttribute('stroke', state.color);
                    }
                  }).animate(0.9);
                }} style={{position: "absolute", width: "25%", left: "20%", marginTop: "2%"}}>
                </div> */}
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>React/React&nbsp;Native</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>90%</p>
                  <REACT style={{position:"relative", width: "30%", zIndex: 1}}></REACT>
                </div>
              </div>
              <div style={{position: "relative", top: "50%", left: "40%"}}>
                {/* <div ref = { ref => {
                  new ProgressBar.Line(ref,{
                    strokeWidth: 6,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    svgStyle: {width: "100%", height: "100%"},
                    from: {color: '#FFEA82'},
                    to: {color: '#ED6A5A'},
                    step: (state, bar) => {
                      bar.path.setAttribute('stroke', state.color);
                    }
                  }).animate(0.5);
                }} style={{position: "absolute", width: "25%", left: "20%", marginTop: "2%"}}>
                </div> */}
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>Redux/Redux&nbsp;saga</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>50%</p>
                  <Redux style={{position:"relative", width:　"30%"}}></Redux>
                </div>
              </div>
              <div style={{position: "relative", top: "70%"}}>
                {/* <div ref = { ref => {
                  new ProgressBar.Line(ref,{
                    strokeWidth: 6,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    svgStyle: {width: "100%", height: "100%"},
                    from: {color: '#FFEA82'},
                    to: {color: '#ED6A5A'},
                    step: (state, bar) => {
                      bar.path.setAttribute('stroke', state.color);
                    }
                  }).animate(0.6);
                }} style={{position: "absolute", width: "25%", left: "20%", marginTop: "2%"}}>
                </div> */}
                <div style={{position:"absolute", left: "13%"}}>
                  <p style={{position:"absolute", left: "7vw"}}>Expo</p>
                  <p style={{position:"absolute", fontSize: 30, marginTop: 0, left: "28vw", fontWeight: 'bold'}}>60%</p>
                  <Expo style={{position:"relative", width: "30%", zIndex: 1}}></Expo>
                </div>
              </div>
              <div style={{position: "relative", top: "70%", left: "40%"}}>
                {/* <div ref = { ref => {
                  new ProgressBar.Line(ref,{
                    strokeWidth: 6,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    svgStyle: {width: "100%", height: "100%"},
                    from: {color: '#FFEA82'},
                    to: {color: '#ED6A5A'},
                    step: (state, bar) => {
                      bar.path.setAttribute('stroke', state.color);
                    }
                  }).animate(0.4);
                }} style={{position: "absolute", width: "25%", left: "20%", marginTop: "2%"}}>
                </div> */}
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