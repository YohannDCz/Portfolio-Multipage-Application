import { useState, useEffect } from "react";
import { SplitScreen } from "../home/splitscreens-home";

interface SplitScreenProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function SplitScreens() {

  const [data, setData] = useState<any>({});

  const getData = () =>  {
    fetch('/data.json')
    .then((response) => response.json())
    .then((data1) => {
      setData(data1)
    })
    .catch((error) => {
      console.error('Error fetching JSON:', error);
    });
  }

  useEffect(() => {
    getData();
  })
  
  return (
    <section id="splitscreen">
      {data?.description?.map(({title, description, image, link}: SplitScreenProps) => (
        <SplitScreen key={title} title={title} description={description} image={image} link={link} />
      ))}
    </section>
  )
}