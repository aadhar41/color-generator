import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const rgbValue = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}` || hex;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article onClick={() => navigator.clipboard.writeText(hexValue) && setAlert(true)} className={index > 10 ? "color color-light" : "color"} style={{ background: `rgb(${rgbValue})`, color: rgbValue, textTransform: "capitalize", fontWeight: "bold", padding: "0.5rem" }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className={index > 10 ? "alert color-light" : "alert"}>Copied to clipboard</p>}
    </article>
  );
}

export default SingleColor
