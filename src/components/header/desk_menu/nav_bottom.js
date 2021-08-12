import React from "react";
import { instanceOf, string, func } from "prop-types";
import styled from "styled-components";
import { SearchSVG } from "../../../assets/svgs/icons";
import { COLORS } from "../../../shared";
import SubNav from "../components/sub_nav";

export default function NavBottom({ data, activeMenu, setActiveMenu }) {
  return (
    <nav>
      <NavList>
        {data[1].navListbottom.map(item => {
          const { name, link, children } = item;
          return children ? (
            <SubNav
              links={item}
              key={name}
              bold
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          ) : (
            <Span key={name}>
              <a href={link}>{name}</a>
            </Span>
          );
        })}
        <Search
          href="https://www.brown.edu/search?q="
          aria-label="Search Page"
          onFocus={() => setActiveMenu(null)}
        >
          <span className="screen-reader-only">Search Page</span>
          <SearchIcon />
        </Search>
      </NavList>
    </nav>
  );
}

const NavList = styled.div`
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  font-size: 14px;
  text-align: center;
  margin:  0;
  visibility: ${props => (props.show ? "hidden" : "visible")};
  height: ${props => (props.show ? "0" : "100%")};
  margin-top: 1rem;
  width: 100%;
`;

const Span = styled.span`
  letter-spacing: 1.2px;
  font-style: italic;

  a {
    color: inherit;
    transition: color 0.25s;

    &:hover {
      color: ${COLORS.red};
    }
  }

  &:after {
    content: "";
    display: block;
    width: 0%;
    margin-top: -5px;
    border-bottom: 1.5px solid black;
    transition: 0.5s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Search = styled.a`
  background-color: ${COLORS.red};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: 10px;
`;

const SearchIcon = styled(SearchSVG)`
  width: 15px;
  fill: white;
  margin-top: 12px;
`;

NavBottom.propTypes = {
  data: instanceOf(Array).isRequired,
  activeMenu: string,
  setActiveMenu: func.isRequired
};

NavBottom.defaultProps = {
  activeMenu: ""
};
