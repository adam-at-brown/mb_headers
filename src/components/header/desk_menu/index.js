import React from "react";
import { bool, instanceOf, string, func } from "prop-types";
import styled from "styled-components";
import NavTop from "./nav_top";
import NavBottom from "./nav_bottom";
import { MEDIA } from "../../../shared";

export default function DeskMenu({ data, show, activeMenu, setActiveMenu, page }) {
  return (
    <NavWrap>
      <NavTop
        data={data}
        show={show}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <NavBottom
        data={data}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        page={page}
      />
    </NavWrap>
  );
}

const NavWrap = styled.div`
  ${MEDIA.smallScreen} {
    padding-right: 2rem;
    display: none;
  }

  ${MEDIA.tablet} {
    display: none;
  }
`;

DeskMenu.propTypes = {
  show: bool.isRequired,
  data: instanceOf(Array).isRequired,
  activeMenu: string,
  setActiveMenu: func.isRequired
};

DeskMenu.defaultProps = {
  activeMenu: ""
};
