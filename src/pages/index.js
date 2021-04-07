import React from "react"
import PostList from "../components/PostList"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
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
        excerpt
      }
    }
  }
}
`

export default () => {
  const response = useStaticQuery(getPosts)

  const posts = response.allMdx.edges

  return (
    <>
      <PostList posts={posts} />
    </>
  )
}
