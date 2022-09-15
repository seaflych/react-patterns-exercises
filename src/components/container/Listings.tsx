import React from "react";
import type { IData } from "../../types/types";
import Listings from "../presentational/Listings";

export default function ListingsContainerComponent() {
  // 1. Render the Listings component and pass the fetched data.
  const [data, setData] = React.useState<IData | null>(null);

  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  if (!data) return null;
  return <Listings listings={data.listings} />;
}
