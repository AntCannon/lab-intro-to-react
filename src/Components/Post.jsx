export default function Post({post}) {
  console.log("Post-post", post);

  return (
    <article className="post">
      <h3>{post.title}</h3>
      <span>{post.post}</span>
    </article>
  )
}