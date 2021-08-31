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
            twitterUsername
            facebookName
            instagramName
          }
        }
      }
    `
  )
  return site.siteMetadata
}
