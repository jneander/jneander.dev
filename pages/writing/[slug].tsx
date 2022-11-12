import type {GetStaticPropsContext, GetStaticPropsResult} from 'next'
import {ParsedUrlQuery} from 'querystring'

import {getAllPosts} from '../../src/writing/helpers'
import {ShowWriting, ShowWritingProps} from '../../src'

export default ShowWriting

interface Params extends ParsedUrlQuery {
  slug: string
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post) => {
    return {
      params: {slug: post.slug},
    }
  })

  return {paths, fallback: 'blocking'}
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ShowWritingProps>> {
  const {slug} = context.params as Params

  const posts = await getAllPosts()

  const postIndex = posts.findIndex((post) => post.slug === slug)

  if (postIndex === -1) {
    return {
      notFound: true,
    }
  }

  const post = posts[postIndex]
  const nextPost = posts[postIndex - 1] || null
  const previousPost = posts[postIndex + 1] || null

  return {
    props: {
      post,
      nextPost,
      previousPost,
    },
  }
}
