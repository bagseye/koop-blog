import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import PropTypes from "prop-types"

const PostTemplateStyles = styled.section`
  h1,
  h2 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .post__body {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = getImage(image.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <PostTemplateStyles>
        <hr style={{ marginTop: 0 }} class="separator separator__large" />
        <Link className="btn" to="/">
          Back to all posts
        </Link>
        <hr class="separator" />
        <h1>{title}</h1>
        <h2>
          <span>Written by {author}</span> & Posted on <span>{date}</span>
        </h2>

        <GatsbyImage image={img} alt="Blog Post" />
        <div className="post__body">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <hr class="separator" />
        <h2>
          Posted on <span>{date}</span>
        </h2>
        <hr class="separator separator__large" />
      </PostTemplateStyles>
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`

export default PostTemplate

PostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.object,
}
