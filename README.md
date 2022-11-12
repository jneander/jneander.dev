# jneander.dev

## Getting Started

First, run the development server:

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Writing

### Filenames

All post filenames must begin with a date in the format "YYYY-MM-DD". This is a limit of Jekyll,
which might eventually have a workaround. For the time being, consider this a requirement. Posts can
be placed in any arbitrary directory within the `src/writing/posts` path.

Unless already established, feel free to choose a convention for file structuring and run with it.

### Front-Matter

Each post must have the following data in order to build:

- title

Posts may optionally have an excerpt defined with the `excerpt:` option in each post's front-matter.
When not defined, the excerpt rendered into the index files will be the full content of the post.

For now, categories are not being used. They may be defined, but will not be rendered or displayed
anywhere.

## Publishing

To publish all content, commit and push to GitHub. CI will run all specs in the project, rebuild all
files, then serve them. If any specs fail, or if the content does not successfully rebuild, the new
version of the site will not deploy.
