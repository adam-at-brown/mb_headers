import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import data from "../assets/data/staff_nav";

const IndexPage = () => (
  <Layout>
    <Seo title="Staff" />
    <Header data={data} />
  </Layout>
)

export default IndexPage
