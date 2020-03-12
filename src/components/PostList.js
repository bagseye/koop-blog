import React from "react"
import PostCard from "./PostCard"

const PostList = ({ posts }) => {
  console.log(posts)
  return (
    <>
      <section>
        <h1>Koop</h1>
        <p>Personal Blog</p>
        <div>
          {posts.map(({ node }, index) => {
            return <PostCard key={index} post={node} />
          })}
        </div>
      </section>
    </>
  )
}

export default PostList
