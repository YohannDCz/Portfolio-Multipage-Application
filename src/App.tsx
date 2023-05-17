import { Header } from './components/shared/header'
import { PanelStack } from './components/shared/panel-stack';
import { Footer } from './components/shared/footer'
import Insight from './components/projects/insight';
import { SplitScreens } from './components/projects/splitscreen_project';

function App() {

  return (
    <>
      <Header />
      <Insight />
      <SplitScreens />
      <PanelStack />
      <Footer />
    </> 
  )
}

export default App
