import { useState, useEffect } from "react";
interface SplitScreenProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function SplitScreen({title, description, image, link}: SplitScreenProps) {
    return (
    <div className="box">
      <div className="wrapper images-box">
        <img src={image} className="screenshots" />
        <img className="qrcode" src="/icons/QRcodes/qrcode1.png" alt="" />
      </div>
      <div className="wrapper text-box">
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={link}><button className="seemore">SEE MORE</button></a>
        </div>
      </div>
    </div>
    )
  }

// interface MyState {
//   [key: string]: Array<any>;
// }

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
      {data?.description?.slice(0, 3).map(({title, description, image, link}: SplitScreenProps) => (
        <SplitScreen key={title} title={title} description={description} image={image} link={link} />
      ))}
    </section>
  )
}