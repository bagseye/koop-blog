import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            image
            siteAuthor
            siteAuthorUrl
            twitterUsername
            facebookName
            instagramName
            linkedinName
          }
        }
      }
    `
  )
  return site.siteMetadata
}
