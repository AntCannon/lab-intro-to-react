export default function Post({post}) {

  return (
    <article className="post">
      <h3>{post.title}</h3>
      <span>{post.post}</span>
    </article>
  )
}