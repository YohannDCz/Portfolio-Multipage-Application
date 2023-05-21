import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const openDrawer = () => {
    const drawer: any = document.querySelector(".drawer");
    drawer.style.transform = "translateX(0)";
  }

  const closeDrawer = () => {
    const drawer: any = document.querySelector(".drawer");
    drawer.style.transform = "translateX(350px)";
  }

  return (
    <>
      <div className="header">
        <div className="infoleft">
          <img className="logotype" src="/logos/logotype.png" alt="The logotype of the page." />
          <div className="sections">
            <Link to="/"><p className={location.pathname === '/' ? 'purple' : ''}>HOME</p></Link>
            <Link to="/projects"><p className={location.pathname === '/projects' ? 'purple' : ''}>PROJECTS</p></Link>
            <Link to="/stack"><p className={location.pathname === '/stack' ? 'purple' : ''}>STACK</p></Link>
            <Link to="/contact"><p className={location.pathname === '/contact' ? 'purple' : ''}>CONTACT</p></Link>
        </div>
        </div>
        <img onClick={openDrawer} className="menu" src="/icons/icon_hamburger.png" alt="The hamburger icon." />
      </div>
      <div className="drawer">
        <img onClick={closeDrawer} className="cross" src="/icons/icon_cross.png" alt="The close icon." />
        <img className="logotype" src="/logos/logotype.png" alt="The logotype of the page." />
        <div className="sections">
          <Link to="/"><p className={location.pathname === '/' ? 'purple' : ''}>HOME</p></Link>
          <Link to="/projects"><p className={location.pathname === '/projects' ? 'purple' : ''}>PROJECTS</p></Link>
          <Link to="/stack"><p className={location.pathname === '/stack' ? 'purple' : ''}>STACK</p></Link>
          <Link to="/contact"><p className={location.pathname === '/contact' ? 'purple' : ''}>CONTACT</p></Link>
        </div>
      </div>
      <div className="filter"></div>
    </>
  )
}