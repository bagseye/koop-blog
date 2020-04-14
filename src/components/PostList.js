import React, { useState } from "react"
import PostCard from "./PostCard"
import styled from "styled-components"
import { motion, useViewportScroll } from "framer-motion"

const List = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const PostList = ({ posts }) => {
  return (
    <>
      <section>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
        >
          Koop
        </motion.h1>
        <h2>
          The latest & greatest high-perfomance vehicles from around the world.
          Filled with all the information you need to make the right choice.
        </h2>
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
