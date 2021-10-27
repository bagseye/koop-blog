import React from "react"
import PostList from "../components/PostList"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

const Index = () => {
  const response = useStaticQuery(getPosts)

  const posts = response.allMdx.edges

  return (
    <Layout>
      <hr className="separator separator__large" />
      <h1>
        Powered by GatsbyJS <br />
        and MDX
      </h1>
      <hr className="separator" />
      <PostList posts={posts} />
    </Layout>
  )
}

export default Index
