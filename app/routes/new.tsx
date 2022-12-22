import { redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { db } from "~/db.server";
import { z } from 'zod'

const PostSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
})

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const fieldData = Object.fromEntries(formData)
  const parsedPostData = PostSchema.safeParse(fieldData)

  if (!parsedPostData.success) {
    throw Error("Oops, something went wrong")
  }

  const data = parsedPostData.data

  const post = await db.post.create({
    data: {
      title: data.title,
      body: data.body,
    }
  })

  return redirect(`/p/${post.id}`)
}

export default function Create() {

  return (
    <div>
      <h1>TS Meetup Create</h1>
      <form method="post">
        <div>
          <label>
            Title: <input type="text" name="title" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="body" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}