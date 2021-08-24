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
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

const Wapper = styled.div`
  height: 100px;
  width: 100%;
  padding:  160px 0rem 0.2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.brownLight};
  border-bottom: 5px solid ${COLORS.gold}
`

const P = styled.a`
  ${FONTS.CircularStd}
  color: ${props => props.active ? COLORS.brownDark : "white" };
  background-color: ${props => props.active ? COLORS.gold : COLORS.brownDark };
  padding: 5px 1rem;
  border-radius: 5px 20px 0 0;
  margin-top: -28px;
`
