import ContactUserCard from "./ContactUserCard.jsx";

export default function Contacts({contactsList}) {

  return(
    <section className="contacts">
      <h2>Contacts</h2>

      {contactsList.map((contact) => (
        <ContactUserCard contact={contact} key={contact.contactId}/>
      ))}
    </section>
  )
}