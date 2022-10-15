import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import "./statstics.css";

// import { Container } from './styles';

function Statstics() {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="navbar">
            <div className="wrapper">
              <b>Statstics</b>
              <PersonIcon style={{ marginLeft: "770px" }} />{" "}
              <h4 style={{ marginLeft: "5px" }}> admin </h4>
            </div>
          </div>
          <div className="css8181">
            <div className="css8282">
              <h1
                className="css8383"
                // style="font-weight: bold; font-size: 20px;"
              >
                Event By Players
              </h1>
            </div>
          </div>
          <div id="chart">
            <div
              className="css8484"
              // style="min-height: 615px;"
            >
              <div
                id="apexchartsg8q87ty6"
                className="css8585"
                // style="width: 1274px; height: 600px;"
              >
                <svg
                  id="SvgjsSvg3996"
                  width="90%"
                  height="600"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns-xlink="http://www.w3.org/1999/xlink"
                  xmlns-svgjs="http://svgjs.dev"
                  className="css8686"
                  xmlns-data="ApexChartsNS"
                  transform="translate(0, 0)"
                  // style="background: transparent;"
                >
                  <foreignObject x="0" y="0" width="100%" height="100%">
                    <div
                      className="css8787"
                      xmlns="http://www.w3.org/1999/xhtml"
                      // style="position: absolute; left: auto; top: 60px; right: 5px;"
                    >
                      <div
                        className="css8888"
                        rel="1"
                        seriesname="Total"
                        data-collapsed="false"
                        // style="margin: 2px 5px;"
                      >
                        <span
                          className="css8989"
                          rel="1"
                          data-collapsed="false"  
                          // style="background: rgb(0, 143, 251) !important; color: rgb(0, 143, 251); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;"
                        ></span>
                        <span
                          className="css90901"
                          rel="1"
                          i="0"
                          data-default-text="Total"
                          data-collapsed="false"
                          // style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                        >
                          Total
                        </span>
                      </div>
                      <div
                        className="css9191"
                        rel="2"
                        seriesname="Male"
                        data-collapsed="false"
                        // style="margin: 2px 5px;"
                      >
                        <span
                          className="css9292"
                          rel="2"
                          data-collapsed="false"
                          // style="background: rgb(0, 227, 150) !important; color: rgb(0, 227, 150); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;"
                        ></span>
                        <span
                          className="css9393"
                          rel="2"
                          i="1"
                          data-default-text="Male"
                          data-collapsed="false"
                          // style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                        >
                          Male
                        </span>
                      </div>
                      <div
                        className="css9494"
                        rel="3"
                        seriesname="Female"
                        data-collapsed="true"
                        // style="margin: 2px 5px;"
                      >
                      
                        <span
                          className="css9595"
                          rel="3"
                          data-collapsed="true"
                          // style="background: rgb(254, 176, 25) !important; color: rgb(254, 176, 25); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;"
                        ></span>
                        <span
                          className="css9696"
                          rel="3"
                          i="2"
                          data-default-text="Female"
                          data-collapsed="true"
                          // style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                        >
                          Female
                        </span>
                      </div>
                      <div
                        className="css9797"
                        rel="4"
                        seriesname="Other"
                        data-collapsed="true"
                        // style="margin: 2px 5px;"
                      >
                        <span
                          className="css9898"
                          rel="4"
                          data-collapsed="true"
                          // style="background: rgb(255, 69, 96) !important; color: rgb(255, 69, 96); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;"
                        ></span>
                        <span
                          className="css9999"
                          rel="4"
                          i="3"
                          data-default-text="Other"
                          data-collapsed="true"
                          // style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                        >
                          Other
                        </span>
                      </div>
                    </div>
                  </foreignObject>
                  <g
                    id="SvgjsG3998"
                    className="css100100"
                    transform="translate(33.40000009536743, 30)"
                  >
                    <defs id="SvgjsDefs3997">
                      <linearGradient
                        id="SvgjsLinearGradient4002"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          id="SvgjsStop4003"
                          stop-opacity="0.4"
                          stop-color="rgba(216,227,240,0.4)"
                          offset="0"
                        ></stop>
                        <stop
                          id="SvgjsStop4004"
                          stop-opacity="0.5"
                          stop-color="rgba(190,209,230,0.5)"
                          offset="1"
                        ></stop>
                        <stop
                          id="SvgjsStop4005"
                          stop-opacity="0.5"
                          stop-color="rgba(190,209,230,0.5)"
                          offset="1"
                        ></stop>
                      </linearGradient>
                      <clipPath id="gridRectMaskg8q87ty6">
                        <rect
                          id="SvgjsRect4007"
                          width="1144.5999999046326"
                          height="535.995199382782"
                          x="-2"
                          y="0"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <clipPath id="forecastMaskg8q87ty6"></clipPath>
                      <clipPath id="nonForecastMaskg8q87ty6"></clipPath>
                      <clipPath id="gridRectMarkerMaskg8q87ty6">
                        <rect
                          id="SvgjsRect4008"
                          width="1144.5999999046326"
                          height="539.995199382782"
                          x="-2"
                          y="-2"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <filter
                        id="SvgjsFilter4024"
                        filterUnits="userSpaceOnUse"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                      >
                        <feComponentTransfer
                          id="SvgjsFeComponentTransfer4025"
                          result="SvgjsFeComponentTransfer4025Out"
                          in="SourceGraphic"
                        >
                          <feFuncR
                            id="SvgjsFeFuncR4026"
                            type="linear"
                            slope="0.5"
                          ></feFuncR>
                          <feFuncG
                            id="SvgjsFeFuncG4027"
                            type="linear"
                            slope="0.5"
                          ></feFuncG>
                          <feFuncB
                            id="SvgjsFeFuncB4028"
                            type="linear"
                            slope="0.5"
                          ></feFuncB>
                          <feFuncA
                            id="SvgjsFeFuncA4029"
                            type="identity"
                          ></feFuncA>
                        </feComponentTransfer>
                      </filter>
                      <filter
                        id="SvgjsFilter4192"
                        filterUnits="userSpaceOnUse"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                      >
                        <feComponentTransfer
                          id="SvgjsFeComponentTransfer4193"
                          result="SvgjsFeComponentTransfer4193Out"
                          in="SourceGraphic"
                        >
                          <feFuncR
                            id="SvgjsFeFuncR4194"
                            type="linear"
                            slope="1.5"
                            intercept="0.1"
                          ></feFuncR>
                          <feFuncG
                            id="SvgjsFeFuncG4195"
                            type="linear"
                            slope="1.5"
                            intercept="0.1"
                          ></feFuncG>
                          <feFuncB
                            id="SvgjsFeFuncB4196"
                            type="linear"
                            slope="1.5"
                            intercept="0.1"
                          ></feFuncB>
                          <feFuncA
                            id="SvgjsFeFuncA4197"
                            type="identity"
                          ></feFuncA>
                        </feComponentTransfer>
                      </filter>
                    </defs>
                    <rect
                      id="SvgjsRect4006"
                      width="114.05999999046325"
                      height="535.995199382782"
                      x="24.05713784013475"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke-dasharray="3"
                      fill="url(#SvgjsLinearGradient4002)"
                      className="css100101"
                      y2="535.995199382782"
                      filter="none"
                      fill-opacity="0.9"
                      x1="24.05713784013475"
                      x2="24.05713784013475"
                    ></rect>
                    <g
                      id="SvgjsG4123"
                      className="apexcharts-xaxis"
                      transform="translate(0, 0)"
                    >
                      <g
                        id="SvgjsG4124"
                        className="apexcharts-xaxis-texts-g"
                        transform="translate(0, -4)"
                      >
                        <text
                          id="SvgjsText4126"
                          font-family="Helvetica, Arial, sans-serif"
                          x="81.47142856461662"
                          y="564.995199382782"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          // style="font-family: Helvetica, Arial, sans-serif;"
                        >
                          <tspan id="SvgjsTspan4127">6324</tspan>
                          <title>6324</title>
                        </text>
                        <text
                          id="SvgjsText4129"
                          font-family="Helvetica, Arial, sans-serif"
                          x="244.41428569384985"
                          y="564.995199382782"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          // style="font-family: Helvetica, Arial, sans-serif;"
                        >
                          <tspan id="SvgjsTspan4130">6323</tspan>
                          <title>6323</title>
                        </text>
                        <text
                          id="SvgjsText4132"
                          font-family="Helvetica, Arial, sans-serif"
                          x="407.3571428230831"
                          y="564.995199382782"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          // style="font-family: Helvetica, Arial, sans-serif;"
                        >
                          <tspan id="SvgjsTspan4133">6322</tspan>
                          <title>6322</title>
                        </text>
                        <text
                          id="SvgjsText4135"
                          font-family="Helvetica, Arial, sans-serif"
                          x="570.2999999523163"
                          y="564.995199382782"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          // style="font-family: Helvetica, Arial, sans-serif;"
                        >
                          <tspan id="SvgjsTspan4136">6321</tspan>
                          <title>6321</title>
                        </text>
                        <text
                          id="SvgjsText4138"
                          font-family="Helvetica, Arial, sans-serif"
                          x="733.2428570815496"
                          y="564.995199382782"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          // style="font-family: Helvetica, Arial, sans-serif;"
                        >
                          <tspan id="SvgjsTspan4139">6320</tspan>
                          <title>6320</title>
                        </text>
                        <text
                          id="SvgjsText4141"
                          font-family="Helvetica, Arial, sans-serif"
                          x="896.1857142107829"
                          y="564.995199382782"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          // style="font-family: Helvetica, Arial, sans-serif;"
                        >
                          <tspan id="SvgjsTspan4142">6319</tspan>
                          <title>6319</title>
                        </text>
                        <text
                          id="SvgjsText4144"
                          font-family="Helvetica, Arial, sans-serif"
                          x="1059.1285713400162"
                          y="564.995199382782"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          // style="font-family: Helvetica, Arial, sans-serif;"
                        >
                          <tspan id="SvgjsTspan4145">6318</tspan>
                          <title>6318</title>
                        </text>
                      </g>
                      <line
                        id="SvgjsLine4146"
                        x1="0"
                        y1="536.995199382782"
                        x2="1140.5999999046326"
                        y2="536.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-width="1"
                        stroke-linecap="butt"
                      ></line>
                    </g>
                    <g id="SvgjsG4167" className="apexcharts-grid">
                      <g
                        id="SvgjsG4168"
                        className="apexcharts-gridlines-horizontal"
                      >
                        <line
                          id="SvgjsLine4178"
                          x1="0"
                          y1="0"
                          x2="1140.5999999046326"
                          y2="0"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine4179"
                          x1="0"
                          y1="107.19903987655638"
                          x2="1140.5999999046326"
                          y2="107.19903987655638"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine4180"
                          x1="0"
                          y1="214.39807975311277"
                          x2="1140.5999999046326"
                          y2="214.39807975311277"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine4181"
                          x1="0"
                          y1="321.5971196296691"
                          x2="1140.5999999046326"
                          y2="321.5971196296691"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine4182"
                          x1="0"
                          y1="428.79615950622554"
                          x2="1140.5999999046326"
                          y2="428.79615950622554"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine4183"
                          x1="0"
                          y1="535.995199382782"
                          x2="1140.5999999046326"
                          y2="535.995199382782"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG4169"
                        className="apexcharts-gridlines-vertical"
                      ></g>
                      <line
                        id="SvgjsLine4170"
                        x1="0"
                        y1="536.995199382782"
                        x2="0"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4171"
                        x1="162.94285712923323"
                        y1="536.995199382782"
                        x2="162.94285712923323"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4172"
                        x1="325.88571425846646"
                        y1="536.995199382782"
                        x2="325.88571425846646"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4173"
                        x1="488.8285713876997"
                        y1="536.995199382782"
                        x2="488.8285713876997"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4174"
                        x1="651.7714285169329"
                        y1="536.995199382782"
                        x2="651.7714285169329"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4175"
                        x1="814.7142856461662"
                        y1="536.995199382782"
                        x2="814.7142856461662"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4176"
                        x1="977.6571427753995"
                        y1="536.995199382782"
                        x2="977.6571427753995"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4177"
                        x1="1140.5999999046328"
                        y1="536.995199382782"
                        x2="1140.5999999046328"
                        y2="542.995199382782"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        className="apexcharts-xaxis-tick"
                      ></line>
                      <line
                        id="SvgjsLine4185"
                        x1="0"
                        y1="535.995199382782"
                        x2="1140.5999999046326"
                        y2="535.995199382782"
                        stroke="transparent"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                      ></line>
                      <line
                        id="SvgjsLine4184"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="535.995199382782"
                        stroke="transparent"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                      ></line>
                    </g>
                    <g
                      id="SvgjsG4009"
                      className="apexcharts-bar-series apexcharts-plot-series"
                    >
                      <g
                        id="SvgjsG4010"
                        className="apexcharts-series"
                        seriesName="Total"
                        rel="1"
                        data-realIndex="0"
                      >
                        <path
                          id="SvgjsPath4012"
                          d="M 24.44142856938499 535.995199382782L 24.44142856938499 321.5971196296692Q 24.44142856938499 321.5971196296692 24.44142856938499 321.5971196296692L 138.50142855984825 321.5971196296692Q 138.50142855984825 321.5971196296692 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692L 138.50142855984825 535.995199382782L 138.50142855984825 535.995199382782z"
                          fill="rgba(0,143,251,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="0"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 24.44142856938499 535.995199382782L 24.44142856938499 321.5971196296692Q 24.44142856938499 321.5971196296692 24.44142856938499 321.5971196296692L 138.50142855984825 321.5971196296692Q 138.50142855984825 321.5971196296692 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692L 138.50142855984825 535.995199382782L 138.50142855984825 535.995199382782z"
                          pathFrom="M 24.244846527917048 535.995199382782L 24.244846527917048 535.995199382782Q 24.244846527917048 535.995199382782 24.244846527917048 535.995199382782L 137.3874636581966 535.995199382782Q 137.3874636581966 535.995199382782 137.3874636581966 535.995199382782L 137.3874636581966 535.995199382782L 137.3874636581966 535.995199382782L 137.3874636581966 535.995199382782zL 24.44142856938499 535.995199382782L 138.50142855984825 535.995199382782L 138.50142855984825 535.995199382782L 138.50142855984825 535.995199382782L 138.50142855984825 535.995199382782L 138.50142855984825 535.995199382782L 24.44142856938499 535.995199382782"
                          cy="321.5971196296692"
                          cx="187.3842856986182"
                          j="0"
                          val="2"
                          barHeight="214.39807975311277"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4017"
                          d="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          fill="rgba(0,143,251,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="0"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          pathFrom="M 185.8771567140307 535.995199382782L 185.8771567140307 535.995199382782Q 185.8771567140307 535.995199382782 185.8771567140307 535.995199382782L 299.01977384431024 535.995199382782Q 299.01977384431024 535.995199382782 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782zL 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 187.3842856986182 535.995199382782"
                          cy="535.995199382782"
                          cx="350.32714282785145"
                          j="1"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4022"
                          d="M 350.32714282785145 535.995199382782L 350.32714282785145 321.5971196296692Q 350.32714282785145 321.5971196296692 350.32714282785145 321.5971196296692L 464.3871428183147 321.5971196296692Q 464.3871428183147 321.5971196296692 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692L 464.3871428183147 535.995199382782L 464.3871428183147 535.995199382782z"
                          fill="rgba(0,143,251,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="0"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 350.32714282785145 535.995199382782L 350.32714282785145 321.5971196296692Q 350.32714282785145 321.5971196296692 350.32714282785145 321.5971196296692L 464.3871428183147 321.5971196296692Q 464.3871428183147 321.5971196296692 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692L 464.3871428183147 535.995199382782L 464.3871428183147 535.995199382782z"
                          pathFrom="M 347.50946690014433 535.995199382782L 347.50946690014433 535.995199382782Q 347.50946690014433 535.995199382782 347.50946690014433 535.995199382782L 460.6520840304239 535.995199382782Q 460.6520840304239 535.995199382782 460.6520840304239 535.995199382782L 460.6520840304239 535.995199382782L 460.6520840304239 535.995199382782L 460.6520840304239 535.995199382782zL 350.32714282785145 535.995199382782L 464.3871428183147 535.995199382782L 464.3871428183147 535.995199382782L 464.3871428183147 535.995199382782L 464.3871428183147 535.995199382782L 464.3871428183147 535.995199382782L 350.32714282785145 535.995199382782"
                          selected="true"
                          filter="url(#SvgjsFilter4024)"
                          cy="321.5971196296692"
                          cx="513.2699999570847"
                          j="2"
                          val="2"
                          barHeight="214.39807975311277"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4034"
                          d="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          fill="rgba(0,143,251,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="0"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          pathFrom="M 509.141777086258 535.995199382782L 509.141777086258 535.995199382782Q 509.141777086258 535.995199382782 509.141777086258 535.995199382782L 622.2843942165375 535.995199382782Q 622.2843942165375 535.995199382782 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782zL 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 513.2699999570847 535.995199382782"
                          cy="535.995199382782"
                          cx="676.2128570863179"
                          j="3"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4039"
                          d="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          fill="rgba(0,143,251,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="0"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          pathFrom="M 670.7740872723716 535.995199382782L 670.7740872723716 535.995199382782Q 670.7740872723716 535.995199382782 670.7740872723716 535.995199382782L 783.9167044026511 535.995199382782Q 783.9167044026511 535.995199382782 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782zL 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 676.2128570863179 535.995199382782"
                          cy="535.995199382782"
                          cx="839.1557142155511"
                          j="4"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4044"
                          d="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          fill="rgba(0,143,251,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="0"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          pathFrom="M 832.4063974584852 535.995199382782L 832.4063974584852 535.995199382782Q 832.4063974584852 535.995199382782 832.4063974584852 535.995199382782L 945.5490145887647 535.995199382782Q 945.5490145887647 535.995199382782 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782zL 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 839.1557142155511 535.995199382782"
                          cy="535.995199382782"
                          cx="1002.0985713447844"
                          j="5"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4049"
                          d="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          fill="rgba(0,143,251,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="0"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          pathFrom="M 994.0387076445988 535.995199382782L 994.0387076445988 535.995199382782Q 994.0387076445988 535.995199382782 994.0387076445988 535.995199382782L 1107.1813247748785 535.995199382782Q 1107.1813247748785 535.995199382782 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782zL 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1002.0985713447844 535.995199382782"
                          cy="535.995199382782"
                          cx="1165.0414284740177"
                          j="6"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                      </g>
                      <g
                        id="SvgjsG4054"
                        className="apexcharts-series"
                        seriesName="Male"
                        rel="2"
                        data-realIndex="1"
                      >
                        <path
                          id="SvgjsPath4056"
                          d="M 24.44142856938499 321.5971196296692L 24.44142856938499 107.19903987655641Q 24.44142856938499 107.19903987655641 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641Q 138.50142855984825 107.19903987655641 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692z"
                          fill="rgba(0,227,150,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="1"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 24.44142856938499 321.5971196296692L 24.44142856938499 107.19903987655641Q 24.44142856938499 107.19903987655641 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641Q 138.50142855984825 107.19903987655641 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692z"
                          pathFrom="M 24.244846527917048 535.995199382782L 24.244846527917048 178.66506646092733Q 24.244846527917048 178.66506646092733 24.244846527917048 178.66506646092733L 137.3874636581966 178.66506646092733Q 137.3874636581966 178.66506646092733 137.3874636581966 178.66506646092733L 137.3874636581966 178.66506646092733L 137.3874636581966 535.995199382782L 137.3874636581966 535.995199382782zL 24.44142856938499 321.5971196296692L 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692L 138.50142855984825 321.5971196296692L 24.44142856938499 321.5971196296692"
                          cy="107.19903987655641"
                          cx="187.3842856986182"
                          j="0"
                          val="2"
                          barHeight="214.39807975311277"
                          barWidth="114.05999999046325"
                          filter="url(#SvgjsFilter4192)"
                        ></path>
                        <path
                          id="SvgjsPath4061"
                          d="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          fill="rgba(0,227,150,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="1"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          pathFrom="M 185.8771567140307 535.995199382782L 185.8771567140307 535.995199382782Q 185.8771567140307 535.995199382782 185.8771567140307 535.995199382782L 299.01977384431024 535.995199382782Q 299.01977384431024 535.995199382782 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782zL 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 187.3842856986182 535.995199382782"
                          cy="535.995199382782"
                          cx="350.32714282785145"
                          j="1"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4066"
                          d="M 350.32714282785145 321.5971196296692L 350.32714282785145 107.19903987655641Q 350.32714282785145 107.19903987655641 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641Q 464.3871428183147 107.19903987655641 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692z"
                          fill="rgba(0,227,150,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="1"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 350.32714282785145 321.5971196296692L 350.32714282785145 107.19903987655641Q 350.32714282785145 107.19903987655641 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641Q 464.3871428183147 107.19903987655641 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692z"
                          pathFrom="M 347.50946690014433 535.995199382782L 347.50946690014433 178.66506646092733Q 347.50946690014433 178.66506646092733 347.50946690014433 178.66506646092733L 460.6520840304239 178.66506646092733Q 460.6520840304239 178.66506646092733 460.6520840304239 178.66506646092733L 460.6520840304239 178.66506646092733L 460.6520840304239 535.995199382782L 460.6520840304239 535.995199382782zL 350.32714282785145 321.5971196296692L 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692L 464.3871428183147 321.5971196296692L 350.32714282785145 321.5971196296692"
                          cy="107.19903987655641"
                          cx="513.2699999570847"
                          j="2"
                          val="2"
                          barHeight="214.39807975311277"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4071"
                          d="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          fill="rgba(0,227,150,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="1"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          pathFrom="M 509.141777086258 535.995199382782L 509.141777086258 535.995199382782Q 509.141777086258 535.995199382782 509.141777086258 535.995199382782L 622.2843942165375 535.995199382782Q 622.2843942165375 535.995199382782 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782zL 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 513.2699999570847 535.995199382782"
                          cy="535.995199382782"
                          cx="676.2128570863179"
                          j="3"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4076"
                          d="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          fill="rgba(0,227,150,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="1"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          pathFrom="M 670.7740872723716 535.995199382782L 670.7740872723716 535.995199382782Q 670.7740872723716 535.995199382782 670.7740872723716 535.995199382782L 783.9167044026511 535.995199382782Q 783.9167044026511 535.995199382782 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782zL 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 676.2128570863179 535.995199382782"
                          cy="535.995199382782"
                          cx="839.1557142155511"
                          j="4"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4081"
                          d="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          fill="rgba(0,227,150,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="1"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          pathFrom="M 832.4063974584852 535.995199382782L 832.4063974584852 535.995199382782Q 832.4063974584852 535.995199382782 832.4063974584852 535.995199382782L 945.5490145887647 535.995199382782Q 945.5490145887647 535.995199382782 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782zL 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 839.1557142155511 535.995199382782"
                          cy="535.995199382782"
                          cx="1002.0985713447844"
                          j="5"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4086"
                          d="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          fill="rgba(0,227,150,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="1"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          pathFrom="M 994.0387076445988 535.995199382782L 994.0387076445988 535.995199382782Q 994.0387076445988 535.995199382782 994.0387076445988 535.995199382782L 1107.1813247748785 535.995199382782Q 1107.1813247748785 535.995199382782 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782zL 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1002.0985713447844 535.995199382782"
                          cy="535.995199382782"
                          cx="1165.0414284740177"
                          j="6"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                      </g>
                      <g
                        id="SvgjsG4091"
                        className="apexcharts-series apexcharts-series-collapsed"
                        seriesName="Female"
                        rel="3"
                        data-realIndex="2"
                      >
                        <path
                          id="SvgjsPath4093"
                          d="M 24.44142856938499 107.19903987655641L 24.44142856938499 107.19903987655641Q 24.44142856938499 107.19903987655641 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641Q 138.50142855984825 107.19903987655641 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641z"
                          fill="rgba(254,176,25,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="2"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 24.44142856938499 107.19903987655641L 24.44142856938499 107.19903987655641Q 24.44142856938499 107.19903987655641 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641Q 138.50142855984825 107.19903987655641 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641z"
                          pathFrom="M 24.244846527917048 178.66506646092733L 24.244846527917048 178.66506646092733Q 24.244846527917048 178.66506646092733 24.244846527917048 178.66506646092733L 137.3874636581966 178.66506646092733Q 137.3874636581966 178.66506646092733 137.3874636581966 178.66506646092733L 137.3874636581966 178.66506646092733L 137.3874636581966 178.66506646092733L 137.3874636581966 178.66506646092733zL 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 24.44142856938499 107.19903987655641"
                          cy="107.19903987655641"
                          cx="187.3842856986182"
                          j="0"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4095"
                          d="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          fill="rgba(254,176,25,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="2"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          pathFrom="M 185.8771567140307 535.995199382782L 185.8771567140307 535.995199382782Q 185.8771567140307 535.995199382782 185.8771567140307 535.995199382782L 299.01977384431024 535.995199382782Q 299.01977384431024 535.995199382782 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782zL 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 187.3842856986182 535.995199382782"
                          cy="535.995199382782"
                          cx="350.32714282785145"
                          j="1"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4097"
                          d="M 350.32714282785145 107.19903987655641L 350.32714282785145 107.19903987655641Q 350.32714282785145 107.19903987655641 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641Q 464.3871428183147 107.19903987655641 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641z"
                          fill="rgba(254,176,25,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="2"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 350.32714282785145 107.19903987655641L 350.32714282785145 107.19903987655641Q 350.32714282785145 107.19903987655641 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641Q 464.3871428183147 107.19903987655641 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641z"
                          pathFrom="M 347.50946690014433 178.66506646092733L 347.50946690014433 178.66506646092733Q 347.50946690014433 178.66506646092733 347.50946690014433 178.66506646092733L 460.6520840304239 178.66506646092733Q 460.6520840304239 178.66506646092733 460.6520840304239 178.66506646092733L 460.6520840304239 178.66506646092733L 460.6520840304239 178.66506646092733L 460.6520840304239 178.66506646092733zL 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 350.32714282785145 107.19903987655641"
                          cy="107.19903987655641"
                          cx="513.2699999570847"
                          j="2"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4099"
                          d="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          fill="rgba(254,176,25,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="2"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          pathFrom="M 509.141777086258 535.995199382782L 509.141777086258 535.995199382782Q 509.141777086258 535.995199382782 509.141777086258 535.995199382782L 622.2843942165375 535.995199382782Q 622.2843942165375 535.995199382782 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782zL 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 513.2699999570847 535.995199382782"
                          cy="535.995199382782"
                          cx="676.2128570863179"
                          j="3"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4101"
                          d="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          fill="rgba(254,176,25,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="2"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          pathFrom="M 670.7740872723716 535.995199382782L 670.7740872723716 535.995199382782Q 670.7740872723716 535.995199382782 670.7740872723716 535.995199382782L 783.9167044026511 535.995199382782Q 783.9167044026511 535.995199382782 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782zL 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 676.2128570863179 535.995199382782"
                          cy="535.995199382782"
                          cx="839.1557142155511"
                          j="4"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4103"
                          d="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          fill="rgba(254,176,25,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="2"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          pathFrom="M 832.4063974584852 535.995199382782L 832.4063974584852 535.995199382782Q 832.4063974584852 535.995199382782 832.4063974584852 535.995199382782L 945.5490145887647 535.995199382782Q 945.5490145887647 535.995199382782 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782zL 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 839.1557142155511 535.995199382782"
                          cy="535.995199382782"
                          cx="1002.0985713447844"
                          j="5"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4105"
                          d="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          fill="rgba(254,176,25,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="2"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          pathFrom="M 994.0387076445988 535.995199382782L 994.0387076445988 535.995199382782Q 994.0387076445988 535.995199382782 994.0387076445988 535.995199382782L 1107.1813247748785 535.995199382782Q 1107.1813247748785 535.995199382782 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782zL 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1002.0985713447844 535.995199382782"
                          cy="535.995199382782"
                          cx="1165.0414284740177"
                          j="6"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                      </g>
                      <g
                        id="SvgjsG4107"
                        className="apexcharts-series apexcharts-series-collapsed"
                        seriesName="Other"
                        rel="4"
                        data-realIndex="3"
                      >
                        <path
                          id="SvgjsPath4109"
                          d="M 24.44142856938499 107.19903987655641L 24.44142856938499 107.19903987655641Q 24.44142856938499 107.19903987655641 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641Q 138.50142855984825 107.19903987655641 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641z"
                          fill="rgba(255,69,96,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="3"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 24.44142856938499 107.19903987655641L 24.44142856938499 107.19903987655641Q 24.44142856938499 107.19903987655641 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641Q 138.50142855984825 107.19903987655641 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641z"
                          pathFrom="M 24.244846527917048 178.66506646092733L 24.244846527917048 178.66506646092733Q 24.244846527917048 178.66506646092733 24.244846527917048 178.66506646092733L 137.3874636581966 178.66506646092733Q 137.3874636581966 178.66506646092733 137.3874636581966 178.66506646092733L 137.3874636581966 178.66506646092733L 137.3874636581966 178.66506646092733L 137.3874636581966 178.66506646092733zL 24.44142856938499 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 138.50142855984825 107.19903987655641L 24.44142856938499 107.19903987655641"
                          cy="107.19903987655641"
                          cx="187.3842856986182"
                          j="0"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4111"
                          d="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          fill="rgba(255,69,96,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="3"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 187.3842856986182 535.995199382782L 187.3842856986182 535.995199382782Q 187.3842856986182 535.995199382782 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782Q 301.4442856890815 535.995199382782 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782z"
                          pathFrom="M 185.8771567140307 535.995199382782L 185.8771567140307 535.995199382782Q 185.8771567140307 535.995199382782 185.8771567140307 535.995199382782L 299.01977384431024 535.995199382782Q 299.01977384431024 535.995199382782 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782L 299.01977384431024 535.995199382782zL 187.3842856986182 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 301.4442856890815 535.995199382782L 187.3842856986182 535.995199382782"
                          cy="535.995199382782"
                          cx="350.32714282785145"
                          j="1"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4113"
                          d="M 350.32714282785145 107.19903987655641L 350.32714282785145 107.19903987655641Q 350.32714282785145 107.19903987655641 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641Q 464.3871428183147 107.19903987655641 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641z"
                          fill="rgba(255,69,96,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="3"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 350.32714282785145 107.19903987655641L 350.32714282785145 107.19903987655641Q 350.32714282785145 107.19903987655641 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641Q 464.3871428183147 107.19903987655641 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641z"
                          pathFrom="M 347.50946690014433 178.66506646092733L 347.50946690014433 178.66506646092733Q 347.50946690014433 178.66506646092733 347.50946690014433 178.66506646092733L 460.6520840304239 178.66506646092733Q 460.6520840304239 178.66506646092733 460.6520840304239 178.66506646092733L 460.6520840304239 178.66506646092733L 460.6520840304239 178.66506646092733L 460.6520840304239 178.66506646092733zL 350.32714282785145 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 464.3871428183147 107.19903987655641L 350.32714282785145 107.19903987655641"
                          cy="107.19903987655641"
                          cx="513.2699999570847"
                          j="2"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4115"
                          d="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          fill="rgba(255,69,96,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="3"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 513.2699999570847 535.995199382782L 513.2699999570847 535.995199382782Q 513.2699999570847 535.995199382782 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782Q 627.3299999475479 535.995199382782 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782z"
                          pathFrom="M 509.141777086258 535.995199382782L 509.141777086258 535.995199382782Q 509.141777086258 535.995199382782 509.141777086258 535.995199382782L 622.2843942165375 535.995199382782Q 622.2843942165375 535.995199382782 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782L 622.2843942165375 535.995199382782zL 513.2699999570847 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 627.3299999475479 535.995199382782L 513.2699999570847 535.995199382782"
                          cy="535.995199382782"
                          cx="676.2128570863179"
                          j="3"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4117"
                          d="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          fill="rgba(255,69,96,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="3"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 676.2128570863179 535.995199382782L 676.2128570863179 535.995199382782Q 676.2128570863179 535.995199382782 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782Q 790.2728570767811 535.995199382782 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782z"
                          pathFrom="M 670.7740872723716 535.995199382782L 670.7740872723716 535.995199382782Q 670.7740872723716 535.995199382782 670.7740872723716 535.995199382782L 783.9167044026511 535.995199382782Q 783.9167044026511 535.995199382782 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782L 783.9167044026511 535.995199382782zL 676.2128570863179 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 790.2728570767811 535.995199382782L 676.2128570863179 535.995199382782"
                          cy="535.995199382782"
                          cx="839.1557142155511"
                          j="4"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4119"
                          d="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          fill="rgba(255,69,96,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="3"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 839.1557142155511 535.995199382782L 839.1557142155511 535.995199382782Q 839.1557142155511 535.995199382782 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782Q 953.2157142060144 535.995199382782 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782z"
                          pathFrom="M 832.4063974584852 535.995199382782L 832.4063974584852 535.995199382782Q 832.4063974584852 535.995199382782 832.4063974584852 535.995199382782L 945.5490145887647 535.995199382782Q 945.5490145887647 535.995199382782 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782L 945.5490145887647 535.995199382782zL 839.1557142155511 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 953.2157142060144 535.995199382782L 839.1557142155511 535.995199382782"
                          cy="535.995199382782"
                          cx="1002.0985713447844"
                          j="5"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                        <path
                          id="SvgjsPath4121"
                          d="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          fill="rgba(255,69,96,0.85)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          className="apexcharts-bar-area"
                          index="3"
                          clip-path="url(#gridRectMaskg8q87ty6)"
                          pathTo="M 1002.0985713447844 535.995199382782L 1002.0985713447844 535.995199382782Q 1002.0985713447844 535.995199382782 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782Q 1116.1585713352476 535.995199382782 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782z"
                          pathFrom="M 994.0387076445988 535.995199382782L 994.0387076445988 535.995199382782Q 994.0387076445988 535.995199382782 994.0387076445988 535.995199382782L 1107.1813247748785 535.995199382782Q 1107.1813247748785 535.995199382782 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782L 1107.1813247748785 535.995199382782zL 1002.0985713447844 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1116.1585713352476 535.995199382782L 1002.0985713447844 535.995199382782"
                          cy="535.995199382782"
                          cx="1165.0414284740177"
                          j="6"
                          val="0"
                          barHeight="0"
                          barWidth="114.05999999046325"
                        ></path>
                      </g>
                      <g
                        id="SvgjsG4011"
                        className="apexcharts-datalabels"
                        data-realIndex="0"
                      >
                        <g
                          id="SvgjsG4014"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4016"
                            font-family="Helvetica, Arial, sans-serif"
                            x="81.47142856461662"
                            y="435.5961596969604"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="81.47142856461662"
                            cy="435.5961596969604"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          >
                            2
                          </text>
                        </g>
                        <g
                          id="SvgjsG4019"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4021"
                            font-family="Helvetica, Arial, sans-serif"
                            x="244.41428569384985"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="244.41428569384985"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4031"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4033"
                            font-family="Helvetica, Arial, sans-serif"
                            x="407.35714282308305"
                            y="435.5961596969604"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="407.35714282308305"
                            cy="435.5961596969604"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          >
                            2
                          </text>
                        </g>
                        <g
                          id="SvgjsG4036"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4038"
                            font-family="Helvetica, Arial, sans-serif"
                            x="570.2999999523162"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="570.2999999523162"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4041"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4043"
                            font-family="Helvetica, Arial, sans-serif"
                            x="733.2428570815495"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="733.2428570815495"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4046"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4048"
                            font-family="Helvetica, Arial, sans-serif"
                            x="896.1857142107827"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="896.1857142107827"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4051"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4053"
                            font-family="Helvetica, Arial, sans-serif"
                            x="1059.1285713400162"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="1059.1285713400162"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                      </g>
                      <g
                        id="SvgjsG4055"
                        className="apexcharts-datalabels"
                        data-realIndex="1"
                      >
                        <g
                          id="SvgjsG4058"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4060"
                            font-family="Helvetica, Arial, sans-serif"
                            x="81.47142856461662"
                            y="221.19807994384766"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="81.47142856461662"
                            cy="221.19807994384766"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          >
                            2
                          </text>
                        </g>
                        <g
                          id="SvgjsG4063"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4065"
                            font-family="Helvetica, Arial, sans-serif"
                            x="244.41428569384985"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="244.41428569384985"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4068"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4070"
                            font-family="Helvetica, Arial, sans-serif"
                            x="407.35714282308305"
                            y="221.19807994384766"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="407.35714282308305"
                            cy="221.19807994384766"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          >
                            2
                          </text>
                        </g>
                        <g
                          id="SvgjsG4073"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4075"
                            font-family="Helvetica, Arial, sans-serif"
                            x="570.2999999523162"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="570.2999999523162"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4078"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4080"
                            font-family="Helvetica, Arial, sans-serif"
                            x="733.2428570815495"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="733.2428570815495"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4083"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4085"
                            font-family="Helvetica, Arial, sans-serif"
                            x="896.1857142107827"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="896.1857142107827"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                        <g
                          id="SvgjsG4088"
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            id="SvgjsText4090"
                            font-family="Helvetica, Arial, sans-serif"
                            x="1059.1285713400162"
                            y="535.995199382782"
                            text-anchor="middle"
                            dominant-baseline="auto"
                            font-size="12px"
                            font-weight="600"
                            fill="#ffffff"
                            className="apexcharts-datalabel"
                            cx="1059.1285713400162"
                            cy="535.995199382782"
                            // style="font-family: Helvetica, Arial, sans-serif;"
                          ></text>
                        </g>
                      </g>
                      <g
                        id="SvgjsG4092"
                        className="apexcharts-datalabels"
                        data-realIndex="2"
                      ></g>
                      <g
                        id="SvgjsG4108"
                        className="apexcharts-datalabels"
                        data-realIndex="3"
                      ></g>
                    </g>
                    <line
                      id="SvgjsLine4186"
                      x1="0"
                      y1="0"
                      x2="1140.5999999046326"
                      y2="0"
                      stroke="#b6b6b6"
                      stroke-dasharray="0"
                      stroke-width="1"
                      stroke-linecap="butt"
                      className="apexcharts-ycrosshairs"
                    ></line>
                    <line
                      id="SvgjsLine4187"
                      x1="0"
                      y1="0"
                      x2="1140.5999999046326"
                      y2="0"
                      stroke-dasharray="0"
                      stroke-width="0"
                      stroke-linecap="butt"
                      className="apexcharts-ycrosshairs-hidden"
                    ></line>
                    <g
                      id="SvgjsG4188"
                      className="apexcharts-yaxis-annotations"
                    ></g>
                    <g
                      id="SvgjsG4189"
                      className="apexcharts-xaxis-annotations"
                    ></g>
                    <g
                      id="SvgjsG4190"
                      className="apexcharts-point-annotations"
                    ></g>
                  </g>
                  <g
                    id="SvgjsG4147"
                    className="apexcharts-yaxis"
                    rel="0"
                    transform="translate(3.4000000953674316, 0)"
                  >
                    <g id="SvgjsG4148" className="apexcharts-yaxis-texts-g">
                      <text
                        id="SvgjsText4150"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="31.5"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        // style="font-family: Helvetica, Arial, sans-serif;"
                      >
                        <tspan id="SvgjsTspan4151">5</tspan>
                        <title>5</title>
                      </text>
                      <text
                        id="SvgjsText4153"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="138.69903987655638"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        // style="font-family: Helvetica, Arial, sans-serif;"
                      >
                        <tspan id="SvgjsTspan4154">4</tspan>
                        <title>4</title>
                      </text>
                      <text
                        id="SvgjsText4156"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="245.89807975311277"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        // style="font-family: Helvetica, Arial, sans-serif;"
                      >
                        <tspan id="SvgjsTspan4157">3</tspan>
                        <title>3</title>
                      </text>
                      <text
                        id="SvgjsText4159"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="353.0971196296691"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        // style="font-family: Helvetica, Arial, sans-serif;"
                      >
                        <tspan id="SvgjsTspan4160">2</tspan>
                        <title>2</title>
                      </text>
                      <text
                        id="SvgjsText4162"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="460.29615950622554"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        // style="font-family: Helvetica, Arial, sans-serif;"
                      >
                        <tspan id="SvgjsTspan4163">1</tspan>
                        <title>1</title>
                      </text>
                      <text
                        id="SvgjsText4165"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="567.495199382782"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        // style="font-family: Helvetica, Arial, sans-serif;"
                      >
                        <tspan id="SvgjsTspan4166">0</tspan>
                        <title>0</title>
                      </text>
                    </g>
                  </g>
                  <g id="SvgjsG3999" className="apexcharts-annotations"></g>
                </svg>
                <div
                  className="apexcharts-tooltip apexcharts-theme-light apexcharts-active"
                  // style="left: 114.487px; top: 102px;"
                >
                  {/* <div
                      className="apexcharts-tooltip-title"
                      // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                    >
                      6324
                    </div> */}
                  {/* <div
                      className="apexcharts-tooltip-series-group apexcharts-active"
                      // style="order: 1; display: flex;"
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        // style="background-color: rgba(0, 227, 150, 0.85);"
                      ></span>
                      <div
                        className="apexcharts-tooltip-text"
                        // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label">
                            Male:{" "}
                          </span>
                          <span className="apexcharts-tooltip-text-y-value">
                            2
                          </span>
                        </div> */}
                  {/* <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label"></span>
                          <span className="apexcharts-tooltip-text-goals-value"></span>
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label"></span>
                          <span className="apexcharts-tooltip-text-z-value"></span>
                        </div>
                      </div>
                    </div> */}
                  {/* <div
                      className="apexcharts-tooltip-series-group"
                      // style="order: 2; display: none;"
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        // style="background-color: rgba(0, 227, 150, 0.85);"
                      ></span>
                      <div
                        className="apexcharts-tooltip-text"
                        // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label">
                            Male:{" "}
                          </span>
                          <span className="apexcharts-tooltip-text-y-value">
                            2
                          </span>
                        </div>
                        <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label"></span>
                          <span className="apexcharts-tooltip-text-goals-value"></span>
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label"></span>
                          <span className="apexcharts-tooltip-text-z-value"></span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="apexcharts-tooltip-series-group"
                      // style="order: 3; display: none;"
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        // style="background-color: rgba(0, 227, 150, 0.85);"
                      ></span>
                      <div
                        className="apexcharts-tooltip-text"
                        // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label">
                            Male:{" "}
                          </span>
                          <span className="apexcharts-tooltip-text-y-value">
                            2
                          </span>
                        </div>
                        <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label"></span>
                          <span className="apexcharts-tooltip-text-goals-value"></span>
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label"></span>
                          <span className="apexcharts-tooltip-text-z-value"></span>
                        </div>
                      </div>
                    </div> */}
                  {/* <div
                      className="apexcharts-tooltip-series-group"
                      // style="order: 4; display: none;"
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        // style="background-color: rgba(0, 227, 150, 0.85);"
                      ></span>
                      <div
                        className="apexcharts-tooltip-text"
                        // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label">
                            Male:{" "}
                          </span>
                          <span className="apexcharts-tooltip-text-y-value">
                            2
                          </span>
                        </div>
                        <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label"></span>
                          <span className="apexcharts-tooltip-text-goals-value"></span>
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label"></span>
                          <span className="apexcharts-tooltip-text-z-value"></span>
                        </div> 
                      </div> 
                    </div>*/}
                </div>
                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                  <div className="apexcharts-yaxistooltip-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statstics;
