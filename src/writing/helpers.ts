import {readdir, readFile} from 'fs/promises'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

import grayMatter from 'gray-matter'
import rehypeHighlight from 'rehype-highlight'

import type {YearMonthDayString} from '../utils'
import type {Post} from './types'
import {bundleMDX} from 'mdx-bundler'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const postsPath = join(__dirname, 'posts')

async function loadPostFile(fileName: string): Promise<Post> {
  const content = await readFile(join(postsPath, fileName))
  const matter = grayMatter(content)

  const date = fileName.slice(0, 10)
  const slug = fileName.slice(11).replace(/\.md$/, '')

  const bundle = await bundleMDX({
    source: content.toString(),
    cwd: postsPath,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      // options.remarkPlugins = [...(options.remarkPlugins ?? []), myRemarkPlugin]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypeHighlight, {ignoreMissing: true}],
      ]

      return options
    },
  })

  return {
    title: matter.data.title,
    description: matter.data.description,
    publishedAt: date as YearMonthDayString,
    url: `/writing/${slug}`,
    slug,
    content: matter.content,
    contentBundle: bundle.code,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await readdir(postsPath)
  const postFiles = fileNames.filter((fileName) => fileName.endsWith('.md'))

  const posts: Post[] = []

  for await (const postFile of postFiles) {
    posts.push(await loadPostFile(postFile))
  }

  posts.sort((postA, postB) => (postA.publishedAt <= postB.publishedAt ? 1 : -1))

  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts()

  return posts.find((post) => post.slug === slug) || null
}
