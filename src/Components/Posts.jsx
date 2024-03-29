import Post from "./Post.jsx";

export default function Posts({userPosts}) {
  console.log(`Posts-userPosts`, userPosts)

  return(
    <section className="posts">
      <h2>Posts</h2>
      <span>{}</span>

      {userPosts.map((post) => (
        <Post post={post} key={post.postId}/>
      ))}
    </section>
  )
}