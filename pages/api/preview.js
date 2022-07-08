import { request } from "../../lib/datocms";

export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== 'this-secret-token-here'  || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPreviewPostBySlug would implement the required fetching logic to the headless CMS
  const post = await getPreviewBySlug(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }
  
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/${post.slug}` })
  res.end()
}

export const query_prevPage = 
`query($slug: String) {
  page(filter: {slug: {eq: $slug}}) {
    slug
  }
}`

export async function getPreviewBySlug(requetedSlug) {

  const variables = {
    slug: requetedSlug
  }

  const data = await request({
    query: query_prevPage, variables,
    preview: true
  });

  console.log(data.page.slug)

  return data.page
  
}