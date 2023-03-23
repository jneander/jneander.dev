const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const eleventySass = require('eleventy-sass')
const {DateTime} = require('luxon')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy({'./public/*.*': '/'})
  eleventyConfig.addPassthroughCopy({'./public/images': '/images'})

  eleventyConfig.addFilter('asPostDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'UTC'}).toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: 'eleventy',
      output: '_site',
    },
  }
}
