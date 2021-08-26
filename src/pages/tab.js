import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import data from "../assets/data/med_nav";

const Alumni = () => (
  <Layout>
    <Seo title="Today@Brown" />
    <Header data={data} page={"Today@Brown"} />
  </Layout>
)

export default Alumni
