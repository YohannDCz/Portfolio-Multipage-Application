import { useState, useEffect } from "react";
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function Card({title, description, image}: CardProps) {
  return (
  <div className="card">
    <img src={image} alt="" className="thumbnail" />
    <div className="text">
      <div className="title">{title}</div>
      <div className="description">
        {description}
      </div>
    </div>
  </div>
  )
}

export function PanelProjects () {

  const [data, setData] = useState<any>({});

  const getData = () =>  {
    fetch('/data-short.json')
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
    <div className="other-project">
      <div className="titleseemore">
        <div className="title">AUTRES PROJETS</div>
        <div className="seemore">Voir plus...</div>
      </div>
      <div className="cardsarrow">
        <img className="arrow leftarrow" src="/icons/arrow.png" alt="The left arrow."  style={{transform: "rotate(180deg"}}/>
        <div className="cards">
          {data?.description?.slice(4, 10).map(({title, description, image, link}: CardProps) => (
            <Card key={title} title={title} description={description} image={image} link={link} />
          ))}
        </div>
        <img className="arrow rightarrow" src="/icons/arrow.png" alt="The right arrow."/>
      </div>
    </div>
  )
}
