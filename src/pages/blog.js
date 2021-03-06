import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/index.js"
import typography from "../utils/typography"
import profilePic from "../images/14664d00e6b71be942a6.jpg"

const rhythm = typography.rhythm

class BlogIndexRoute extends React.Component {
  render() {
    // console.log(this.props)
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <p
          css={{
            marginBottom: rhythm(1.5),
          }}
        >
          <img
            src={profilePic}
            alt="Kyle's profile pic"
            css={{
              borderRadius: `100%`,
              float: "left",
              marginRight: rhythm(1 / 4),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          Người viết những điều đơn giản một cách đơn giản. Tôi viết blog này cho mình, và nếu nó có thể tạo ra cảm hứng cho bạn, thì đó là 1 niềm vui với tôi.
          <br/>
          Minimalist, Stoicism, Code lover, Gym, Running, Reading, Zen.
        </p>
        <p />
        <ul
          css={{
            marginBottom: 0,
          }}
        >
          {posts.map(post => (
            <li key={post.node.fields.slug}>
              <Link
                css={{
                  textDecoration: "none",
                }}
                to={post.node.fields.slug}
              >
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        homeCity
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
