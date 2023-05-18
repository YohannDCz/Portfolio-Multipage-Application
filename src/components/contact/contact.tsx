import { Header } from '../shared/header'
import { PanelStack } from '../shared/panel-stack';
import { PanelProjects } from '../shared/panel-projects';
import { Footer } from '../shared/footer'
import { Form } from '../contact/form';

function Contact() {

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

export default Contact