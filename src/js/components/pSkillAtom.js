import React from "react";
import styles from "../../styles/about.module.css";
import anime from "animejs";

export default class SkillAtom extends React.Component {
    render() {
      return(
        <div className={styles.pSkillContainer}>
            <div className={styles.pIconContainer}>
                {this.props.SkillIcon}
            </div>
            <div className={styles.SkillNameAndBarContainer}>
                <div className={styles.SkillNameContainer}>
                    <div className={styles.pSkillName}>
                    <p>{this.props.SkillName}</p>
                    </div>
                    <div className={styles.pSkillPersent}> 
                    <p>{this.props.SkillPersent}</p>
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