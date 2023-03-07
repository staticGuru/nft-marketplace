import React, { useState, useEffect, createRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from "react-router";

import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import Button from "../base/Button";
import { FaEthereum } from "react-icons/fa";
import { useMobile } from "../../hooks/isMobile";
import Card from "../base/Card";

export function NFTDetail(){
  const isMobile = useMobile();

  const [colors, setColors] = useState([]);



  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    setColors([]);
  }, [state]);

  return (
    <div>
        <Card
          width={isMobile ? "100%" : "65vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
              <ColorExtractor getColors={getColors}>
                <img id="detail-image" src={state.item.src} />
              </ColorExtractor>

              <div id="detail-info" style={{}}>
                <div id="detail-info-container">
                  <p id="collection"> {state.item.name} </p>
                  <p id="name"> {state.item.name} </p>
                  <p id="description"> {state.item.description} </p>
                </div>

                <div id="detail-controls">
                  <Button
                    width={isMobile ? "70%" : "70%"}
                    height="50px"
                    child={
                      <div id="button-child">
                        <FaEthereum size="28px" />
                        <p id="price">1254</p>
                      </div>
                    }
                  ></Button>
                  <div className="like-container">
                    <p className="like-count">123</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
     
    </div>
  );
};


