import React from "react";
import { useListingsContext } from "../context/ListingsProvider";
import { FlyOut } from "./FlyOut";

export default function Input(props) {
  const listings = useListingsContext();

  return (
    <FlyOut>
      <FlyOut.Input />
      <FlyOut.List>
        {listings &&
          listings.map((listing) => (
            <FlyOut.ListItem value={listing.name} key={listing.id}>
              {listing.name}
            </FlyOut.ListItem>
          ))}
      </FlyOut.List>
    </FlyOut>
  );
}
