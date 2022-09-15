import React from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { IData } from "../types/types";

export default function withLoader(Element, url: string) {
  return (props) => {
    /* Add logic to:
    1. Fetch data from the url that was passed as an argument.
    2. Show the <LoadingSpinner /> while the  data is being fetched.
    3. Pass the fetched data to the wrapped component.
    */
    const [data, setData] = React.useState<IData | null>(null);

    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    }, []);
    if (!data) return <LoadingSpinner />;
    return <Element {...props} listings={data.listings} />;
  };
}
