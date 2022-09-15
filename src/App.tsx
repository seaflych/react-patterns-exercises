import * as React from "react";
import "./style.css";
import Listings from "./components/Listings/Listings";
import TemperatureConverter, {
  Fahrenheit,
  Kelvin,
} from "./components/Temprature/TempratureConverter";
import { INumberInput } from "./types/types";

export default function App() {
  // return <Listings />;
  return (
    <TemperatureConverter
      renderKelvin={({ value }: INumberInput) => <Kelvin value={value} />}
      renderFahrenheit={({ value }: INumberInput) => (
        <Fahrenheit value={value} />
      )}
    />
  );
}
