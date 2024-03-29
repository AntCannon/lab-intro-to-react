import profileImg from "../profile.png";

export default function ContactUserCard({contact}) {
  
  return (
    <div className="contact-card card">
      <img className="contact-avatar avatar" src={contact.avatar} alt={contact.firstName} />
      <div className="contact-details">
        <h3>{contact.firstName} {contact.lastName}</h3>
        <h4>{contact.position}</h4>
        <span>{contact.headline}</span>
      </div>
    </div>
  )
}