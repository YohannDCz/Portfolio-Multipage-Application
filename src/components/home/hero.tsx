
import { useRef, useEffect } from "react";

export default function Hero() {
  
  const scene = useRef(null);

  useEffect(()=> {
    const parallax = new Parallax(scene.current);
  }, [])

  return (
    <section id="hero">
      <div className="container">
        <div id="scene" ref={scene}>
          <div className="layer" data-depth-x="-0.5" data-depth-y="0.25"><img src="/hero/moon.png" className="moon" /></div>
          <div className="layer" data-depth-x="0.15"><img src="/hero/mountains02.png" /></div>
          <div className="layer" data-depth-x="0.25"><img src="/hero/mountains01.png" /></div>
          <div className="layer" data-depth-x="-0.25"><img src="/hero/road.png" /></div>
        </div>
      </div>
      <div className="welcome">
        <h1>BIENVENUE!</h1>
        <p>Bonjour et bienvenue sur le Portfolio de Yohann Di Crescenzo. Si vous êtes en quête d’un travail bien fait, vous êtes au bon endroit. Bonne recherche !</p>
      </div>

    </section>
  )
}