import { Header } from '../shared/header'
import Hero from './hero'
import { SplitScreens } from './splitscreens-home'
import Tagline from './tagline'
import About from './about'
import { PanelProjects } from '../shared/panel-projects'
import { PanelStack } from '../shared/panel-stack';
import { Footer } from '../shared/footer'
import { connect } from 'react-redux';
import { fetchData } from '../../redux/fetcher';

function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Tagline />
      <About />
      <SplitScreens />
      <PanelProjects />
      <PanelStack />
      <Footer />
    </> 
  )
}

export default Home