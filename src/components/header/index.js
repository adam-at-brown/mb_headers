import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MEDIA, MAXWIDTH } from "../../shared";
import Logo from "./components/logo";
import DesktopMenu from "./desk_menu";
import MobileMenu from "./mobile_menu";

export default function Headrer({ data }) {
  const [scrollMark, setScrollMark] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollCheck = () => {
        setScrollMark(window.pageYOffset);
      };
    function watchScroll() {
      window.addEventListener("scroll", scrollCheck);
    }
    watchScroll();
    return () => window.removeEventListener("scroll", scrollCheck);
  }},[]);

  const show = scrollMark > 200;

  return (
    <Wrap show={show}>
      <Head>
        <Logo show={show} />
        <DesktopMenu
          data={data}
          show={show}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        <MobileMenu
          data={data}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </Head>
    </Wrap>
  );
}

const Wrap = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  padding: 0 1rem;
  z-index: 3;

  ${props =>
    props.show
      ? `box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035)`
      : ""};

  ${MEDIA.tablet} {
    padding: 0;
  }
`;

const Head = styled.div`
  max-width: ${MAXWIDTH};
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  ${MEDIA.largeScreen} {
    padding: 1rem 0;
  }

  ${MEDIA.tablet} {
    padding: 1rem 0;
  }
`;
