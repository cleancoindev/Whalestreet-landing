import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div``

const Header = styled.header`
  padding: 10px 62px;
  background: var(--color-black);
  @media all and (max-width: 577px) {
    padding: 24px;
    justify-content: center;
  }

  .logo {
    height: 60px;
  }

  .links {
    margin: 12px -20px;
    @media all and (max-width: 577px) {
      margin-bottom: 0;
    }
  }
  .links a {
    color: var(--color-white);
    font-size: 16px;
    line-height: 24px;
    margin: 0 20px;
    @media all and (max-width: 577px) {
      margin: 0 12px;
    }

    &.active {
      color: var(--color-red1);
    }
  }
`

const Content = styled.div`
  flex: 1;
  overflow: hidden auto;
  position: relative;
  @media all and (max-width: 577px) {
    overflow: initial;
  }

  * {
    transition: all 0.2s;
  }

  section {
    padding-bottom: 36px;

    > p {
      font-size: 16px;
      line-height: 20px;

      max-width: 943px;
      margin: 0 auto 24px;

      @media all and (max-width: 577px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  .no-wallet {
    color: var(--color-red);

    button {
      margin-top: 24px;
    }
  }
`

const Footer = styled.footer`
  background: var(--color-blue);
  padding: 8px;

  @media all and (max-width: 577px) {
    padding: 9px;
    justify-content: center;
  }

  a {
    margin: 3px 24px;
    white-space: nowrap;
    color: var(--color-white);
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    @media all and (max-width: 577px) {
      font-size: 12px;
      line-height: 16px;
      margin: 3px 12px;
    }
  }
`

export default function Layout({ children }) {
  return (
    <Wrapper className="flex-column">
      <Header className="flex-center flex-wrap justify-between relative">
        <Link href="/">
          <img className="logo cursor" src="/assets/logo.svg" alt="WHALE STREET" />
        </Link>
        <div className="links">
          <Link href="/">
            <a className="uppercase active">Home</a>
          </Link>
          <a className="uppercase" href="https://whalestreet.xyz/" target="_blank">
            DApp
          </a>
          <a className="uppercase" href="https://blog.whalestreet.xyz/" target="_blank">
            Blog
          </a>
          <a className="uppercase" href="https://discord.com/invite/pEbSg4qp3y" target="_blank">
            Discord
          </a>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer className="flex-center justify-center flex-wrap">
        <a className="uppercase" href="https://discord.com/invite/pEbSg4qp3y" target="_blank">
          Discord
        </a>
        <a className="uppercase" href="https://twitter.com/WhaleStreetoffl" target="_blank">
          Twitter
        </a>
        <a className="uppercase" href="https://github.com/lendroidproject/Whalestreet-contracts" target="_blank">
          Github
        </a>
      </Footer>
    </Wrapper>
  )
}
