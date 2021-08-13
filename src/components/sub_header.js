import React from "react"
import styled from "styled-components"
import { FONTS, COLORS, MEDIA } from "../shared";

const data = [
  {
    name: "Test 1",
    link: "/med/test_page1"
  },
  {
    name: "Another Page",
    link: "/med/another-page"
  },
  {
    name: "Sub Page 3",
    link: "/med/sub-page3"
  }
]

export default function SubHeader() {
  return (
    <Container>
      {
        data.map(i => {
          return(
          <P key={i.name} href={i.link}>{i.name}</P>)})
      }
    </Container>
  )
}

const Container = styled.div`
  height: 100px;
  width: 100%;
  padding:  160px 4rem 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.red};
  padding-top: 160px;
`

const P = styled.a`
  ${FONTS.CircularStd}
  color: white;
  margin-bottom: 1.45rem;
`
