import type {GetStaticPropsResult} from 'next'

import {getAllPosts} from '../../src/writing/helpers'
import {ShowWritingIndex, ShowWritingIndexProps} from '../../src'

export default ShowWritingIndex

export async function getStaticProps(): Promise<GetStaticPropsResult<ShowWritingIndexProps>> {
  return {
    props: {
      posts: await getAllPosts(),
    },
  }
}
