import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the another page</h1>
    <p>Welcome here too!</p>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default SecondPage
