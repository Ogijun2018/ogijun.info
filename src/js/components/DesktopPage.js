import React from "react";
import styles from "../../styles/styles.module.css";
import { Link } from "react-router-dom";

export default class Page extends React.Component {
    render() {
      return(
        <div>
            {this.props.layout === "right" &&
            <div className={styles.Page}>
                <div className={styles.ImageSide}>
                    <div className={styles.ImageContainer} style={{marginLeft: 60}}>
                        <img src={this.props.imgName} alt=""/>
                    </div>
                </div>
                <div className={styles.SentenceSide}>
                    <div className={styles.SentenceContainer}>
                        <div className={styles.Headline}>
                            {this.props.pageName}
                        </div>
                        <div className={styles.Line} style={{marginLeft: "4.5vw"}}></div>
                        <div className={styles.Paragraph} style={{marginLeft: "-1.5vw", width: "100%"}}>
                            {this.props.text}
                        </div>
                        <div className={styles.btnShowMoreContainer} style={{marginLeft: "9vw"}}>
                        {this.props.showMoreBtn &&
                            <Link to={"/" + this.props.pageName} className={styles.btnShowMore}>show more</Link>
                        }
                        </div>
                    </div>
                </div>
            </div>
            }
            {this.props.layout === "left" &&
            <div className={styles.Page}>
                <div className={styles.SentenceSide}>
                    <div className={styles.SentenceContainer}>
                        <div className={styles.Headline}>
                            {this.props.pageName}
                        </div>
                        <div className={styles.Line}></div>
                        <div className={styles.Paragraph}>
                            {this.props.text}
                        </div>
                        <div className={styles.btnShowMoreContainer}>                    
                        {this.props.showMoreBtn &&
                                <Link to={"/" + this.props.pageName} className={styles.btnShowMore}>show more</Link>
                        }
                        </div>
                    </div>
                </div>
                <div className={styles.ImageSide}>
                    <div className={styles.ImageContainer} style={{marginRight: 60}}>
                        <img src={this.props.imgName} alt=""/>
                    </div>
                </div>
            </div>
            }
        </div>
      );
    }
}