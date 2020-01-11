import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, author, date } = frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <h4>Por {author}</h4>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/">Go to home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        path
      }
    }
  }
`

export default IndexPage
