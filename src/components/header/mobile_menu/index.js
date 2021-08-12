import React, { useState } from "react";
import { instanceOf, string, func } from "prop-types";
import styled from "styled-components";
import { MenuSVG, SearchSVG } from "../../../assets/svgs/icons";
import SubNav from "../components/sub_nav";
import MobileSubNav from "./mobile_sub_nav";
import { Span } from "../desk_menu/nav_top";
import { COLORS, MEDIA } from "../../../shared";

export default function MobileMenu({ data, activeMenu, setActiveMenu }) {
  const [show, setShow] = useState(false);

  return (
    <Wraper>
      <div
        css={`
          display: flex;
        `}
      >
      <Span>
        <a href="https://events.brown.edu/">My Dashboard</a>
      </Span>
        <SearchWrap>
          <a href="https://www.brown.edu/search?q=">
            <SearchSVG
              width="15"
              fill={COLORS.brown}
              css={`
                transform: translate(0, 3px);
              `}
            />
          </a>
        </SearchWrap>
        <MenuWrap onClick={() => setShow(!show)}>
          <MenuSVG
            width="15"
            stroke="white"
            css={`
              transform: translate(80%, 70%);
            `}
          />
        </MenuWrap>
      </div>
      <MobileSubNav data={data} show={show} />
    </Wraper>
  );
}

const Wraper = styled.div`
  display: none;

  ${MEDIA.smallScreen} {
    display: flex;
    z-index: 6;
    margin: auto 0;
  }
`;

const SearchWrap = styled.div`
  margin: 0.5rem 1rem;
  padding-left: 1rem;
  border-left: 1px solid #ededed;
`;

const MenuWrap = styled.div`
  background-color: ${COLORS.red};
  margin: auto 0;
  height: 40px;
  width: 40px;
`;

MobileMenu.propTypes = {
  data: instanceOf(Object).isRequired,
  activeMenu: string,
  setActiveMenu: func.isRequired
};

MobileMenu.defaultProps = {
  activeMenu: ""
};
