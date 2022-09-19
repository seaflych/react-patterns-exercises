import React from "react";
import useListings from "../hooks/useListings";
import { IList } from "../types/types";

const ListingsContext = React.createContext<null | IList[]>(null);

export function useListingsContext() {
  const context = React.useContext(ListingsContext);
  return context;
}

export function ListingsProvider(props) {
  const listings = useListings();
  if (listings) {
    return (
      <ListingsContext.Provider value={listings}>
        {props.children}
      </ListingsContext.Provider>
    );
  }
}
