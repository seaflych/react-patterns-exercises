import React from "react";
import { INumberInput } from "../../types/types";

export function Kelvin({ value }: INumberInput) {
  return (
    <div className="temp-card">
      The temperature in Kelvin is: <span className="temp">{value}K</span>
    </div>
  );
}

export function Fahrenheit({ value }: INumberInput) {
  return (
    <div className="temp-card">
      The temperature in Fahrenheit is:
      <span className="temp">{value}°F</span>
    </div>
  );
}

interface ITemperatureConverterProps {
  renderKelvin: (p: INumberInput) => JSX.Element;
  renderFahrenheit: (p: INumberInput) => JSX.Element;
}

export default function TemperatureConverter(
  props: ITemperatureConverterProps
) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </div>
  );
}
