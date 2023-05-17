import { useEffect, useState } from "react";

interface TechProps {
  image: string;
  text: string;
}

function Tech({image, text}: TechProps) {
  return <div className="item">
    <img src={image} alt="" className="image" />
    <p>{text}</p>
  </div>;
}

export function PanelStack() {
  
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
    <div className="panel-stack">
      <div className="titleseemore">
        <div className="title">STACK TECHNOLOGIQUE</div>
        <div className="seemore">Voir plus...</div>
      </div>
      <div className="stackarrow">
        <img className="arrow leftarrow" src="/icons/arrow.png" alt="The left arrow."  style={{transform: "rotate(180deg"}}/>
        <div className="stack">
          {data?.tech?.map(({image, text}: TechProps) =>
            <Tech image={image} text={text} />
          )}
        </div>
        <img className="arrow rightarrow" src="/icons/arrow.png" alt="The right arrow."/>
      </div>
    </div>
  )
}
