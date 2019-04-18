import React, { useState } from "react"
import { useSearchIndex } from "../hooks/queries/SearchIndex.js"
import { Index } from "elasticlunr"
import SearchList from "./SearchList.js"


const Search = () => {
  const searchIndex = useSearchIndex()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [index, setIndex] = useState()

  const getOrCreateIndex = () => (index ? index : Index.load(searchIndex))

  const search = evt => {
    const query = evt.target.value
    const index = getOrCreateIndex()
    const search = index
      .search(query, {expand: true })
      .map(({ ref }) => index.documentStore.getDoc(ref));
    setIndex(index)
    setQuery(query)
    setResults(search)

  }

  return (
    <div>
      <input type="text" value={query} onChange={search} />
      <SearchList results={results} searchTerm={query}/>
    </div>
  )
}

export default Search
