import { Header } from './components/shared/header'
import { PanelStack } from './components/shared/panel-stack';
import { PanelProjects } from './components/shared/panel-projects';
import { Footer } from './components/shared/footer'
import { Form } from './components/contact/form';

function App() {

  return (
    <>
      <Header />
      <Form />
      <PanelProjects />
      <PanelStack />
      <Footer />
    </> 
  )
}

export default App
