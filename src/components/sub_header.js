import React, { useState, useEffect} from "react"
import styled from "styled-components"
import { FONTS, COLORS, MEDIA } from "../shared";

const data = [
  {
    name: "Test 1",
    link: "/med/test_page1/"
  },
  {
    name: "Another Page",
    link: "/med/another-page/"
  },
  {
    name: "Sub Page 3",
    link: "/med/sub-page3/"
  }
]
export default function SubHeader({ page }) {
  console.log(page)
  return (
    <Wapper>
      <Container>
        {
          data.map(i => {
            console.log(i.link)
            return(
            <P key={i.name} href={i.link} active={i.link === page}>{i.name}</P>)})
        }
      </Container>
    </Wapper>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: ${COLORS.brownLight};
`

const P = styled.a`
  ${FONTS.CircularStd}
  color: ${props => props.active ? COLORS.brownDark : COLORS.brownDark };
  margin-top: -25px;
  background-color: ${props => props.active ? COLORS.gold : "transparent" };
  padding: 5px 1rem;
  border-radius: 5px;
  outline: 1px solid ${props => props.active ? "transparent" : "rgba(255,255,255,0.5)"};
  outline-offset: 1px;
`
