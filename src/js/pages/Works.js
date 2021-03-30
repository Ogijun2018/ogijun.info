import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove } from "react-icons/io";

import Modal from "../components/Modal";
import PModal from "../components/PModal";
import Rodal from 'rodal';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

import styles from '../../styles/works.module.css';
import 'rodal/lib/rodal.css';
import LabWeb_header from '../components/images/LabWeb_header.jpg';
import LabWeb_modal2 from '../components/images/LabWeb_modal2.jpg';
import slimline_header from '../components/images/slimline_top.jpg';
import slimline_modal2 from '../components/images/slimline_about.jpg';
import portfolio_header from '../components/images/portfolio_header.jpg';
import dekita_header from '../components/images/dekita_header.jpg';
import stopwatch_header from '../components/images/stopwatch_header.png';
import mylogo_header from '../components/images/mylogo_header.png';
import UECTFlogo_header from '../components/images/UECTFlogo_header.jpg';
import graduate_thesis_header from '../components/images/graduate_thesis_header.jpg';
import graduate_thesis_modal1 from '../components/images/graduate_thesis_modal1.jpg';
import dekita_modal1 from '../components/images/dekita_modal1.jpg';
import portfolio_modal2 from '../components/images/portfolio_modal2.jpg';
import portfolio_modal3 from '../components/images/portfolio_modal3.jpg';
import stopwatch_modal2 from '../components/images/stopwatch_modal2.jpg';
import mylogo_modal1 from '../components/images/mylogo_modal1.png';
import UECTFlogo_modal1 from '../components/images/UECTFlogo_modal1.jpg';
import UECTFlogo_modal2 from '../components/images/UECTFlogo_modal2.jpg';

export default class Works extends React.Component {
  state = {
    modalTitle: "",
    modalVisible: false,
    modalDescription: "",
    modalSkill: "",
    modalDemoURL: "",
    modalPic: "",
  };

  openModal(title, description, skill, demoURL, pic){
    this.setState({
      modalTitle: title,
      modalVisible: true, 
      modalDescription: description, 
      modalSkill: skill, 
      modalDemoURL: demoURL,
      modalPic: pic,
    });
    document.body.setAttribute('style', 'overflow: hidden;');
  }

  closeModal(){
    this.setState({
      modalTitle: "",
      modalVisible: false,
      modalDescription: "",
      modalSkill: "",
      modalDemoURL: "",
      modalPic: "",
    });
    document.body.removeAttribute('style', 'overflow: hidden;');
  }

  render() {
    const LabWebDescription = "所属している研究室である, 橋山研究室のWebサイトを刷新しました。前まではDrupalというCMSを使っていましたが、今回はRaspberry Pi4とnginx, PHP, Gravの組み合わせで超軽量サーバーを組み立ててみました。githubと連携し、github経由で記事の更新をマージしたら自動的にテストが走り、更新される仕組みを作ったことで簡単なWebサイトの更新が可能になりました。ラズパイを触ったのはほぼ初めてでしたが、いろいろな可能性を感じる体験ができました。";
    const LabWebSkill = "Raspberry Pi, nginx, deploy bot, github classroom, grav";
    const LabWebDemoURL = "http://www2.media.is.uec.ac.jp/";
    const LabWebPic = [LabWeb_header, LabWeb_modal2];
    const SlimLineDescription = "VOYAGE GROUPのサマーインターンシップ'Treasure'にて作成したWebサービスです。4人チームで企画・設計・開発を行い、開発フェーズではフロントエンドを担当しました。初めてのチーム開発で、バックエンドとの情報の連携の難しさや楽しさ、一つのサービスを作り上げたことの達成感が得られました。インターン内評価ではUI/UX賞, ニーズ賞, グランプリを獲得し、インターンが終わった後も技育展に登壇するため追加開発を行いました。";
    const SlimLineSkill = "Go, React, Figma";
    const SlimLinePic = [slimline_header, slimline_modal2];
    const DekitaDescription = "インターンシップを始めて一番最初に作成したアプリケーションです。子供がお手伝いをしたときにこのDEKITA!スタンプを貯めていくことで、子供のお手伝いのモチベーションとなるようなアプリです。React NativeやJavaScriptの基礎を学びながら実際にアプリケーションをリリースできたことは、とてもよい経験になりました。このアプリ作成の経験を基に、現在はさらに複雑な構造のアプリ開発をしています。";
    const DekitaSkill = "React Native, Expo, Xcode, Android Studio, Git";
    const DekitaDemoURL = "https://apps.apple.com/jp/app/dekita-%E3%81%A7%E3%81%8D%E3%81%9F/id1462854067";
    const DekitaPic = [dekita_header, dekita_modal1];
    const PortfolioDescription = "このWebページです。React, anime.js, CSSを使用し、ランディングページ+2ページの計3ページを作成しました。トップのロゴのアニメーションはsvgとanime.jsを組み合わせたもので、自分的にも可愛いアニメーションができたと思っています。そのほかにも画面遷移のアニメーションやナビゲーションバーなど、細部にもこだわれるだけこだわりました。まだまだやりたいことがたくさんあるので、これからも更新していこうと思っています。";
    const PortfolioSkill = "React.js, anime.js, CSS, Git, Illustrator, Webpack";
    const PortfolioPic = [portfolio_header, portfolio_modal2, portfolio_modal3];
    const StopWatchDescription = "所属している陸上競技部にて、マネージャーさんがたくさんのストップウォッチを使い分けるのが難しいという問題を解決するために作ってみたストップウォッチのアプリです。陸上競技に特化した機能として、400mでラップをとることで選択した距離の推定記録を計算して表示します。音量ボタンでスタート/ストップを制御できるとより使いやすいと意見があったので、Swiftを使って一から作り直そうと考えています。";
    const StopWatchSkill = "React Native, Expo, Xcode, moment.js";
    const StopWatchPic = [stopwatch_header, stopwatch_modal2];
    const MyLogoDescription = "自分のロゴが欲しい！というかねてからの思いを、ついに実現しました。デザインの勉強はまだまだ不足していますが、満足できるデザインになったと思っています。トップ画面のアニメーションはこのロゴのsvgをanime.jsを使って動かしています。";
    const MyLogoSkill = "Illustrator";
    const MyLogoPic = [mylogo_modal1, portfolio_header];
    const UECTFLogoDescription = "所属している電気通信大学陸上競技部、通称UECTFのロゴです。電気通信大学のロゴを踏襲しながらもオリジナルさのある背景にし、一目で電通大とわかるようなロゴにしました。現在は部活のTwitterアイコンやSlackのワークスペースアイコンで使われています。こだわった点として、後ろのグラデーションと球体は黄金比を用いたデザインにしました。";
    const UECTFSkill = "Illustrator";
    const UECTFDemoURL = "https://twitter.com/uectf";
    const UECTFPic = [UECTFlogo_modal1, UECTFlogo_modal2];
    const GraduateThesisDescription = "2020年2月に発表した学部生時代の卒業論文です。集中力が低下する時、生体情報が変化することを利用し、休憩時に運動をすることで生体情報の変化を読み取り、運動をした方が集中力があがるという仮定を基に実験をしました。結果は有意ではなかったものの実際に課題の成績の向上がみられました。データ解析にpythonを使用したり、生体情報を取得するためにiPhoneにアプリを作成したりしました。";
    const GraduateThesisSkill = "Python, Swift, latex";
    const GraduateThesisPic = [graduate_thesis_header, graduate_thesis_modal1];

    return (
      <div>
      <ScrollToTopOnMount/>
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
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Lab Web", LabWebDescription, LabWebSkill, LabWebDemoURL, LabWebPic)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={LabWeb_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Lab Web</p>
                      <div className={styles.pDate}>Nov 1, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("SlimLine", SlimLineDescription, SlimLineSkill, "", SlimLinePic)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={slimline_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>SlimLine</p>
                      <div className={styles.pDate}>Sep 26, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("DEKITA!", DekitaDescription, DekitaSkill, DekitaDemoURL, DekitaPic)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>DEKITA!</p>
                      <div className={styles.pDate}>May 16, 2019</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Portfolio", PortfolioDescription, PortfolioSkill, "", PortfolioPic)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Portfolio</p>
                      <div className={styles.pDate}>May 6, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("UECTF StopWatch", StopWatchDescription, StopWatchSkill, "", StopWatchPic)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>T&F StopWatch</p>
                      <div className={styles.pDate}>May 21, 2019</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("My Logo", MyLogoDescription, MyLogoSkill, "", MyLogoPic)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={mylogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>My Logo</p>
                      <div className={styles.pDate}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("UECTF Logo", UECTFLogoDescription, UECTFSkill, UECTFDemoURL, UECTFPic)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={UECTFlogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>UECTF Logo</p>
                      <div className={styles.pDate}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Graduate thesis", GraduateThesisDescription, GraduateThesisSkill, "", GraduateThesisPic)}}>
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
              <Rodal animation="fade" duration={500} visible={this.state.modalVisible} onClose={this.closeModal.bind(this)} width={0} height={0} showCloseButton={false}>
                <div>
                <PModal title={this.state.modalTitle} description={this.state.modalDescription} skill={this.state.modalSkill} demoURL={this.state.modalDemoURL} pic={this.state.modalPic} visible={this.state.modalVisible} onPressClose={() => {this.closeModal()}}></PModal>
                </div>
              </Rodal>
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
                <div className={styles.worksItem} onClick={() => {this.openModal("Lab Web", LabWebDescription, LabWebSkill, LabWebDemoURL, LabWebPic)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={LabWeb_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Lab Web</p>
                      <div className={styles.date}>Nov 1, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("SlimLine", SlimLineDescription, SlimLineSkill, "", SlimLinePic)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={slimline_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>SlimLine</p>
                      <div className={styles.date}>Sep 26, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("DEKITA!", DekitaDescription, DekitaSkill, DekitaDemoURL, DekitaPic)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>DEKITA!</p>
                      <div className={styles.date}>May 16, 2019</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("Portfolio", PortfolioDescription, PortfolioSkill, "", PortfolioPic)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Portfolio</p>
                      <div className={styles.date}>May 6, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("UECTF StopWatch", StopWatchDescription, StopWatchSkill, "", StopWatchPic)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>T&F StopWatch</p>
                      <div className={styles.date}>May 21, 2019</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("My Logo", MyLogoDescription, MyLogoSkill, "", MyLogoPic)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={mylogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>My Logo</p>
                      <div className={styles.date}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("UECTF Logo", UECTFLogoDescription, UECTFSkill, UECTFDemoURL, UECTFPic)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={UECTFlogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>UECTF Logo</p>
                      <div className={styles.date}>Mar 29, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("Graduate thesis", GraduateThesisDescription, GraduateThesisSkill, "", GraduateThesisPic)}}>
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
              <Rodal animation="fade" duration={500} visible={this.state.modalVisible} onClose={this.closeModal.bind(this)} width={"80%"} height={"80%"} showCloseButton={false} customStyles={{background: "rgba(0, 0, 0, 0.2)"}} showMask={false}>
                <div>
                <Modal visible={this.state.modalVisible} className="animated fadeIn" title={this.state.modalTitle} description={this.state.modalDescription} skill={this.state.modalSkill} demoURL={this.state.modalDemoURL} pic={this.state.modalPic}  onPressClose={() => {this.closeModal()}}></Modal>
                </div>
              </Rodal>
            </div>
          </div>
      </MediaQuery>
      </div>
    );
  }
}