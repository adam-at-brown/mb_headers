import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import data from "../assets/data/alumni_nav";

const Alumni = () => (
  <Layout>
    <Seo title="Alumni Only" />
    <Header data={data} />
  </Layout>
)

export default Alumni
