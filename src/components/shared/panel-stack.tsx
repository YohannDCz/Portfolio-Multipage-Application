import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataStack } from '../../redux/actions';
interface TechProps {
  image: string;
  title: string;
}

function Tech({image, title}: TechProps) {
  return <div className="item">
    <img src={image} alt="" className="image" />
    <p>{title}</p>
  </div>;
}

interface RootState {
  data: any;
  shortData: any;
  stackData: any;
}
export function PanelStack() {
  
  // const [data, setData] = useState<any>({});

  // const getData = () =>  {
  //   fetch('/data-stack.json')
  //   .then((response) => response.json())
  //   .then((data1) => {
  //     setData(data1)
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching JSON:', error);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  //   carouselStack()
  // })

  const stackData = useSelector((state: RootState) => state.stackData);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchDataStack());
  }, [dispatch]);
  return (
    <div className="panel-stack">
      <div className="titleseemore">
        <div className="title">STACK TECHNOLOGIQUE</div>
        <a href="/stack"><div className="seemore">Voir plus...</div></a>
      </div>
      <div className="stackarrow carousel">
        <img className="arrow leftarrow" src="/icons/arrow.png" alt="The left arrow."  style={{transform: "rotate(180deg"}}/>
        <div className="cards">
          <div className="stack items">
            {stackData?.tech?.map(({image, title}: TechProps) =>
              <Tech image={image} title={title} />
            )}
          </div>
        </div>
        <img className="arrow rightarrow" src="/icons/arrow.png" alt="The right arrow."/>
      </div>
    </div>
  )
}