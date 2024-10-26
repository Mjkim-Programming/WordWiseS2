'use client'

import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  background-color: #a78bfa;
  width:100rem;
  height: 5rem;
  align-items: center;
`

const HeaderWrapper = styled.div`
  margin-left: 1rem;
`

const customLogo = {
  fontSize: "2rem",
  fontWeight: 550,
  textDecoration: "none",
  marginRight: "1rem"
}

const customLink = {
  fontSize: "1.3rem",
  fontWeight: 500,
  textDecoration: "none",
}

export default function Home() {
  return (
    <div>
      <Header>
        <HeaderWrapper>
          <Link href="#" style={customLogo}>WordWise</Link>
          <Link href="/designs" style={customLink}>DESIGNS</Link>
        </HeaderWrapper>
      </Header>
    </div>
  );
}
