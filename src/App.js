import { useEffect, useState } from "react";
import "./styles.css";
import { Carousel } from "./components/Carousel";

export default function App() {
  const slides = [
    "https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg",
    "https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg",
    "https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg",
    "https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg"
  ];

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="container">
      <Carousel slides={slides} />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}
