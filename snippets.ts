/**
 * GET request from an API
 */
const posts = fetch('/api/feed').then(res => res.json())
// .   ^ Promise<any>





/**
 * Explicitly typed GET request from your API
 */

type Post = {
  id: string;
  title: string;
  content: string | null
}

const getAllPosts: Promise<Post[] | Error>
  //    ^  Promise<Error | Post[]> — not completely accurate
  = fetch('/api/feed',).then(res => res.json())



/**
 * Form submission
 */
const createPost = async (request: Request) => {
  const body = await request.formData()
  //    ^ FormData — not too helpful

  // validation and submission
}

/**
 * Parsing URL search params
 */
const pagination = (request: Request) => {
  const url = new URL('https://api.dev/feed?sort=desc&page=1')

  const page = url.searchParams.getAll('page')
  //    ^ string[] - requires some type casting 

  // request to API and other stuff
}


/**
 * query(CRUD) data from the database
 */

const posts_db_data = async (options) => `select * from "public"."Post"`

export {
  posts,
  getAllPosts,
  createPost,
  pagination,
}
