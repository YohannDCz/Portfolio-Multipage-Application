import { Header } from './components/header'
import Hero from './components/hero'
import { SplitScreens } from './components/splitscreens-home'
import Tagline from './components/tagline'
import About from './components/about'
import { PanelProjects } from './components/panel-projects'
import { PanelStack } from './components/panel-stack';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Tagline />
      <About />
      <SplitScreens />
      <PanelProjects />
      <PanelStack />
    </> 
  )
}

export default App
