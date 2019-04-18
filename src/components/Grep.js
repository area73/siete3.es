const GrepTags = posts => {
  const tagsArray = posts.reduce(
    (acc, curr) => [...acc, ...curr.node.frontmatter.tags],
    [],
  )
  return Array.from(new Set(tagsArray))
}

const GrepPostsByTags = posts => tags =>
  posts.filter(curr => curr.node.frontmatter.tags.indexOf(tags) > -1)

const GrepPostsByCategories = posts => category =>
  posts.filter(curr => curr.node.frontmatter.categories.indexOf(category) > -1)


const GrepCategories = posts => {
  const catArray = posts.reduce(
    (acc, curr) => [...acc, ...curr.node.frontmatter.categories],
    [],
  )
  return Array.from(new Set(catArray))
}

const sortCaseInsensitive = arr =>
  arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

export { GrepCategories, GrepTags, GrepPostsByTags, sortCaseInsensitive , GrepPostsByCategories}
