import React from "react";
import type { IData } from "../../types/types";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";

export default function Listings({ listings }: IData) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
