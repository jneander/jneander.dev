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
      <div className={`slim-container ${styles.Post}`}>
        <header className={styles.Header}>
          <h1 className={styles.Title}>{post.title}</h1>

          <span className={styles.PublishDate}>{formatDate(post.publishedAt)}</span>
        </header>

        <article>
          <Component components={components} />
        </article>

        <section className={styles.Pagination}>
          {previousPost != null ? (
            <InternalLink className={styles.Previous} href={previousPost.url}>
              {'< '}
              {previousPost.title}
            </InternalLink>
          ) : (
            <span className={styles.Previous} />
          )}

          {nextPost != null ? (
            <InternalLink className={styles.Next} href={nextPost.url}>
              {nextPost.title}
              {' >'}
            </InternalLink>
          ) : (
            <span className={styles.Next} />
          )}
        </section>
      </div>
    </FullLayout>
  )
}
