import { redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { db } from "~/db.server";
import { z } from 'zod'

const PostSchema = z.object({
  title: z.string(),
  content: z.string().nullable(),
})

type Post = z.infer<typeof PostSchema>
//    ^ type Post = { 
//          title: string;
//          content: string | null;
//        } 

export const action = async ({ request }: ActionArgs) => {

  const formData = await request.formData()
  const title = formData.get('title')
  const content = formData.get('content')

  if (
    typeof title !== 'string' ||
    typeof content !== 'string'
  ) {
    throw Error("Oops, one of the form values was incorrect")
  }


  const post = await db.post.create({
    data: {
      title: title,
      content,
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
            Content: <textarea name="content" />
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