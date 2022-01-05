/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
   const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "jpg", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div className="bio_description">
         {author && (<>
              <p>
                <strong>{author.name}</strong>
              </p>
              <p>
                  {author?.summary || null}
          </p>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Follow me in Twitter
          </a>
            </>
          )}
      </div>
    </div>
  )
}

export default Bio
