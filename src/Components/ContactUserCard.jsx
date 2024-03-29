import profileImg from "../profile.png";

export default function ContactUserCard({contact}) {
  
  return (
    <div className="contact-card card">
      <img className="contact-avatar" src={profileImg} />
      <div className="contact-details">
        <h2>{contact.firstName} {contact.lastName}</h2>
        <h3>{contact.position}</h3>
        <span>{contact.headline}</span>
      </div>
    </div>
  )
}