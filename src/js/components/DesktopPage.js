import React from "react";
import styles from "../../styles/styles.module.css";
import { Link } from "react-router-dom";

export default class Page extends React.Component {
    render() {
      return(
        <div className={styles.Page}>
            {this.props.layout === "right" &&
                <div className={styles.innerPage}>
                    <div className={styles.rightHeadline}>
                        {this.props.pageName}
                    </div>
                    <div className={styles.rightImage}>
                        <img src={this.props.imgName} alt=""/>
                    </div>
                    <div className={styles.rightLine}></div>
                    <div className={styles.rightParagraph}>
                        {this.props.text}
                    </div>
                    {this.props.showMoreBtn &&
                        <div className={styles.rightBtnShowMoreContainer}>
                           <Link to={"/" + this.props.pageName} className={styles.btnShowMore}>show more</Link>
                        </div>
                    }
                </div>
            }
            {this.props.layout === "left" &&
                <div className={styles.innerPage}>
                    <div className={styles.leftHeadline}>
                        {this.props.pageName}
                    </div>
                    <div className={styles.leftImage}>
                        <img src={this.props.imgName} alt=""/>
                    </div>
                    <div className={styles.leftLine}></div>
                    <div className={styles.leftParagraph}>
                        {this.props.text}
                    </div>
                    {this.props.showMoreBtn &&
                        <div className={styles.leftBtnShowMoreContainer}>
                            <Link to={"/" + this.props.pageName} className={styles.btnShowMore}>show more</Link>
                        </div>
                    }
                </div>
            }
        </div>
      );
    }
}