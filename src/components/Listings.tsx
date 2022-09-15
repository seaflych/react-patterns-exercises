import React from "react";
import withLoader from "../hoc/withLoader";
import type { IList } from "../types/types";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";

export function Listings({ listings }: { listings: IList[] }) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default withLoader(
  Listings,
  "https://house-lydiahallie.vercel.app/api/listings"
);
