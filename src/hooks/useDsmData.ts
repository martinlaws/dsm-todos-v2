import { useState, useEffect } from "react";
import { defaultCssProperties, Color, ColorPalette } from "../constants";

export function useDsmData() {
  const [cssProperties, setCssProperties] = useState(defaultCssProperties);
  const [dsmData, setDsmData] = useState(JSON.parse("{}"));

  useEffect(() => {
    fetch(
      "https://projects.invisionapp.com/dsm-export/low-tide/milk-dud/style-data.json?exportFormat=list&key=H1AY3v6_4"
    )
      .then((response) => {
        if (response.status !== 200) {
          console.error(
            `API ERROR, DSM responded with code: ${response.status}`
          );
        }

        response.json().then((data) => {
          const newStyles = {};

          setDsmData(data);

          data.list.colors.map((colorPalette: ColorPalette) =>
            colorPalette.colors.map((color: Color) => {
              return (newStyles[`--${color.name}`] = color.value);
            })
          );

          return setCssProperties(Object.assign(newStyles, cssProperties));
        });
      })
      .catch((error) => {
        console.error(`API ERROR: ${error}`);
      });
  });

  return { dsmData, cssProperties };
}
