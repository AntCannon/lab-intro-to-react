import profileImg from "../profile.png";

export default function UserProfile({user}) {
  
  return (
    <section className="user">
      <div className="user-card card">
        <img className="user-avatar avatar" src={profileImg} />
        <div className="user-details">
          <h2>{user.firstName} {user.lastName}</h2>
          <h3>{user.position}</h3>
          <span>{user.headline}</span>
        </div>
      </div>
    </section>
  )
}