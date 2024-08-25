import React from "react";

const StarHalf = ({ style = {}, className = "" }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 123.38 117.69"
      style={{ enableBackground: "new 0 0 123.38 117.69", ...style }}
      className={className}
      xmlSpace="preserve"
    >
      <style type="text/css">
        {`.st0{fill-rule:evenodd;clip-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-miterlimit:2.6131;}`}
      </style>
      <g>
        <path
          className="st0"
          d="M64.64,2.22l15.71,36.79l39.85,3.58c1.76,0.15,3.06,1.7,2.91,3.46c-0.07,0.86-0.48,1.6-1.08,2.13L91.89,74.5
          l8.92,39.02c0.39,1.72-0.68,3.44-2.41,3.84c-0.88,0.2-1.76,0.02-2.47-0.44L61.69,96.44l-34.35,20.54c-1.52,0.91-3.48,0.41-4.39-1.1
          c-0.44-0.74-0.55-1.58-0.37-2.35l0,0l8.92-39.02L1.34,48.17c-1.33-1.16-1.46-3.18-0.3-4.51c0.59-0.68,1.4-1.04,2.24-1.09
          l39.75-3.57L58.75,2.2c0.69-1.63,2.57-2.38,4.2-1.69C63.74,0.85,64.33,1.48,64.64,2.22L64.64,2.22z M61.69,11.6l13.53,31.67l0.01,0
          c0.45,1.05,1.45,1.83,2.67,1.93l34.31,3.08L86.37,70.83c-0.95,0.74-1.44,1.99-1.15,3.24l7.68,33.58L63.39,90
          c-0.51-0.32-1.1-0.49-1.7-0.49V11.6L61.69,11.6z"
        />
      </g>
    </svg>
  );
};
export default StarHalf;

export const Star = ({ className = "", style = {} }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 117.19"
      className={className}
      style={style}
    >
      <title>black-star</title>
      <path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z" />
    </svg>
  );
};