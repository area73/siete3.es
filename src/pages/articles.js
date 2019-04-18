import React from "react"
import Layout from "./layout.js"
import { ArticlesList } from "../components/List.js"

import { useAllArticlesQuery } from "../hooks/queries/Article.js"
import { Location } from '@reach/router';

const Articles = () => {
  const edges = useAllArticlesQuery()
  return (
    <Layout>

      <div>
        <h2>ARTICLES PAGE</h2>
        <ArticlesList list={edges} />
      </div>
    </Layout>
  )
}

export default Articles
