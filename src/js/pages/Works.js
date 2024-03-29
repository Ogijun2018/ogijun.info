import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove } from "react-icons/io";

import Modal from "../components/Modal";
import PModal from "../components/PModal";
import Rodal from 'rodal';

import styles from '../../styles/works.module.css';
import 'rodal/lib/rodal.css';
import LabWeb_header from '../components/images/LabWeb_header.jpg';
import LabWeb_modal2 from '../components/images/LabWeb_modal2.jpg';
import slimline_header from '../components/images/slimline_top.jpg';
import slimline_modal2 from '../components/images/slimline_about.jpg';
import portfolio_header from '../components/images/portfolio_header.jpg';
import dekita_header from '../components/images/dekita_header.jpg';
import stopwatch_header from '../components/images/stopwatch_header.png';
import dekita_modal1 from '../components/images/dekita_modal1.jpg';
import portfolio_modal2 from '../components/images/portfolio_modal2.jpg';
import stopwatch_modal2 from '../components/images/stopwatch_modal2.jpg';
import VolWatch_header from '../components/images/VolumeWatch_header.jpg';
import VolWatch_modal2 from '../components/images/VolumeWatch_modal2.jpg';

export default class Works extends React.Component {
  state = {
    modalTitle: "",
    modalVisible: false,
    modalDesc: "",
    modalSkill: "",
    modalURL: "",
    modalPic: "",
  };

  openModal(title, contents){
    this.setState({
      modalTitle: title,
      modalVisible: true, 
      modalDesc: contents.desc,
      modalSkill: contents.skill, 
      modalURL: contents.url,
      modalPic: contents.pic,
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
    const labweb = {
      desc: "所属研究室である橋山研のWebサイトを刷新しました。前まではDrupalというCMSを使っていましたが、今回はRaspberry Pi4とnginx, PHP, Gravの組み合わせで超軽量サーバーを組み立ててみました。githubと連携し、githubとgit-ftpを利用することでCLI上で簡単にWebサイトの更新ができるようにしました。ラズパイを触ったのはほぼ初めてでしたが、いろいろな可能性を感じる体験ができました。",
      skill: "Raspberry Pi, nginx, git-ftp, grav",
      url: "http://www2.media.is.uec.ac.jp/",
      pic: [LabWeb_header, LabWeb_modal2]
    };

    const slimline = {
      desc: "VOYAGE GROUPのサマーインターンシップ'Treasure'にて作成したWebサービスです。4人チームで企画・設計・開発を行い、開発フェーズではフロントエンドを担当しました。初めてのチーム開発で、バックエンドとの情報の連携の難しさや楽しさ、一つのサービスを作り上げたことの達成感が得られました。インターン内評価ではUI/UX賞, ニーズ賞, グランプリを獲得し、インターンが終わった後も技育展に登壇するため追加開発を行いました。",
      skill: "Go, React, Figma, AWS",
      pic: [slimline_header, slimline_modal2]
    };

    const dekita = {
      desc: "インターンシップを始めて一番最初に作成したアプリケーションです。子供がお手伝いをしたときにこのDEKITA!スタンプを貯めていくことで、子供のお手伝いのモチベーションとなるようなアプリです。React NativeやJavaScriptの基礎を学びながら実際にアプリケーションをリリースできたことは、とてもよい経験になりました。このアプリ作成の経験を基に、現在はさらに複雑な構造のアプリ開発をしています。",
      skill: "React Native, Expo, Xcode, Android Studio, Git",
      url: "https://apps.apple.com/jp/app/dekita-%E3%81%A7%E3%81%8D%E3%81%9F/id1462854067",
      pic: [dekita_header, dekita_modal1]
    };

    const portfolio = {
      desc: "このWebページです。React, anime.js, CSSを使用し、ランディングページ+2ページの計3ページを作成しました。トップのロゴのアニメーションはsvgとanime.jsを組み合わせたもので、自分的にも可愛いアニメーションができたと思っています。そのほかにも画面遷移のアニメーションやナビゲーションバーなど、細部にもこだわれるだけこだわりました。まだまだやりたいことがたくさんあるので、これからも更新していこうと思っています。",
      skill: "React, anime.js, CSS, Illustrator, Webpack",
      pic: [portfolio_header, portfolio_modal2]
    };

    const stopwatch = {
      desc: "所属している陸上競技部にて、マネージャーさんがたくさんのストップウォッチを使い分けるのが難しいという問題を解決するために作ってみたストップウォッチのアプリです。陸上競技に特化した機能として、400mでラップをとることで選択した距離の推定記録を計算して表示します。音量ボタンでスタート/ストップを制御できるとより使いやすいと意見があったので、Swiftを使って一から作り直そうと考えています。",
      skill: "React Native, Expo, Xcode, moment.js",
      pic: [stopwatch_header, stopwatch_modal2],
    };

    const volwatch = {
      desc: "Swiftで作った初めてのアプリです。音量ボタンでスタート/ストップを制御できるようにした点に加え、ラップのテキストを簡単に出力できるようにしたりなどスマートフォンならではの機能をつけました。AppStoreにて公開中です。",
      skill: "Swift",
      url: "https://apps.apple.com/jp/app/volume-watch/id1554084257",
      pic: [VolWatch_header, VolWatch_modal2],
    };

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
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Lab Web", labweb)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={LabWeb_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Lab Web</p>
                      <div className={styles.pDate}>Nov 1, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("SlimLine", slimline)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={slimline_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>SlimLine</p>
                      <div className={styles.pDate}>Sep 26, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("DEKITA!", dekita)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>DEKITA!</p>
                      <div className={styles.pDate}>May 16, 2019</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Portfolio", portfolio)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Portfolio</p>
                      <div className={styles.pDate}>May 6, 2020</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("UECTF StopWatch", stopwatch)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>T&F StopWatch</p>
                      <div className={styles.pDate}>May 21, 2019</div>
                    </div>
                  </div>
                  <div className={styles.pWorksItem} onClick={() => {this.openModal("Volume Watch", volwatch)}}>
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={VolWatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Volume Watch</p>
                      <div className={styles.pDate}>Mar 21, 2021</div>
                    </div>
                  </div>
                </ul>
              </div>
              <Rodal animation="fade" duration={500} visible={this.state.modalVisible} onClose={this.closeModal.bind(this)} width={0} height={0} showCloseButton={false}>
                <div>
                <PModal title={this.state.modalTitle} desc={this.state.modalDesc} skill={this.state.modalSkill} url={this.state.modalURL} pic={this.state.modalPic} visible={this.state.modalVisible} onPressClose={() => {this.closeModal()}}></PModal>
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
                  <div className={styles.worksItem} onClick={() => {this.openModal("Lab Web", labweb)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={LabWeb_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Lab Web</p>
                      <div className={styles.date}>Nov 1, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("SlimLine", slimline)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={slimline_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>SlimLine</p>
                      <div className={styles.date}>Sep 26, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("DEKITA!", dekita)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>DEKITA!</p>
                      <div className={styles.date}>May 16, 2019</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("Portfolio", portfolio)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Portfolio</p>
                      <div className={styles.date}>May 6, 2020</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("UECTF StopWatch", stopwatch)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>T&F StopWatch</p>
                      <div className={styles.date}>May 21, 2019</div>
                    </div>
                  </div>
                  <div className={styles.worksItem} onClick={() => {this.openModal("Volume Watch", volwatch)}}>
                    <figure className={styles.figure}>
                      <img className={styles.image} src={VolWatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Volume Watch</p>
                      <div className={styles.date}>Feb 17, 2021</div>
                    </div>
                  </div>
                </ul>
              </div>
              <Rodal animation="fade" duration={500} visible={this.state.modalVisible} onClose={this.closeModal.bind(this)} showCloseButton={false} customStyles={{height: '100%', width: '100%', background: "rgba(0, 0, 0, 0.2)"}} showMask={false}>
                <div>
                <Modal visible={this.state.modalVisible} className="animated fadeIn" title={this.state.modalTitle} desc={this.state.modalDesc} skill={this.state.modalSkill} url={this.state.modalURL} pic={this.state.modalPic}  onPressClose={() => {this.closeModal()}}></Modal>
                </div>
              </Rodal>
            </div>
          </div>
      </MediaQuery>
      </div>
    );
  }
}