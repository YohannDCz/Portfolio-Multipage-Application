export function Form() {

  return (
    <div className="form">
      <div className="text">
        <h2>Vous êtes recruteur ?</h2>
        <p>
          N’hésitez pas à me contacter sur
          mon adresse mail pour prendre
          contact en vue d’un entretiens
          de recrutement
        </p>
      </div>
      <form action="">
        <input placeholder="Adresse email" type="text" className="email" />
        <textarea placeholder="Message..." name="message" id="" cols={30} rows={10}></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}