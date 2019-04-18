import React from "react"
import Layout from "./layout.js"
import { useAllCategoriesQuery } from "../hooks/queries/Categories.js"
import { CategoriesList } from "../components/List.js"
import { GrepCategories, sortCaseInsensitive } from "../components/Grep.js"

const Categories = props => {
  const nodes = useAllCategoriesQuery();
  const categoriesArray = sortCaseInsensitive(GrepCategories(nodes));
  return (
    <Layout>
      <CategoriesList list={categoriesArray} />
    </Layout>
  )
}

export default Categories
