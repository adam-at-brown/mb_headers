import React from "react"
import styled from "styled-components"
import { FONTS, COLORS, MEDIA } from "../shared";

const data = [
  "Test 1",
  "Another Page",
  "Sub Page 3"
]

export default function SubHeader() {
  return (
    <Container>
      {
        data.map(i => {
          return(
          <P key={i} href="#">{i}</P>)})
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
