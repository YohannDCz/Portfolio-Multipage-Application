export function Header() {

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
            <p>HOME</p>
            <p>PROJECTS</p>
            <p>STACK</p>
            <p>CONTACT</p>
          </div>
        </div>
        <img onClick={openDrawer} className="menu" src="/icons/icon_hamburger.png" alt="The hamburger icon." />
      </div>
      <div className="drawer">
        <img onClick={closeDrawer} className="cross" src="/icons/icon_cross.png" alt="The close icon." />
        <img className="logotype" src="/logos/logotype.png" alt="The logotype of the page." />
        <div className="sections">
          <p>HOME</p>
          <p>PROJECTS</p>
          <p>STACK</p>
          <p>CONTACT</p>
        </div>
      </div>
      <div className="filter"></div>
    </>
  )
}