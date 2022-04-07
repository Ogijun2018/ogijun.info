import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { RiCodeSSlashLine, RiUserHeartLine } from "react-icons/ri";
import { ReactComponent as REACT } from '../components/images/react.svg';
import { ReactComponent as Swift } from '../components/images/swift.svg';
import { ReactComponent as Ruby } from '../components/images/ruby.svg';
import { ReactComponent as Illustrator } from '../components/images/illustrator.svg';

import styles from '../../styles/about.module.css';
import MyPic from '../components/images/about_mypic.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://use.typekit.net/urt8xoe.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <MediaQuery query="(max-width:767px)">
          <div style={{position:"absolute", height: "180%", width: "100%"}}>
            <div style={{position: "relative", top: "7%", paddingLeft: "4%"}}>
              <IoIosRemove style={{color: "#FFAB00", marginBottom: "3%"}}></IoIosRemove>
              About Me
            </div> 
            <div style={{position: "relative", top: "9%", paddingLeft: "14%"}}>
              <div className={styles.pMyName}>
                荻野 隼
              </div>
              <div style={{fontSize: 18}}>
                Jun Ogino
              </div>
            </div>

            <div style={{width: "80%",position:"relative",top: "10%",left: "10%"}}>
              <img src={MyPic} alt=""/>
            </div>
            <div style={{position: "relative", fontSize: "0.5rem", width: "80%", top: "12%", left:"10%"}}>
              <p>1998年1月26日生まれ、東京都出身。趣味は体を動かすこと。</p>
              <div style={{fontSize: 20, marginTop: -10}}>
                <FaPencilAlt className={styles.headerLogo1}></FaPencilAlt>
                Career
              </div>
              <p style={{marginTop:5}}>
                2016/03 都立武蔵野北高校(普通科)を卒業。
                <br></br>
                2016/04 電気通信大学 情報理工学域 I類 メディア情報学プログラムに入学。
                <br></br>
                2020/04 電気通信大学を卒業し、同大学院 情報理工学研究科 情報学専攻に入学。
                <br></br>
                2022/04 電気通信大学大学院を修了し、株式会社ZOZOに新卒入社。
              </p>
              <div style={{fontSize: 20}}>
                <RiCodeSSlashLine className={styles.headerLogo2}></RiCodeSSlashLine>
                Programming
              </div>
              <p style={{marginTop:5}}>
                大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。
                <br></br>
                B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、
                React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。
              </p>
              <div style={{fontSize: 20}}>
                <RiUserHeartLine className={styles.headerLogo2}></RiUserHeartLine>
                Hobby
              </div>
              <p style={{marginTop: 5}}>
                大学の陸上競技部に所属し、現在も選手として活動中。
                <br></br>
                2018年 第97回関東陸上競技大会 男子2部 十種競技 第6位入賞。
              </p>
              <p style={{fontSize: 18}}>Personal Best</p>
              <table className={styles.table}>
                <tbody>
                <tr>
                  <td>100m</td>
                  <td>11"36</td>
                </tr>
                <tr>
                  <td>走幅跳</td>
                  <td>7m14cm</td>
                </tr>
                <tr>
                  <td>走高跳</td>
                  <td>196cm</td>
                </tr>
                <tr>
                  <td>400m</td>
                  <td>50.49</td>
                </tr>
                <tr>
                  <td>110mH</td>
                  <td>15"38</td>
                </tr>
                <tr>
                  <td>1500m</td>
                  <td>4'28"19</td>
                </tr>
                <tr>
                  <td>十種競技</td>
                  <td>6121点</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div style={{position: "relative", top: "14%", paddingLeft: "5%"}}>
              <IoIosRemove style={{color: "#FFAB00", marginBottom: "3%"}}></IoIosRemove>
              Passion
            </div>
            <div style={{position: "relative", fontSize: "0.5rem", width: "80%", top: "14%", left:"10%"}}>
              <div style={{width: "100%", textAlign: "center", marginBottom: 10}}>
                <span style={{fontSize: "0.8rem", fontWeight:"bold"}}>- 神は細部に宿る -</span>
              </div>
              本当に素晴らしい技術やこだわりは目に見えにくい、またそういった見えないような部分でこそ作品の本質が決まる。この格言は、エンジニアリングにおいても同様であると考えています。
              ボタン一つ、小さな機能一つにおいても、デザインやインタラクションはユーザに対して影響を及ぼします。完成させるだけでなく、ユーザの視点に立ってどんな機能があったらいいか、また使いたいと思ってもらえるかを常に考えるようにしています。
            </div>
            
            <div style={{position: "relative", top: "16%", paddingLeft: "5%"}}>
              <IoIosRemove style={{color: "#FFAB00", marginBottom: "3%"}}></IoIosRemove>
              Skill set
            </div>
            <div className={styles.pSkillList}>
              <div className={styles.pSkillListContainer}>
                <div className={styles.pSkillInner}>
                  <div className={styles.pSkillTheme}>
                    <REACT className={styles.pIcon} />
                    Front End
                  </div>
                  <div className={styles.pSkillname}>
                    HTML / CSS / jQuery / React / Redux / Redux Saga / Vue / Webpack
                  </div>
                </div>
                <div className={styles.pSkillInner}>
                  <div className={styles.pSkillTheme}>
                    <Ruby className={styles.pIcon} />
                    Back End
                  </div>
                  <div className={styles.pSkillname}>
                    Ruby / Ruby on Rails / Python
                  </div>
                </div>
                <div className={styles.pSkillInner}>
                  <div className={styles.pSkillTheme}>
                    <Swift className={styles.pIcon} />
                    Mobile
                  </div>
                  <div className={styles.pSkillname}>
                    React Native / Expo / Swift
                  </div>
                </div>
                <div className={styles.pSkillInner}>
                  <div className={styles.pSkillTheme}>
                    <Illustrator className={styles.pIcon} />
                    Design
                  </div>
                  <div className={styles.pSkillname}>
                    figma / Illustrator / Photoshop / Blender
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
        <div className={styles.wholePage}>
          <div className={styles.AboutTop}>
            <div className={styles.Header}>
              <div className={styles.HeaderLine}>
                <IoIosRemove></IoIosRemove>
              </div>
              <div>About Me</div>
            </div>
            <div className={styles.leftContainer}>
              <div className={styles.MyName}>
                荻野 隼
                <div className={styles.MyNameEng}>
                  Jun Ogino
                </div>
              </div>
              <div className={styles.MyImageContainer}>
                <div>
                  <img src={MyPic} alt=""/>
                </div>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.rightInnerContainer}>
                <p>1998年1月26日生まれ、東京都出身。趣味は体を動かすこと。</p>
                <div className={styles.MyInfo}>
                  <FaPencilAlt className={styles.headerLogo}></FaPencilAlt>
                  Education
                </div>
                <p>都立武蔵野北高校(普通科)を卒業後、電気通信大学 情報理工学域に進学。B2からI類(情報系)に所属し、B3からメディア情報学プログラムに所属。2020年3月に卒業し、同年4月、大学院に進学。<br></br>卒業研究テーマは "休憩時の運動が集中力に与える影響" 。</p>
                <div className={styles.MyInfo}>
                  <RiCodeSSlashLine className={styles.headerLogo}></RiCodeSSlashLine>
                  Programming
                </div>
                <p>大学入学後、学習の一環でC, Java, JavaScript, pythonなどを学ぶ。<br></br>B3の冬、スキル不足を感じインターンシップを開始。JavaScriptの基礎を実務を通して学び、React Nativeを用いたネイティブアプリ開発、AR.jsを用いたARコンテンツの作成協力などに携わる。</p>
                <div className={styles.MyInfo}>
                  <RiUserHeartLine className={styles.headerLogo}></RiUserHeartLine>
                  Hobby
                </div>
                <p>大学の陸上競技部に所属し、現在も選手として活動中。<br></br>2018年 第97回関東陸上競技大会<br></br>男子2部 十種競技 第6位入賞。</p>
              </div>
            </div>
          </div>
        <div className={styles.Page}>
          <div className={styles.Header}>
            <div className={styles.HeaderLine}>
              <IoIosRemove></IoIosRemove>
            </div>
            <div>Passion</div>
          </div>
          <div className={styles.box}>
            <div className={styles.QuoteContainer}>
              <span className={styles.Quote}>- 神は細部に宿る -</span>
            </div>
            <div className={styles.sentenceContainer}>
              本当に素晴らしい技術やこだわりは目に見えにくい、またそういった見えないような部分でこそ作品の本質が決まる。この格言は、エンジニアリングにおいても同様であると考えています。
              ボタン一つ、小さな機能一つにおいても、デザインやインタラクションはユーザに対して影響を及ぼします。完成させるだけでなく、ユーザの視点に立ってどんな機能があったらいいか、また使いたいと思ってもらえるかを常に考えるようにしています。
            </div>
          </div>
        </div>
        <div className={styles.Page}>
          <div className={styles.Header}>
            <div className={styles.HeaderLine}>
              <IoIosRemove></IoIosRemove>
            </div>
            <div>Skillset</div>
          </div>
          <div className={styles.SkillListContainer}>
            <div className={styles.SkillInner}>
              <div className={styles.SkillTheme}>
                <REACT className={styles.Icon}></REACT>
                <p>Front-end</p>
              </div>
              <div className={styles.Skillname}>
                HTML5 / CSS3 / jQuery / React / Redux / Redux Saga / Vue / Webpack
              </div>
            </div>
            <div className={styles.SkillInner}>
              <div className={styles.SkillTheme}>
                <Ruby className={styles.Icon}></Ruby>
                <p className={styles.Theme}>Back-end</p>
              </div>
              <div className={styles.Skillname}>
                Ruby / Ruby on Rails / python
              </div>
            </div>
            <div style={{width: "100%"}}></div>
            <div className={styles.SkillInner}>
              <div className={styles.SkillTheme}>
                <Swift className={styles.Icon}></Swift>
                <p>Mobile</p>
              </div>
              <div className={styles.Skillname}>
                React Native / Expo / Swift
              </div>
            </div>
            <div className={styles.SkillInner}>
              <div className={styles.SkillTheme}>
                <Illustrator className={styles.Icon}></Illustrator>
                <p>Design</p>
              </div>
              <div className={styles.Skillname}>
                figma / Illustrator / Photoshop
              </div>
            </div>
          </div>
        </div>
      </div>
        </MediaQuery>
      </div>
    );
  }
}