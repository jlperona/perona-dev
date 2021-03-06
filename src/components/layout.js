import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div>
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      {children}
    </div>
  );
}
