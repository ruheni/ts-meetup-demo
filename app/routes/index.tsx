import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/db.server";

/** runs on the server */
export const loader = async () => {
  const posts = await db.post.findMany({
    select: {
      id: true,
      title: true,
      body: true,
      createdAt: true,
    }
  })
  return json({ posts })
}

/** runs on the client */
export default function Index() {
  const { posts } = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>TS Meetup feed</h1>
      <Link to='new'>
        <button>+ Create a new post</button>
      </Link>

      {posts.length > 0 &&
        <ol>{posts.map((post) => (
          <Link key={post.id} to={`/p/${post.id}`}>
            <li>
              <h2>{post.title}</h2>
              <span>Created at: {post.createdAt}</span>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}</ol>}

    </div>
  );
}
