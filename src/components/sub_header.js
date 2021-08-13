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
    <Wapper>
      <Container>
        {
          data.map(i => {
            return(
            <P key={i.name} href={i.link}>{i.name}</P>)})
        }
      </Container>
    </Wapper>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.red};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

const Wapper = styled.div`
  height: 100px;
  width: 100%;
  padding:  160px 4rem 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.red};
`

const P = styled.a`
  ${FONTS.CircularStd}
  color: white;
  margin-bottom: .8rem;
  margin-top: -19px;
`
