import {PageGroup} from '../../../constants'
import {formatDate} from '../../../utils'
import type {Post} from '../../../writing'
import {SlimLayout} from '../../layouts'
import {ExternalLink, InternalLink} from '../../links'

export interface ShowWritingIndexProps {
  posts: Post[]
}

export function ShowWritingIndex(props: ShowWritingIndexProps) {
  const {posts} = props

  posts.sort((postA, postB) => (postA.publishedAt <= postB.publishedAt ? 1 : -1))

  return (
    <SlimLayout pageGroup={PageGroup.WRITING}>
      <h1 className="visually-hidden">Blog Posts</h1>

      <div className="writing-list-item">
        <div className="title">
          <ExternalLink href="https://8thlight.com/insights/an-apprentices-community">
            {"An Apprentice's Community"}
          </ExternalLink>
        </div>

        <span className="date">January 21, 2013</span>

        <p className="description">Musings on the path of an aspiring software developer</p>
      </div>

      {posts.map((post) => {
        const date = formatDate(post.publishedAt)

        return (
          <div className="writing-list-item" key={post.url}>
            <div className="title">
              <InternalLink href={post.url}>{post.title}</InternalLink>
            </div>

            <span className="date">{date}</span>

            {post.description != null && <p className="description">{post.description}</p>}
          </div>
        )
      })}
    </SlimLayout>
  )
}
