import React from "react";
import styles from "../../styles/modalStyle.module.css";
import { Link } from "react-router-dom";
import { IoIosRemove } from "react-icons/io";
import dekita_pic from "../components/images/dekita_modal.png";

export default class Page extends React.Component {
    render() {
      return(
        <div className={styles.modalOutSide}>
          <div onClick={this.props.onPressClose} className={styles.modalContainer}>
            <div className={styles.right}>
              <div className={styles.title}>{this.props.title}</div>
              <hr className={styles.bar} color="black"></hr>
              <div className={styles.subtitle}>
                <IoIosRemove style={{color: "#FFAB00"}}></IoIosRemove>Description
              </div>
              <div className={styles.sentence}>
                {this.props.description}
              </div>
              <div className={styles.subtitle}>
                <IoIosRemove style={{color: "#FFAB00"}}></IoIosRemove>Skill
              </div>
              <div className={styles.sentence}>
                {this.props.skill}
              </div>
              <div className={styles.subtitle}>
                <IoIosRemove style={{color: "#FFAB00"}}></IoIosRemove>Demo
              </div>
              <div className={styles.sentence}>
                <a style={{color: "#262626"}} href={this.props.demoURL}>{this.props.demoURL}</a>
              </div>

            </div>
            {/* <div className={styles.left}>
                <img src={dekita_pic} alt=""/>
            </div> */}
          </div>
        </div>
      );
    }
}