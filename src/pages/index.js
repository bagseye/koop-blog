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

const Index = (props) => {
  const response = useStaticQuery(getPosts)

  console.log(props)

  const driverStandingSource =
    props.serverData[0].MRData.StandingsTable.StandingsLists[0]
      .DriverStandings[0]

  const driverFirstname = driverStandingSource.Driver.givenName
  const driverSurname = driverStandingSource.Driver.familyName
  const driverPoints = driverStandingSource.points
  const driverTeam = driverStandingSource.Constructors[0].name

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
      <h3>Did you know?</h3>
      <p>{`In ${props.serverData[1]} ${driverFirstname} ${driverSurname} of ${driverTeam} won the Formula 1 Drivers Championship with ${driverPoints} points.`}</p>
    </Layout>
  )
}

export default Index

export async function getServerData() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
  }
  let ranSeason = getRandomIntInclusive(1950, 2021)
  try {
    const res = await fetch(
      `http://ergast.com/api/f1/${ranSeason}/driverStandings.json`
    )

    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    return {
      props: [await res.json(), ranSeason],
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
