import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove } from "react-icons/io";

import styles from '../../styles/worksStyles.module.css';
import portfolio_header from '../components/images/portfolio_header.png';
import dekita_header from '../components/images/dekita_header.png';
import stopwatch_header from '../components/images/stopwatch_header.png';
import mylogo_header from '../components/images/mylogo_header.png';
import UECTFlogo_header from '../components/images/UECTFlogo_header.png';
import graduate_thesis_header from '../components/images/graduate_thesis_header.png';

export default class Works extends React.Component {
  render() {
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
                  <a className={styles.pWorksItem} href="/works/1">
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>DEKITA!</p>
                      <div className={styles.pDate}>May 16, 2019</div>
                    </div>
                  </a>
                  <a className={styles.pWorksItem} href="/works/2">
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Portfolio</p>
                      <div className={styles.pDate}>May 6, 2020</div>
                    </div>
                  </a>
                  <a className={styles.pWorksItem} href="/works/3">
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>T&F StopWatch</p>
                      <div className={styles.pDate}>May 21, 2019</div>
                    </div>
                  </a>
                  <a className={styles.pWorksItem} href="/works/4">
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={mylogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>My Logo</p>
                      <div className={styles.pDate}>Mar 29, 2020</div>
                    </div>
                  </a>
                  <a className={styles.pWorksItem} href="/works/5">
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={UECTFlogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>UECTF Logo</p>
                      <div className={styles.pDate}>Mar 29, 2020</div>
                    </div>
                  </a>
                  <a className={styles.pWorksItem} href="/works/6">
                    <figure className={styles.pFigure}>
                      <img className={styles.image} src={graduate_thesis_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.pName}>Graduate thesis</p>
                      <div className={styles.pDate}>Feb 14, 2020</div>
                    </div>
                  </a>
                </ul>
              </div>
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
                  <a className={styles.worksItem} href="/works/1">
                    <figure className={styles.figure}>
                      <img className={styles.image} src={dekita_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>DEKITA!</p>
                      <div className={styles.date}>May 16, 2019</div>
                    </div>
                  </a>
                  <a className={styles.worksItem} href="/works/2">
                    <figure className={styles.figure}>
                      <img className={styles.image} src={portfolio_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Portfolio</p>
                      <div className={styles.date}>May 6, 2020</div>
                    </div>
                  </a>
                  <a className={styles.worksItem} href="/works/3">
                    <figure className={styles.figure}>
                      <img className={styles.image} src={stopwatch_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>T&F StopWatch</p>
                      <div className={styles.date}>May 21, 2019</div>
                    </div>
                  </a>
                  <a className={styles.worksItem} href="/works/4">
                    <figure className={styles.figure}>
                      <img className={styles.image} src={mylogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>My Logo</p>
                      <div className={styles.date}>Mar 29, 2020</div>
                    </div>
                  </a>
                  <a className={styles.worksItem} href="/works/5">
                    <figure className={styles.figure}>
                      <img className={styles.image} src={UECTFlogo_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>UECTF Logo</p>
                      <div className={styles.date}>Mar 29, 2020</div>
                    </div>
                  </a>
                  <a className={styles.worksItem} href="/works/6">
                    <figure className={styles.figure}>
                      <img className={styles.image} src={graduate_thesis_header} alt=""/>
                    </figure>
                    <div className={styles.textarea}>
                      <p className={styles.name}>Graduate thesis</p>
                      <div className={styles.date}>Feb 14, 2020</div>
                    </div>
                  </a>
                </ul>
              </div>
            </div>
          </div>
      </MediaQuery>
      </div>
    );
  }
}