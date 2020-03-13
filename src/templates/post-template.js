import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid

  return (
    <Layout>
      <section>
        <Link className="btn" to="/">
          Back to all posts
        </Link>
        <div>
          <h1>{title}</h1>
          <h4>
            <span>Written by {author}</span> & Posted on <span>{date}</span>
          </h4>
        </div>
        <image fluid={img} />
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <h4>
          <span>Written by {author}</span> & Posted on <span>{date}</span>
        </h4>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
