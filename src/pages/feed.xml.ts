import {getCollection} from 'astro:content'
import type {APIContext} from 'astro'
import {encode} from 'html-entities'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import {dedent} from 'ts-dedent'

import {author, description, language, title, url} from '../constants'
import {absoluteUrl, writingUrl} from '../helpers'

const parser = new MarkdownIt()

export async function get(context: APIContext) {
  const posts = await getCollection('writing')
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  const currentUrl = absoluteUrl(context.url.pathname)
  const updatedDate = posts[0].data.date

  const postsContents = posts.map((post) => {
    const absolutePostUrl = absoluteUrl(writingUrl(post.slug))
    const content = sanitizeHtml(
      parser.render(post.body).replace('src="/', `src="${url}/`).replace('href="/', `href="${url}/`)
    )

    return dedent`
      <entry>
        <title>${encode(post.data.title)}</title>
        <link href="${absolutePostUrl}" />
        <updated>${post.data.date.toISOString()}</updated>
        <id>${absolutePostUrl}</id>
        <content xml:lang="${language}" type="html">
          ${encode(content)}
        </content>
      </entry>
    `
  })

  const result = dedent`
    <?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xml:base="${url}">
      <title>${title}</title>
      <subtitle>${description}</subtitle>
      <link href="${currentUrl}" rel="self" />
      <link href="${url}" />
      <updated>${updatedDate.toISOString()}</updated>
      <id>${url}</id>
      <author>
        <name>${author.name}</name>
        <email>${author.email}</email>
      </author>
      ${postsContents.join('\n')}
    </feed>
  `

  return new Response(result)
}
