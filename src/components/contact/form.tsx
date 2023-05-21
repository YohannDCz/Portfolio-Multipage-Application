import { useState } from 'react';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from './sendgridConfig';

interface mailProps {
  email: string,
  message: string
}

function sendEmail({email, message}: mailProps) {
  sgMail.setApiKey( "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" )
  const msg = {
    to: 'yohanndcz@gmail.com', // Change to your recipient
    from: email, // Change to your verified sender
    subject: 'Nouveau message de ton portfolio',
    text: message,
    html: `<strong>${message}</strong>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      // Optionally, display a success message or perform other actions
    })
    .catch((error) => {
      console.error(error);
      // Handle the error, display an error message, or perform other actions
    });
}


export function Form() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    sendEmail({email, message});
  };
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
      <form onSubmit={handleSubmit}>
        <input placeholder="Adresse email" type="text" className="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea placeholder="Message..." name="message" id="" cols={30} rows={10} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}