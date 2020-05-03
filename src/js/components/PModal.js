import React from "react";
import styles from "../../styles/modalStyle.module.css";
import { Link } from "react-router-dom";
import { IoIosRemove } from "react-icons/io";
import dekita_pic from "../components/images/dekita_modal.png";

export default class Page extends React.Component {
    render() {
      return(
        <div className={styles.pModalOutSide}>
          <div onClick={this.props.onPressClose} className={styles.pModalContainer}>
            <div className={styles.pRight}>
              <div className={styles.pTitle}>{this.props.title}</div>
              <hr className={styles.pBar} color="black"></hr>
              <div className={styles.pSubtitle}>
                <IoIosRemove style={{color: "#FFAB00"}}></IoIosRemove>Description
              </div>
              <div className={styles.pSentence}>
                {this.props.description}
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
                <a style={{color: "#262626"}} href={this.props.demoURL}>{this.props.demoURL}</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
}