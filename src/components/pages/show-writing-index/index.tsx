import {PageGroup} from '../../../constants'
import {formatDate} from '../../../utils'
import type {Post} from '../../../writing'
import {SlimLayout} from '../../layouts'
import {ExternalLink, InternalLink} from '../../links'
import {VisuallyHidden} from '../../utils'

import styles from './styles.module.scss'

export interface ShowWritingIndexProps {
  posts: Post[]
}

export function ShowWritingIndex(props: ShowWritingIndexProps) {
  const {posts} = props

  posts.sort((postA, postB) => (postA.publishedAt <= postB.publishedAt ? 1 : -1))

  return (
    <SlimLayout pageGroup={PageGroup.WRITING}>
      <VisuallyHidden as="h1">Blog Posts</VisuallyHidden>

      <article className={styles.WritingListItem}>
        <div className={styles.Title}>
          <ExternalLink href="https://8thlight.com/insights/an-apprentices-community">
            {"An Apprentice's Community"}
          </ExternalLink>
        </div>

        <span className={styles.Date}>January 21, 2013</span>

        <p className={styles.Description}>Musings on the path of an aspiring software developer</p>
      </article>

      {posts.map(post => {
        const date = formatDate(post.publishedAt)

        return (
          <article className={styles.WritingListItem} key={post.url}>
            <div className={styles.Title}>
              <InternalLink href={post.url}>{post.title}</InternalLink>
            </div>

            <span className={styles.Date}>{date}</span>

            {post.description != null && <p className={styles.Description}>{post.description}</p>}
          </article>
        )
      })}
    </SlimLayout>
  )
}
