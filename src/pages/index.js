import React from "react"
import { GrepCategories, GrepTags, sortCaseInsensitive } from "../components/Grep.js"
import  {
  ArticlesList,
  CategoriesList,
  TagsList,
} from "../components/List.js"
import { useAllArticlesQuery } from "../hooks/queries/Article.js"
import Layout from "./layout.js"

const Home = props => {
  const nodes = useAllArticlesQuery()

  const tagsArray =sortCaseInsensitive(GrepTags(nodes))
  const categoriesArray = sortCaseInsensitive(GrepCategories(nodes))
  return (
    <Layout>
      <div>
        <h2>ARTICLES</h2>
        <ArticlesList list={nodes} />
      </div>
      <div>
        <h2>TAGS</h2>
        <TagsList list={tagsArray} />
      </div>

      <div>
        <h2>CATEGORIES</h2>
        <CategoriesList list={categoriesArray} />
      </div>
    </Layout>
  )
}
export default Home
