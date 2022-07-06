
export const query_allPages = 
`query {

  allPages(filter: {parent: {exists: "*"}, slug: {neq: "home"}}, orderBy: position_ASC) {
    id
    title
    slug

    children {
      id
      title
      slug

      children {
        id
        title
        slug

        children {
          id
          title
          slug

          children {
            id
    				title
    				slug
          }

        }

      }
    }

  }
}`;