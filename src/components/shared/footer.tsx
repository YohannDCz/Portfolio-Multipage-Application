export function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <div className="container">
          <div className="left-info">
            <h2>Vous êtes recruteur ?</h2>
            <p>
              N’hésitez pas à me contacter sur
              mon adresse mail pour prendre
              contact en vue d’un entretien
              de recrutement.
            </p>
          </div>
          <form action="" method="POST">
            <input type="text" placeholder="email" name="email"/>
            <textarea placeholder="message..." name="message" id="" cols={30} rows={10}></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
      <div className="footerfooter">
        <div className="info">
          <div className="infoleft">
            <p>Portfolio de Y. Di Crescenzo</p>
            <p>Tout droits réservés</p>
            <p>© 2023</p>
          </div>
          <div className="inforight">
            <p>5 Rue des Jardins Dufour</p>
            <p>93100 Montreuil, France</p>
            <p>YohannDCz@gmail.com</p>
            <p>06.26.12.72.16</p>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/yohann-di-crescenzo-562aa3b4/"><img src="/icons/icon_linkedin.png" alt="Le logo de Linkedin." /></a>
            <a href="https://github.com/YohannDCz"><img src="/icons/icon_github.png" alt="Le logo de GitHub." /></a>
            <a href="https://twitter.com/YohannDCz"><img src="/icons/icon_twitter.png" alt="Le logo de Twitter." /></a>
          </div>
        </div>
      </div>
    </div>
  )
}