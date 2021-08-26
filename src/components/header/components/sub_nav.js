import React, { useState } from "react";
import { instanceOf, func, string } from "prop-types";
import styled, { keyframes } from "styled-components";
import { ChevronDownSVG } from "../../../assets/svgs/icons";
import { COLORS, FONTS, MEDIA } from "../../../shared";

export default function SubNav({ links, activeMenu, setActiveMenu }) {
  const [show, setShow] = useState(false);
  const [jump, setBounce] = useState(false);
  const { name } = links;

  function Show() {
    setShow(true);
    setActiveMenu(name);
  }

  function Hide() {
    setShow(false);
    setActiveMenu(null);
  }

  return (
    <Btn
      onMouseEnter={Show}
      onFocus={Show}
      onMouseLeave={Hide}
      onClick={() => setShow(!show)}
      style={{ position: "relative" }}
      role="navigation"
      aria-label={`${name} menu`}
    >
      {links.name === "Spaces" ? (
        <LI
          onMouseEnter={() => setBounce(true)}
          onMouseLeave={() => setBounce(false)}
          style={{ margin: "0 25px 0 5px" }}
        >
          {name}
          <ChevBounce jump={jump}>
            <ChevronDownSVG width="15" />
          </ChevBounce>
        </LI>
      ) : (
        <LI>{name}</LI>
      )}
      <Nav show={show && activeMenu === name}>
        {links.children.map(link => {
          return (
            <A key={link.name} href={link.link}>
              <li
                key={link.name}
                css={`
                  margin-bottom: 0;
                `}
              >
                {link.name}
              </li>
            </A>
          );
        })}
      </Nav>
    </Btn>
  );
}

const bounce = keyframes`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-3px); }
  50%  { transform: scale(1,1)    translateY(0); }
  57%  { transform: scale(1,1)    translateY(-1px); }
  64%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`;

const ChevBounce = styled.span`
  position: absolute;
  top: 0;
  left: 72px;

  &:hover {
    animation: ${bounce} 0.5s ease;
  }

  ${MEDIA.tablet} {
    left: 60px;

    svg {
      fill: ${COLORS.brown};
    }
  }
`;

const Nav = styled.ul`
  position: absolute;
  background-color: #fff;
  min-width: 250px;
  z-index: 2;
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  border: 1px solid ${COLORS.greyLight};
  text-align: left;
  left: -75px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  ${MEDIA.tablet} {
    margin: 1rem auto;
  }
`;

const Btn = styled.button`
  background-color: transparent;
  position: relative;
  border: 0;
  height: 100%;
  padding: 0;
  outline: 0;

  ${MEDIA.smallScreen} {
    margin: auto 5px;
  }
`;

const A = styled.a`
  border-bottom: 1px solid ${COLORS.greyLight};
  padding: 0.8rem;
  margin-bottom: 0;
  ${FONTS.CircularStd};
  ${FONTS.bold}
  font-size: 14px;
  text-transform: normal;

  :hover {
    background-color: #fafafa;
    color: ${COLORS.red};
  }
`;

const LI = styled.p`
  position: relative;
  margin-bottom: 1rem;
  text-transform: uppercase;
  ${FONTS.bold};
  ${FONTS.CircularStd};
  margin: 0 10px;
  font-size: 16px;
  letter-spacing: 1px;

  ${MEDIA.smallScreen} {
    font-size: 12px;
    color: ${COLORS.brown};
    margin: auto 5px;
  }
`;

SubNav.propTypes = {
  links: instanceOf(Object).isRequired,
  activeMenu: string,
  setActiveMenu: func.isRequired
};

SubNav.defaultProps = {
  activeMenu: ""
};
