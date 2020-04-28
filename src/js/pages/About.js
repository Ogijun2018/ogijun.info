import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove} from "react-icons/io";
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
            <IoIosRemove style={{position: "absolute", color: "#FFAB00", top: "15%", left: "5%"}}></IoIosRemove>
            <div style={{position: "absolute", top: "14%", left: "12%", fontWeight: 300}}>About Me</div>
            <div>
              <div style={{fontSize: 25, fontFamily: "heisei-kaku-gothic-std, sans-serif", fontWeight: 600, fontStyle: "normal", position: "absolute", top: "23%", left: "13%"}}>荻野 隼</div>
              <div style={{fontSize: 15, position: "absolute", top: "28%", left: "13%"}}>Jun Ogino</div>
            </div>
            <div style={{width: "80%",position:"absolute",top: "35%",left: "10%"}}>
              <img src={MyPic} alt=""/>
            </div>
            <div>
              <div style={{position: "absolute", fontSize: "0.5rem", width: "80%", top: "70%", left:"10%"}}>
                東京都出身、1998年生まれ。都立普通科高校を卒業後、電気通信大学に進学。情報学を専攻し、2020年3月に大学院に進学。2018年よりフロントエンドエンジニアとしてインターンシップを始め、アプリ開発やWebサイト制作に携わる。
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Page}>
          <div className={styles.innerPage}>
            <IoIosRemove style={{position: "absolute", color: "#FFAB00", top: "15%", left: "5%"}}></IoIosRemove>
            <div style={{position: "absolute", top: "14%", left: "12%", fontWeight: 300}}>Skill set</div>
              <div style={{position: "absolute", top: "22%", left: "10%"}}>
                <HTML style={{position:"relative", width: 40, zIndex: 1, marginRight: -10}}></HTML>
                <CSS style={{position:"relative", width:40}}></CSS>
                <div style={{fontSize: "0.5rem", }}>
                  HTML&CSS
                </div>
              </div>
              <div style={{position: "absolute", top: "35%", left: "15%"}}>
                <Javascript style={{position:"relative", width: 40, zIndex: 1}}></Javascript>
                <div style={{fontSize: "0.5rem"}}>
                  Javascript
                </div>
              </div>
              <div style={{position: "absolute", top: "47%", left: "7%"}}>
                <REACT style={{position:"relative", width: 40, marginLeft: 30,}}></REACT>
                <div style={{fontSize: "0.5rem"}}>
                  React, React Native
                </div>
              </div>
              <div style={{position: "absolute", top: "58%", left: "15%"}}>
                <Redux style={{position:"relative", width: 40, zIndex: 1}}></Redux>
                <div style={{fontSize: "0.5rem"}}>
                  Redux
                </div>
              </div>
              <div style={{position: "absolute", top: "70%", left: "15%"}}>
                <Expo style={{position:"relative", width: 40, zIndex: 1}}></Expo>
                <div style={{fontSize: "0.5rem"}}>
                  Expo
                </div>
              </div>
              <div style={{position: "absolute", top: "83%", left: "15%"}}>
                <Python style={{position:"relative", width: 40, zIndex: 1}}></Python>
                <div style={{fontSize: "0.5rem"}}>
                  python
                </div>
              </div>
          </div>
        </div>
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
        </div>
        </MediaQuery>
      </div>
    );
  }
}