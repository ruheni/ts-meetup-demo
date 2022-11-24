import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/db.server";

import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params
  const post = await db.post.findUnique({ where: { id: Number(id) } })

  /**
   * type narrowing 
   */
  if (!post) throw new Response("Post not found.", {
    status: 404,
  });

  return json({ post })
}

export default function Post() {
  const { post } = useLoaderData<typeof loader>()
  return (
    <div>
      <Link to='/'>&larr; All posts</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Published: {post.published}</p>
    </div>
  );
}
