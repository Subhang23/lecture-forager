import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import VideoCards from "../../components/VideoCards";
import "./index.css";

export default function VideoList() {
  const [data, setData] = useState([]);

  let dummyData = [
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "1",
    },
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "2",
    },
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "3",
    },
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "4",
    },
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "5",
    },
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "6",
    },
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "7",
    },
    {
      title: "I suck",
      image: "../../public/test.jpg",
      body: "Lol lol lollolollolloolol  lolololololo",
      tags: ["anime", "shonen", "heroes"],
      id: "8",
    },
  ];

  useEffect(() => {
    // API call to get data
    setTimeout(() => {
      setData(dummyData);
    }, 2000);
  }, []);

  return (
    <div>
      {!data.length && (
        <div className="gif_loader">
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        </div>
      )}
      {data.length && <VideoCards data={data} />}
    </div>
  );
}
