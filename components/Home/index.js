import React from 'react'
import styled from 'styled-components'
import { PageWrapper as Wrapper } from 'components/styles'

const Intro = styled.div`
  background: radial-gradient(circle, #af080c 0%, #880000 100%);
  background-image: url(/assets/banner.jpg);
  background-size: cover;
  height: 80vh;
  max-height: 564px;
  padding: 30px;
  margin-bottom: -10px;

  h1 {
    font-size: 36px;
    line-height: 53px;
    margin-bottom: 25px;
    color: var(--color-white);
  }

  a {
    border-radius: 30px;
    padding: 11px 25px;
    background: linear-gradient(180deg, #0e00e8 0%, #040253 100%);

    color: var(--color-white);
    font-size: 26px;
    line-height: 38px;

    img {
      margin-left: 8px;
    }
  }
`
const Features = styled.div`
  background: var(--color-black);
  padding: 65px 65px 85px;
  margin: 0 -40px;
  @media all and (max-width: 577px) {
    padding: 35px 24px;
    margin: 0 -20px;
  }

  .feature-item {
    border-radius: 10px;
    background: linear-gradient(180deg, #000000 0%, #0600cc 100%);
    width: 90%;
    max-width: 312px;
    padding: 37px 24px 24px;
    margin: 0 40px;
    @media all and (max-width: 577px) {
      margin: 0 20px;
    }

    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
    color: var(--color-white);
    @media all and (max-width: 577px) {
      margin: 20px;
    }

    img {
      height: 160px;
      width: 160px;
      border-radius: 50%;
      display: block;
      margin-bottom: 20px;
    }
  }
`
const Blogs = styled.div`
  padding: 35px 35px 45px;
  @media all and (max-width: 577px) {
    padding: 35px 24px;
  }

  h2 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 52px;
  }

  .blog-list {
    text-align: left;
    margin: -20px;
  }

  .blog-item {
    width: 100%;
    max-width: 414px;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image {
      height: 238px;
      background-size: cover;
      background-position: center;
      margin-bottom: 22px;
    }

    .title {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 14px;
    }

    .description {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 14px;
      font-weight: normal;
    }

    a {
      font-size: 20px;
      line-height: 29px;
      color: var(--color-red1);
      display: inline-flex;

      img {
        margin-left: 7px;
        height: 20px;
      }
    }

    &.blog-more {
      font-size: 38px;
      line-height: 57px;
      text-align: center;
      color: white;
      height: 80vh;
      max-height: 484px;

      background-image: url(/assets/blogs/blog-more.jpg);

      img {
        margin-top: 27px;
      }
    }
  }
`

export default function Home() {
  return (
    <>
      <div className="bg flex-all" />
      <Wrapper className="center">
        <Intro className="flex-all">
          <h1>Yield Farming. NFT Collectibles. Whale Swaps.</h1>
          <a href="https://whalestreet.xyz" target="_blank" className="flex-center">
            Enter dApp
            <img src="/assets/arrow.svg" alt="" />
          </a>
        </Intro>
        <Features className="flex justify-center flex-wrap">
          <div className="feature-item flex-center flex-column">
            <img src="/assets/features/icon-1.svg" alt="" />
            WhaleStreet is a decentralized, non-custodial protocol for ‘Whale Swaps’ - massive, antifragile token swaps.
          </div>
          <div className="feature-item flex-center flex-column">
            <img src="/assets/features/icon-2.svg" alt="" />
            It features DeFi Collectibles — NFTs that give the holder power to orchestrate swap events.
          </div>
          <div className="feature-item flex-center flex-column">
            <img src="/assets/features/icon-3.svg" alt="" />
            $hrimp is the native token of this protocol. It is a reward for liquidity providers, is used to bid for and
            buy DeFi Collectibles.
          </div>
        </Features>
        <Blogs>
          <h2>From the Blog</h2>
          <div className="blog-list flex justify-center flex-wrap">
            <div className="blog-item">
              <div>
                <div className="image" style={{ backgroundImage: 'url(/assets/blogs/FarmBlog.png)' }} />
                <div className="title">$hrimp Farming Begins on WhaleStreet</div>
                <div className="description">
                  Get to WhaleStreet.xyz and begin farming. To celebrate our liquidity providers, we will distribute 1%
                  of the target supply of $hrimp to those who have added liquidity to the LST-ETH pool on Uniswap until
                  Dec 6.
                </div>
              </div>
              <a
                href="https://blog.whalestreet.xyz/hrimp-farming-begins-on-whalestreet/"
                target="_blank"
                className="flex-center"
              >
                Read More <img src="/assets/blogs/arrow.svg" alt="" />
              </a>
            </div>
            <div className="blog-item">
              <div>
                <div className="image" style={{ backgroundImage: 'url(/assets/blogs/StillGump-1.jpeg)' }} />
                <div className="title">
                  Meet $hrimp.
                  <br />
                  Get $hrimp.
                </div>
                <div className="description">
                  A brand new yield farming token that enables massive token swaps on the WhaleStreet Protocol. This
                  blog describes the tokenomics and distribution strategy for $hrimp.
                </div>
              </div>
              <a href="https://blog.whalestreet.xyz/meet-hrimp-get-hrimp/" target="_blank" className="flex-center">
                Read More <img src="/assets/blogs/arrow.svg" alt="" />
              </a>
            </div>
            <a className="blog-item blog-more" href="https://blog.whalestreet.xyz" target="_blank">
              <div className="flex-all" style={{ height: '100%' }}>
                READ OUR ALL INSIGHTS
                <br />
                <img src="/assets/blogs/blog-arrow.svg" alt="" />
              </div>
            </a>
          </div>
        </Blogs>
      </Wrapper>
    </>
  )
}
