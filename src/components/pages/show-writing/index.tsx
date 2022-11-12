import {getMDXComponent} from 'mdx-bundler/client'
import {ComponentPropsWithoutRef, useMemo} from 'react'

import {formatDate} from '../../../utils'
import {Post} from '../../../writing'
import {FullLayout} from '../../layouts'
import {InternalLink} from '../../links'

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
      <div className="slim-container post">
        <header>
          <h1 className="title">{post.title}</h1>
          <span className="publish-date">{formatDate(post.publishedAt)}</span>
        </header>

        <article>
          <Component components={components} />
        </article>

        <section id="pagination">
          {previousPost != null ? (
            <InternalLink id="last" href={previousPost.url}>
              {'< '}
              {previousPost.title}
            </InternalLink>
          ) : (
            <a id="last">&nbsp;</a>
          )}

          {nextPost != null ? (
            <InternalLink id="next" href={nextPost.url}>
              {nextPost.title}
              {' >'}
            </InternalLink>
          ) : (
            <a id="next">&nbsp;</a>
          )}
        </section>
      </div>
    </FullLayout>
  )
}
