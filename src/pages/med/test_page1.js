import * as React from "react"
import Header from "../../components/header"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SubHeader from "../../components/sub_header"
import data from "../../assets/data/med_nav";

const MedTest1 = () => (
  <Layout>
    <Seo title="Medical Student | Test Page 1" />
    <Header data={data} />
    <SubHeader page="/med/test_page1/" />
  </Layout>
)

export default MedTest1
