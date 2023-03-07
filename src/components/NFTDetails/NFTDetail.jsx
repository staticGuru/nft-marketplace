import React, { useState, useEffect, createRef } from "react";


import "../../styles/NFTDetails.css"
import { ColorExtractor } from "react-color-extractor";
import Button from "../base/Button";
import { FaEthereum } from "react-icons/fa";
// import { useMobile } from "../../hooks/isMobile";
import Card from "../base/Card";

export function NFTDetail(props){
  const { img, title, price, likes, description }=props;
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
                <img id="detail-image" src={img} />
              </ColorExtractor>

              <div id="detail-info" style={{}}>
                <div id="detail-info-container">
                  <p id="collection">NFT</p>
                  <p id="name"> {title} </p>
                  <p id="description">{description}</p>
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


