import { useState, useEffect } from "react";

interface ItemProps {
  title: string;
  description: string;
  image: string;
}

export function Tech() {

  const [data, setData] = useState<any>({});

  const getData = () =>  {
    fetch('/data-stack.json')
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
    <div className="tech">
      <div className="stacktitle">
        <h2>STACK TECHNIQUE UTILISÉE</h2>
        <div className="stack">
          {data?.tech?.map(({title, description, image}: ItemProps) => (
          <Item key={title} title={title} description={description} image={image} />
        ))}
        </div>
      </div>
    </div>
  )
}

function Item({title, description, image}: ItemProps) {
  return <div className="item">
    <img src={image} alt="" className="image" />
    <div className="text">
      <h3>{title}</h3>
      <div className="description">{description}</div>
    </div>
  </div>;
}
