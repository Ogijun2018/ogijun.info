import React from "react";
import styles from "../../styles/about.module.css";
import anime from "animejs";

export default class SkillAtom extends React.Component {
    render() {
      return(
        <div className={styles.SkillContainer}>
            <div className={styles.IconContainer}>
                {this.props.SkillIcon}
            </div>
            <div className={styles.SkillNameAndBarContainer}>
                <div className={styles.SkillNameContainer}>
                    <div className={styles.SkillName}>
                    <p>{this.props.SkillName}</p>
                    </div>
                    <div className={styles.SkillPersent}> 
                    <p>{this.props.years}</p>
                    </div>
                </div>
                <div className={styles.SkillBarContainer}>
                    <div ref = { ref => {
                    anime({
                        targets: ref,
                        width: this.props.SkillPersent,
                        easing: 'easeInOutQuad',
                        direction: 'normal',
                    });
                    }} className={styles.SkillbarAnimation}>
                    </div>
                    <div className={styles.SkillbarWhite}></div>
                </div>
            </div>
        </div>
      )
    }
}