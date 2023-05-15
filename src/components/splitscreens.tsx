import { useState } from "react";

export function SplitScreens() {
  const description = [
    {
      title: "PROJET VENTURA",
      description: "C’est un des premiers projet dans lequel je me suis investit. Et c’est pour cela qu’il est resté écrit en pure HTML5, CSS3 et ES6. Mes principales préoccupation on été la magnification du Dock et l’agrandissement et la manipulation des fenêtres. Il n’est pas fini.",
      image: "/screenshots/thumbnail_ventura.png"
    },
    {
      title: "PROJET KANBAN",
      description: "C’est un deuxième gros projet. Ce projet compte un management de tâche et dispose d’une allure élégante. Mes principales préoccupation on été de pourvoir retracer la tâche sélectionnée dans le contexte du JSON donné et de remplir les informations analogues à la tâche en conséquence. La partie en Redux arrive pour prendre la place des manipulation avec le localstorage.",
      image: "/screenshots/thumbnail_kanban.png"
    },
    {
      title: "PROJET MYTEAM",
      description: "C’est mon deuxième projet écrit en Flutter. Je l’ai développé en 2 jour + 1 nuit et je l’ai publié sur le Google Play Store. À l’heure qu’il est Google est en train de l’analyser pour publication. Cette app, statique, mobile et sans state management a été facile à implémenter. Je commence toujours comme ça, exception faite pour React, ou j’ai directement commencé par le Kanban. Sachez donc que les  nouveau langage et framework ne me font pas peur !",
      image: "/screenshots/thumbnail_myteam.png"
    }
  ]

  function SplitScreen({title, description, image}) {
    return (
    <div className="box">
      <div className="wrapper images-box">
        <img src={image} className="screenshots" />
        <img className="qrcode" src="/icons/QRcodes/qrcode1.png" alt="" />
      </div>
      <div className="wrapper text-box">
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
    )
  }

  const splitScreens = description.map(({ title, description, image }) => (
    <SplitScreen key={title} title={title} description={description} image={image} />
  ));
 
  return (
    <section id="splitscreen">
      {splitScreens}
    </section>
  )
}