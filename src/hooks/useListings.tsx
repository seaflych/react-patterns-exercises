import React from "react";
import { IList } from "../types/types";

export default function useListings() {
  const [listings, setListings] = React.useState<null | IList[]>(null);

  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return listings;
}
