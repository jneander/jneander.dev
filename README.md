# jneander.com

## Configuration

The `config.yml` file is required for all tasks. Use `config_example.yml` as a
basis.

* `:amazon`
    * `:access_key` and `:secret_key` can be obtained through the Amazon AWS
      site, or from those with access.
    * `:source_path` is the local build path for Jekyll.
    * `:bucket_name` is the Amazon S3 bucket name that will receive the files.
    * `:target_path` is the optional directory in the bucket to which the files
      will be uploaded.

## Writing

### Filenames

All post filenames must begin with a date in the format "YYYY-MM-DD". This is a
limit of Jekyll, which might eventually have a workaround. For the time being,
consider this a requirement. Posts can be placed in any arbitrary directory
within the `jekyll/_posts` path.

Unless already established, feel free to choose a convention for file
structuring and run with it.

### Front-Matter

Each post must have the following data in order to build:

* title

Posts may optionally have an excerpt defined with the `excerpt:` option in each
post's front-matter. When not defined, the excerpt rendered into the index files
will be the full content of the post.

For now, categories are not being used. They may be defined, but will not be
rendered or displayed anywhere.

### Editing

While writing, you can use any of the `rake serve` tasks (see [Commands]) to
continually rebuild the content. This will start a Jekyll server on the default
port of '4000', which can be overridden by including the desired port number
when running the task.

When changes are made to files, they will automatically be rebuilt. Refresh the
given browser page to load the updated content.

## Publishing

To publish all content, use the `rake publish` task. This will run all specs in
the project, rebuild all files, then upload them to the desired Amazon S3
bucket. If any specs fail, or if the content does not successfully rebuild, the
upload to Amazon will not begin.

## Commands

Task                            | Description
------------------------------- | -----------
`rake`                          | Run all specs, build all posts, then serve the Jekyll site
`rake build:all`                | Build all posts for the Jekyll site
`rake build:recent[limit]`      | Build the most recent :limit posts for the Jekyll site
`rake build`                    | alias of 'build:all'
`rake publish`                  | Run all specs, build all posts, then deploy to Amazon on success
`rake serve:all[port]`          | Build all posts, then serve the Jekyll site (optional: :port)
`rake serve:recent[limit,port]` | Build the most recent :limit posts, then serve the Jekyll site (optional: :port)
`rake serve`                    | alias of 'serve:all'
`rake spec`                     | Run all specs
