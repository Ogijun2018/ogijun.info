import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove } from "react-icons/io";

import Modal from "../components/Modal";
import PModal from "../components/PModal";

import styles from '../../styles/worksStyles.module.css';
import portfolio_header from '../components/images/portfolio_header.png';
import dekita_header from '../components/images/dekita_header.png';
import stopwatch_header from '../components/images/stopwatch_header.png';
import mylogo_header from '../components/images/mylogo_header.png';
import UECTFlogo_header from '../components/images/UECTFlogo_header.png';
import graduate_thesis_header from '../components/images/graduate_thesis_header.png';
import dekita_pic from '../components/images/dekita_modal.png';

export default class Works extends React.Component {
  state = {
    modalTitle: "",
    modalVisible: false,
    modalDescription: "",
    modalSkill: "",
    modalDemoURL: "",
  };

  openModal(title, description, skill, demoURL, pic){
    this.setState({
      modalTitle: title,
      modalVisible: true, 
      modalDescription: description, 
      modalSkill: skill, 
      modalDemoURL: demoURL,
    });
  }

  closeModal(){
    this.setState({
      modalTitle: "",
      modalVisible: false,
      modalDescription: "",
      modalSkill: "",
      modalDemoURL: "",
    });
  }

  render() {
    const DekitaDescription = "インターンシップを始めて一番最初に作成したアプリケーションです。子供がお手伝いをしたときにこのDEKITA!スタンプを貯めていくことで、子供のお手伝いのモチベーションとなるようなアプリです。React NativeやJavaScriptの基礎を学びながら実際にアプリケーションをリリースできたことは、とてもよい経験になりました。このアプリ作成の経験を基に、現在はさらに複雑な構造のアプリ開発をしています。";
    const DekitaSkill = "React Native, Expo, Xcode, Android Studio, Git";
    const DekitaDemoURL = "https://apps.apple.com/jp/app/dekita-%E3%81%A7%E3%81%8D%E3%81%9F/id1462854067";
    const PortfolioDescription = "このWebページです。React, anime.js, CSSを使用し、ランディングページ+2ページの計3ページを作成しました。トップのロゴのアニメーションはsvgとanime.jsを組み合わせたもので、自分的にも可愛いアニメーションができたと思っています。そのほかにも画面遷移のアニメーションやナビゲーションバーなど、細部にもこだわれるだけこだわりました。まだまだやりたいことがたくさんあるので、これからも更新していこうと思っています。";
    const PortfolioSkill = "React.js, anime.js, CSS, Git, Illustrator, Webpack";
    const StopWatchDescription = "所属している陸上競技部にて、マネージャーさんがたくさんのストップウォッチを使い分けるのが難しいという問題を解決するために作ってみたストップウォッチのアプリです。陸上競技に特化した機能として、400mでラップをとることで選択した距離の推定記録を計算して表示します。音量ボタンでスタート/ストップを制御できるとより使いやすいと意見があったので、Swiftを使って一から作り直そうと考えています。";
    const StopWatchSkill = "React Native, Expo, Xcode, moment.js";
    const MyLogoDescription = "自分のロゴが欲しい！というかねてからの思いを、ついに実現しました。デザインの勉強はまだまだ不足していますが、満足できるデザインになったと思っています。トップ画面のアニメーションはこのロゴのsvgをanime.jsを使って動かしています。";
    const MyLogoSkill = "Illustrator";
    const UECTFLogoDescription = "所属している電気通信大学陸上競技部、通称UECTFのロゴです。電気通信大学のロゴを踏襲しながらもオリジナルさのある背景にし、一目で電通大とわかるようなロゴにしました。現在は部活のTwitterアイコンやSlackのワークスペースアイコンで使われています。こだわった点として、後ろのグラデーションと球体は黄金比を用いたデザインにしました。";
    const UECTFSkill = "Illustrator";
    const UECTFDemoURL = "https://twitter.com/uectf";
    const GraduateThesisDescription = "2020年2月に発表した学部生時代の卒業論文です。集中力が低下する時、生体情報が変化することを利用し、休憩時に運動をすることで生体情報の変化を読み取り、運動をした方が集中力があがるという仮定を基に実験をしました。結果は有意ではなかったものの実際に課題の成績の向上がみられました。データ解析にpythonをしようしたり、生体情報を取得するためにiPhoneにアプリを作成したりしました。";
    const GraduateThesisSkill = "Python, Swift, latex";

    return (
      <div>
      <link rel="stylesheet" href="https://use.typekit.net/urt8xoe.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <MediaQuery query="(max-width:767px)">
      <div className={styles.Page}>
            <div className={styles.pWorksWrapper}>
              <div style={{position: "relative", paddingLeft: "4%", fontWeight: 400}}>
                <IoIosRemove style={{color: "#FFAB00", paddingBottom: 10}}></IoIosRemove>
                My Works
              </div>
              <div className={styles.pPanel}>
                <ul className={styles.pWorksList}>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("DEKITA!", DekitaDescription, DekitaSkill, DekitaDemoURL)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>DEKITA!</p>
                      <div className={styles.pDate}>May 16, 2019</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Portfolio", PortfolioDescription, PortfolioSkill)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Portfolio</p>
                      <div className={styles.pDate}>May 6, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("UECTF StopWatch", StopWatchDescription, StopWatchSkill)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>T&F StopWatch</p>
                      <div className={styles.pDate}>May 21, 2019</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("My Logo", MyLogoDescription, MyLogoSkill)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={mylogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>My Logo</p>
                      <div className={styles.pDate}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("UECTF Logo", UECTFLogoDescription, UECTFSkill, UECTFDemoURL)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={UECTFlogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>UECTF Logo</p>
                      <div className={styles.pDate}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Graduate thesis", GraduateThesisDescription, GraduateThesisSkill)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={graduate_thesis_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Graduate thesis</p>
                      <div className={styles.pDate}>Feb 14, 2020</div>
                    </div>
                  </div>
                </ul>
              </div>
              {this.state.modalVisible ? <PModal title={this.state.modalTitle} description={this.state.modalDescription} skill={this.state.modalSkill} demoURL={this.state.modalDemoURL} pic={this.state.modalPic} visible={this.state.modalVisible} onPressClose={() => {this.closeModal()}}></PModal> : null}
            </div>
          </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
          <div className={styles.Page}>
            <div className={styles.worksWrapper}>
              <div style={{position: "relative", top: "4%", paddingLeft: "4%", fontWeight: 500,fontSize: 40}}>
                <IoIosRemove style={{color: "#FFAB00", paddingBottom: 10}}></IoIosRemove>
                My Works
              </div>
              <div className={styles.panel}>
                <ul className={styles.worksList}>
                  <div className={styles.worksItem} onClick={() => {this.openModal("DEKITA!", DekitaDescription, DekitaSkill, DekitaDemoURL)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>DEKITA!</p>
                      <div className={styles.date}>May 16, 2019</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("Portfolio", PortfolioDescription, PortfolioSkill)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Portfolio</p>
                      <div className={styles.date}>May 6, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("UECTF StopWatch", StopWatchDescription, StopWatchSkill)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>T&F StopWatch</p>
                      <div className={styles.date}>May 21, 2019</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("My Logo", MyLogoDescription, MyLogoSkill)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={mylogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>My Logo</p>
                      <div className={styles.date}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("UECTF Logo", UECTFLogoDescription, UECTFSkill, UECTFDemoURL)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={UECTFlogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>UECTF Logo</p>
                      <div className={styles.date}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("Graduate thesis", GraduateThesisDescription, GraduateThesisSkill)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={graduate_thesis_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Graduate thesis</p>
                      <div className={styles.date}>Feb 14, 2020</div>
                    </div>
                  </div>
                </ul>
              </div>
              {this.state.modalVisible ? <Modal title={this.state.modalTitle} description={this.state.modalDescription} skill={this.state.modalSkill} demoURL={this.state.modalDemoURL} pic={this.state.modalPic} visible={this.state.modalVisible} onPressClose={() => {this.closeModal()}}></Modal> : null}
            </div>
          </div>
      </MediaQuery>
      </div>
    );
  }
}