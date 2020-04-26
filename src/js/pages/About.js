import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove, IoLogoPython } from "react-icons/io";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { GrReactjs, GrWordpress } from "react-icons/gr";
import { DiJqueryLogo, DiIllustrator, DiPhotoshop } from "react-icons/di";

import styles from '../../styles/styles.module.css';
import MyPic from '../components/images/about_pic.jpg';

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
            <div style={{width: "80%", position:"absolute", top: "35%", left: "10%"}}>
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
            <div style={{position: "absolute", top: "14%", left: "12%", fontWeight: 300}}>Skills</div>
            <div style={{position: "absolute", top: "20%", left: "10%"}}>
              <div style={{position: "absolute", fontSize: "0.9rem" }}>Front-end</div>
              <div style={{marginTop: "30%"}}>
                <TiHtml5></TiHtml5>
                <TiCss3></TiCss3>
                <DiJqueryLogo></DiJqueryLogo>
                <GrReactjs></GrReactjs>
                <GrWordpress></GrWordpress>
              </div>
            </div>
            <div>
              <div style={{position: "absolute", fontSize: "0.9rem", top: "60%", left: "10%"}}>Design, others</div>
            </div>
            <div style={{position: "absolute", top: "63%", left: "10%"}}>
            <div style={{marginTop: "30%"}}>
              <IoLogoPython></IoLogoPython>
              <DiIllustrator></DiIllustrator>
              <DiPhotoshop></DiPhotoshop>
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