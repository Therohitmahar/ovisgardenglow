import React, { useState, useEffect, useRef, useCallback } from "react";

const RangeSelector = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const sliderRef = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => {
      return Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );
  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const handleSliderClick = (event) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const percent = (event.clientX - sliderRect.left) / sliderRect.width;
    const value = Math.round(percent * (max - min) + min);

    // Determine which thumb to move based on which is closer
    if (Math.abs(value - minVal) < Math.abs(value - maxVal)) {
      setMinVal(Math.min(value, maxVal - 1));
      minValRef.current = Math.min(value, maxVal - 1);
    } else {
      setMaxVal(Math.max(value, minVal + 1));
      maxValRef.current = Math.max(value, minVal + 1);
    }
  };

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider" ref={sliderRef} onClick={handleSliderClick}>
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        {/* <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div> */}
      </div>
    </div>
  );
};

export default RangeSelector;
