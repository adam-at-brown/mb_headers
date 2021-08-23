import React, { useState } from "react";
import { bool, instanceOf } from "prop-types";
import styled from "styled-components";
import { ChevronDownSVG } from "../../../assets/svgs/icons";
import { Give } from "../desk_menu/nav_top";
import { COLORS, FONTS } from "../../../shared";

export default function MobileSubNav({ data, show }) {
  const [open, setOpen] = useState(false);

  function handleClick(index) {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  }

  return (
    <NavList show={show}>
      {data[1].navListbottom.map((item, index) => {
        return (<>{item.name !== "" &&
          <Btn type="button" key={item.name} onClick={() => handleClick(index)}>
            <TitleWrap active={open === index}>
              <Title index={index} active={open === index}>
                {item.name}
              </Title>
              <ChevWrap active={open === index}>
                <ChevronDownSVG width="20" />
              </ChevWrap>
            </TitleWrap>
            <ul
              css={`
                list-style: none;
                margin: 0;
              `}
            >
              {item.children?.map(child => {
                return (
                  <LI key={child.name} open={open === index}>
                    <Link href={child.link}>{child.name}</Link>
                  </LI>
                );
              })}
            </ul>
          </Btn>
        }</>);
      })}
      <br />
      <p
        css={`
          margin-top: 1rem;
        `}
      >
        <a href="https://www.brown.edu/about">Feedback</a>
      </p>
      <Give>
        <a href="https://brunonia.brown.edu/giving">Profile</a>
      </Give>
    </NavList>
  );
}

const NavList = styled.div`
  position: absolute;
  top: 68px;
  left: 0px;
  background: white;
  width: 100%;
  margin: 0;
  padding: 1rem;
  min-height: 100vh;
  height: 100%;
  overflow: scroll;
  display: ${props => (props.show ? "block" : "none")};
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid
    ${props => (props.active ? "transparent" : COLORS.greyLight)};
`;

const Btn = styled.button`
  width: 100%;
  background-color: transparent;
  border: 0;
`;

const Title = styled.p`
  margin: 1rem 0;
  padding: 0.5rem 0;
  font-weight: 700;
  color: #000;
  font-size: 1.5rem;
  color: ${props => (props.active ? COLORS.red : COLORS.brown)};
`;

const LI = styled.li`
  display: ${props => (props.open ? "block" : "none")};
  border-bottom: 1px solid ${COLORS.greyLight};
  padding-bottom: 0.5rem;
`;

const ChevWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => (props.active ? COLORS.red : COLORS.greyLight)};
  margin: auto 0;

  svg {
    fill: ${props => (props.active ? "white" : "black")};
    transform: rotate(${props => (props.active ? `180deg` : `0`)});
    margin: 0.3rem 0 0 0;
  }
`;

const Link = styled.a`
  font-weight: 700;
  padding: 11px 18px;
  ${FONTS.CircularStd}
  font-size: 14px;
  width: 100%;
`;

MobileSubNav.propTypes = {
  show: bool.isRequired,
  data: instanceOf(Array).isRequired
};
