import {getMDXComponent} from 'mdx-bundler/client'
import {ComponentPropsWithoutRef, useMemo} from 'react'

import {formatDate} from '../../../utils'
import {Post} from '../../../writing'
import {FullLayout} from '../../layouts'
import {InternalLink} from '../../links'

import styles from './styles.module.scss'

export interface ShowWritingProps {
  post: Post
  nextPost: Post | null
  previousPost: Post | null
}

function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <figure className="highlight">
      <pre {...props} />
    </figure>
  )
}

const components = {pre: Pre}

export function ShowWriting(props: ShowWritingProps) {
  const {post, nextPost, previousPost} = props

  const {contentBundle} = post

  const Component = useMemo(() => getMDXComponent(contentBundle!), [contentBundle])

  return (
    <FullLayout>
      <div className={styles.Post}>
        <header className={styles.Header}>
          <h1 className={styles.Title}>{post.title}</h1>

          <span className={styles.PublishDate}>{formatDate(post.publishedAt)}</span>
        </header>

        <Component components={components} />

        <div className={styles.Pagination}>
          {previousPost != null && (
            <InternalLink className={styles.Previous} href={previousPost.url}>
              {previousPost.title}
            </InternalLink>
          )}

          {nextPost != null && (
            <InternalLink className={styles.Next} href={nextPost.url}>
              {nextPost.title}
            </InternalLink>
          )}
        </div>
      </div>
    </FullLayout>
  )
}
