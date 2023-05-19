import { useEffect } from "react";
import { SplitScreen } from "../home/splitscreens-home";
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions';

interface SplitScreenProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface reduxProps {
  data: any;
  fetchData: any;
}

export function SplitScreens({ data, fetchData }: reduxProps) {

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <section id="splitscreen">
      {data?.description?.map(({title, description, image, link}: SplitScreenProps) => (
        <SplitScreen key={title} title={title} description={description} image={image} link={link} />
      ))}
    </section>
  )
}

const mapStateToProps = (state: any) => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(SplitScreens);