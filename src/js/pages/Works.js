import React from "react";
import MediaQuery from "react-responsive";
import { IoIosRemove } from "react-icons/io";
import { Card, Image, Heading } from "rebass";

import styles from '../../styles/styles.module.css';
import dekita1 from '../components/images/dekita_1.png';

export default class Works extends React.Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://use.typekit.net/urt8xoe.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <MediaQuery query="(max-width:767px)">
          <div style={{position:"absolute", height: "250%", width: "100%"}}>
            <div style={{position: "relative", top: "4%", paddingLeft: "4%"}}>
              <IoIosRemove style={{color: "#FFAB00", marginBottom: "3%"}}></IoIosRemove>
              My Works
            </div> 
            </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px">
        <div className={styles.Page}>
          <div className={styles.innerPage}>
            <IoIosRemove style={{position: "absolute", color: "#FFAB00", top: "13%", left: "5%"}}></IoIosRemove>
            <div style={{position: "absolute", top: "11%", left: "7%", fontWeight: 500, fontSize: 40}}>
              My Works
            </div>
        </div>
        </div>
      </MediaQuery>
      </div>
    );
  }
}