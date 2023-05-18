import { Header } from '../shared/header'
import { PanelProjects } from '../shared/panel-projects';
import { Footer } from '../shared/footer'
import { Tech } from './tech';

function Stack() {

  return (
    <>
      <Header />
      <Tech />
      <PanelProjects />
      <Footer />
    </> 
  )
}

export default Stack