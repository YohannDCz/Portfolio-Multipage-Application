import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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

  console.log(location.pathname);

  return (
    <>
      <div className="header">
        <div className="infoleft">
          <img className="logotype" src="/logos/logotype.png" alt="The logotype of the page." />
          <div className="sections">
            <a href="/"><p className={location.pathname === '/' ? 'purple' : ''}>HOME</p></a>
            <a href="/projects"><p className={location.pathname === '/projects' ? 'purple' : ''}>PROJECTS</p></a>
            <a href="/stack"><p className={location.pathname === '/stack' ? 'purple' : ''}>STACK</p></a>
            <a href="/contact"><p className={location.pathname === '/contact' ? 'purple' : ''}>CONTACT</p></a>
        </div>
        </div>
        <img onClick={openDrawer} className="menu" src="/icons/icon_hamburger.png" alt="The hamburger icon." />
      </div>
      <div className="drawer">
        <img onClick={closeDrawer} className="cross" src="/icons/icon_cross.png" alt="The close icon." />
        <img className="logotype" src="/logos/logotype.png" alt="The logotype of the page." />
        <div className="sections">
          <a href="/"><p className={location.pathname === '/' ? 'purple' : ''}>HOME</p></a>
          <a href="/projects"><p className={location.pathname === '/projects' ? 'purple' : ''}>PROJECTS</p></a>
          <a href="/stack"><p className={location.pathname === '/stack' ? 'purple' : ''}>STACK</p></a>
          <a href="/contact"><p className={location.pathname === '/contact' ? 'purple' : ''}>CONTACT</p></a>
        </div>
      </div>
      <div className="filter"></div>
    </>
  )
}