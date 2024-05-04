import {defineCollection, reference, z} from 'astro:content'

export const collections = {
  employers: defineCollection({
    schema: z.object({
      name: z.string(),
    }),
  }),

  'work-experience': defineCollection({
    schema: z.object({
      employer: reference('employers'),
      title: z.string(),
      description: z.string(),

      technologies: z
        .array(
          z.enum([
            'Android',
            'Backbone.js',
            'CSS',
            'Clojure',
            'ClojureScript',
            'CoffeeScript',
            'Figma',
            'HTML',
            'Java',
            'JavaScript',
            'Jest',
            'Next.js',
            'Node.js',
            'PostgreSQL',
            'RSpec',
            'React',
            'Ruby on Rails',
            'Ruby',
            'SQL',
            'Sass',
            'Sketch',
            'Storybook',
            'TypeScript',
            'Webpack',
            'iOS',
            'jQuery',
          ]),
        )
        .default([]),

      order: z.number().optional(),
      noPage: z.boolean().optional(),
    }),
  }),

  writing: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
    }),
  }),
}
