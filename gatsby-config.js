const _ = require(`lodash`)
const remark = require('remark')
const sanitizeHTML = require(`sanitize-html`)
const toHAST = require(`mdast-util-to-hast`)
const hastToHTML = require(`hast-util-to-html`)
const visit = require('unist-util-visit')


/*
{
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.jsx`)
      }
    },


*/


module.exports = {
  siteMetadata: {
    title: 'Area 73 Blog',
    description: 'this is a description of my new blog created with Gatsbyjs'
  },
  plugins: [

    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [
          'title',
          'tags',
          'path',
          'categories',
          'html',
          // 'excerpt',
          'timeToRead',
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
            categories: node => node.frontmatter.categories,
            html: node => {
              const tree = remark().parse(node.internal.content)
              const htmlAst = toHAST(tree, { allowDangerousHTML: true })
              const html = hastToHTML(htmlAst, { allowDangerousHTML: true })
              return sanitizeHTML(html, { allowTags: [] })
            },
            /*
            excerpt: node => {
              const length = 136
              const tree = remark().parse(node.rawMarkdownBody)
              let excerpt = ''
              visit(tree, 'text', (node) => {
                excerpt += node.value
              })
              return excerpt.slice(0, length) + '...'
            },
            */

            timeToRead: node => {
              const avgWPM = 265
              const tree = remark().parse(node.internal.content)
              const htmlAst = toHAST(tree, { allowDangerousHTML: true })
              const html = hastToHTML(htmlAst, { allowDangerousHTML: true })
              const pureText = sanitizeHTML(html, { allowTags: [] })
              const wordCount = _.words(pureText).length
              let timeToRead = Math.ceil(wordCount / avgWPM)
              if (timeToRead === 0) {
                timeToRead = 1
              }
              return timeToRead
            },
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // Add any options here
      },
    }
  ]
}

