import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { renderByContentType, renderBlocks } from '../components'

import { IPage } from '../interfaces/pages'
import { Block } from '../enums/blocks'
import { getPageData } from '../libs/cms/queries'

export const getServerSideProps = async ({ resolvedUrl }) => {
  const data = await getPageData(resolvedUrl)
  let page = {}
  if (data.page) page = data.page

  return {
    props: {
      page: page,
    },
  }
}

const Home: NextPage = ({ page }: IPage) => {
  const seo = page.seo
  const header = renderByContentType(Block.BlockHeader)
  const footer = renderByContentType(Block.BlockFooter)
  const blockHero = renderByContentType(Block.BlockHero)

  return (
    <div id="wrapper">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords.toString()}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {header}
      <main className="main">
        {blockHero}
        {renderBlocks(page.blocks)}
      </main>
      {footer}
    </div>
  )
}

export default Home
