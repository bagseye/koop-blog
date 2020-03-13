import React from "react"
import PostCard from "./PostCard"
import styled from "styled-components"

const List = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const PostList = ({ posts }) => {
  console.log(posts)
  return (
    <>
      <section>
        <h1>Koop</h1>
        <h2>A personal blog template that uses GatsbyJS and MDX.</h2>
        <List>
          {posts.map(({ node }, index) => {
            return <PostCard key={index} post={node} />
          })}
        </List>
      </section>
    </>
  )
}

export default PostList
