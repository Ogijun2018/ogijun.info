import React from "react";
import styles from "../../styles/pStyles.module.css";
import { Link } from "react-router-dom";

export default class Page extends React.Component {
    render() {
      return(
        <div className={styles.Page}>
            <div className={styles.innerPage}>
                <div className={styles.Headline}>
                    {this.props.pageName === "About" ? "About Me" : this.props.pageName}
                </div>
                <div className={styles.Image}>
                    <img src={this.props.imgName} alt=""/>
                </div>
                <div className={styles.Line}></div>
                <div className={styles.Paragraph}>
                    {this.props.text}
                </div>
                {this.props.showMoreBtn &&
                    <div className={styles.BtnShowMoreContainer}>
                        <Link to={"/" + this.props.pageName} className={styles.btnShowMore}>show more</Link>
                    </div>
                }
            </div>
        </div>
      );
    }
}