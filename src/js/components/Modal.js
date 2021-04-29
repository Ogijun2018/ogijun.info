import React from "react";
import styles from "../../styles/modal.module.css";
import { IoIosRemove } from "react-icons/io";
import { GrClose } from "react-icons/gr";

export default class Page extends React.Component {
    render() {
      return(
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
          <div className={styles.closeButton} onClick={this.props.onPressClose}>
            <GrClose></GrClose>
          </div>
          <div className={styles.modalOutSide}>
            <div className={styles.modalContainer}>
              <div className={styles.right}>
                <div className={styles.title}>
                  {this.props.title}
                  <hr className={styles.bar} color="black"></hr>  
                </div>
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
              <div className={styles.left}>
                <img className={styles.image} src={this.props.pic[0]} alt=""/>
                <img className={styles.image} src={this.props.pic[1]} alt=""/>
              </div>
            </div>
          </div>
        </div>
      );
    }
}