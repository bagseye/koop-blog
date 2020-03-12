import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  const { title, date, author, slug } = post.frontmatter

  const img = post.frontmatter.image.childImageSharp.fluid

  return (
    <article>
      <Image fluid={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h4>{date}</h4>
      <p>{post.excerpt}</p>
      <Link to={slug}>Read</Link>
    </article>
  )
}

export default PostCard
