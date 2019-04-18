import React from "react"
import Layout from "./layout.js"
import { useAllTagsQuery } from "../hooks/queries/Tags.js"
import { TagsList } from "../components/List.js"
import { GrepTags, sortCaseInsensitive } from "../components/Grep.js"

const Tags = props => {
  const nodes = useAllTagsQuery()
  const tagsArray = sortCaseInsensitive(GrepTags(nodes));

  return (
    <Layout>
      <TagsList list={tagsArray} />
    </Layout>
  )
}

export default Tags
