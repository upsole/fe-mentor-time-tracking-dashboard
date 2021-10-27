import CardGrid from "../components/CardGrid";
import { useState } from "react";
import data from "../data.json";

export default function Home() {
  const [timeframes, setTimeframes] = useState("weekly");
  const filterTimeframe = (timeframe) => {
    setTimeframes(timeframe);
    return;
  };

  return <CardGrid data={data} filterfunc={filterTimeframe} timeframes={timeframes}/>;
}
