import { useEffect } from "react";
import { SplitScreen } from "../home/splitscreens-home";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions';

interface SplitScreenProps {
  title: string;
  description: string;
  image: string;
  link: string;
  qrcode: string;
}

interface RootState {
  data: any;
  shortData: any;
  stackData: any;
}

export function SplitScreens() {

  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <section id="splitscreen">
      {data?.description?.map(({title, description, image, link, qrcode}: SplitScreenProps) => (
        <SplitScreen key={title} title={title} description={description} image={image} link={link} qrcode={qrcode} />
      ))}
    </section>
  )
}