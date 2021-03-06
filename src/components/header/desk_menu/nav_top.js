import React from "react";
import { Link } from "gatsby"
import { bool, instanceOf, string, func } from "prop-types";
import styled from "styled-components";
import { ChevronDownSVG } from "../../../assets/svgs/icons";
import { FONTS, COLORS, MEDIA } from "../../../shared";
import SubNav from "../components/sub_nav";

export default function NavTop({ data, show, activeMenu, setActiveMenu }) {
  return (
    <Nav>
      <NavList show={show}>
        <Give>
          <Link to="/">Dashboard</Link>
        </Give>
        <Span>
          <Link to="/">Feedback</Link>
        </Span>
        {data && data[0].navListTop.map(item => {
          return item.children ? (
            <SubNav
              links={item}
              key={item.name}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              bold
            />
          ) : (
            ""
          );
        })}
      </NavList>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 350px;
  margin-left: auto;
`;

const NavList = styled.div`
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  font-size: 14px;
  text-align: center;
  margin: 0;
  visibility: ${props => (props.show ? "hidden" : "visible")};
  height: ${props => (props.show ? "0" : "100%")};
`;

export const Span = styled.span`
  letter-spacing: 1px;
  font-size: 16px;
  ${FONTS.CircularStd}
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 10px;

  a {
    color: inherit;
    transition: color 0.25s;
    color: ${props => props.active ? COLORS.red : "inherit"};
    border-bottom: 2.5px solid ${props => props.active ? COLORS.brownDark : "transparent"};

    &:hover {
      color: ${COLORS.red};
    }
  }

  &:after {
    content: "";
    display: block;
    width: 0%;
    margin-top: -5px;
    border-bottom: 2.5px solid ${props => props.active ? "transparent" : COLORS.brown };
    transition: 0.5s;
  }

  &:hover:after {
    width: 100%;
  }

  ${MEDIA.smallScreen} {
    align-self: center;
    letter-spacing: 0.8px;
    font-size: 14px;
  }
`;

export const Give = styled(Span)`
  color: ${COLORS.red};
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;

  a {
    font-style: normal;
    ${FONTS.CircularStd}
  }
`;

NavTop.propTypes = {
  show: bool.isRequired,
  data: instanceOf(Array).isRequired,
  activeMenu: string,
  setActiveMenu: func.isRequired
};

NavTop.defaultProps = {
  activeMenu: ""
};
