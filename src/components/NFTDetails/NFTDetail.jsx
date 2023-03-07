import React, { useState, useEffect, createRef } from "react";


import "../../styles/NFTDetails.css"
import { ColorExtractor } from "react-color-extractor";
import Button from "../base/Button";
import { FaEthereum } from "react-icons/fa";
// import { useMobile } from "../../hooks/isMobile";
import Card from "../base/Card";

export function NFTDetail(){

  const [colors, setColors] = useState([]);



  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };


  useEffect(() => {
    setColors([]);
  }, []);

  return (
    <div>
        <Card
          width={ "65vw"}
          height={ "60vh"}
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
              <ColorExtractor getColors={getColors}>
                <img id="detail-image" src={"https://www.tutorialspoint.com/javafx/images/javafx-mini-logo.jpg"} />
              </ColorExtractor>

              <div id="detail-info" style={{}}>
                <div id="detail-info-container">
                  <p id="collection"> {"state.item.name"} </p>
                  <p id="name"> {"state.item.name"} </p>
                  <p id="description"> {"state.item.description"} </p>
                </div>

                <div id="detail-controls">
                  <Button
                    width={
                       "70%"}
                    height="50px"
                    child={
                      <div id="button-child">
                        <FaEthereum size="28px" />
                        <p id="price">Buy Now</p>
                      </div>
                    }
                  ></Button>
                 
                </div>
              </div>
            </div>
          }
        />
     
    </div>
  );
};


