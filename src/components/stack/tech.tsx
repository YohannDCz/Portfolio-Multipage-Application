import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataStack } from '../../redux/actions';
interface ItemProps {
  title: string;
  description: string;
  image: string;
}

interface RootState {
  data: any;
  shortData: any;
  stackData: any;
}

export function Tech() {

  const stackData = useSelector((state: RootState) => state.stackData);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchDataStack());
  }, [dispatch]);
  
  return (
    <div className="tech">
      <div className="stacktitle">
        <h2>STACK TECHNIQUE UTILISÉE</h2>
        <div className="stack">
          {stackData?.tech?.map(({title, description, image}: ItemProps) => (
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
