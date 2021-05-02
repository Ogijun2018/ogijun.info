import React from "react";
import styles from "../../styles/modal.module.css";
import { IoIosRemove } from "react-icons/io";
import { GrClose } from "react-icons/gr";

export default class Page extends React.Component {
    render() {
      return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
        <div className={styles.pCloseButton} onClick={this.props.onPressClose}>
          <GrClose></GrClose>
        </div>
        <div className={styles.pModalOutSide}>
          <div className={styles.pModalContainer}>
            <div className={styles.scroll}>
              <div className={styles.pTitle}>{this.props.title}</div>
              <hr className={styles.pBar} color="black"></hr>
              <div className={styles.pic}>
                <div className={styles.pCp_cssslider}>
                  <input type="radio" name="cp_switch" id="photo1" defaultChecked={true}/>
                  <label htmlFor="photo1"><img src={this.props.pic[0]} alt=""/></label>
                  <img src={this.props.pic[0]} alt=""/>
                  <input type="radio" name="cp_switch" id="photo2"/>
                  <label htmlFor="photo2"><img src={this.props.pic[1]} alt=""/></label>
                  <img src={this.props.pic[1]} alt=""/>
                </div>
              </div>
              <div className={styles.pSubtitle}>
                <IoIosRemove style={{color: "#FFAB00"}}></IoIosRemove>Description
              </div>
              <div className={styles.pSentence}>
                {this.props.desc}
              </div>
              <div className={styles.pSubtitle}>
                <IoIosRemove style={{color: "#FFAB00"}}></IoIosRemove>Skill
              </div>
              <div className={styles.pSentence}>
                {this.props.skill}
              </div>
              <div className={styles.pSubtitle}>
                <IoIosRemove style={{color: "#FFAB00"}}></IoIosRemove>Demo
              </div>
              <div className={styles.pSentence}>
                {this.props.url ? 
                <a style={{color: "#262626"}} href={this.props.url}>{this.props.url}</a>
                :
                ""
                }
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
}