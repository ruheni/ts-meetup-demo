Talk
- Brief introduction to Remix — fullstack framework focused on web standards for building resilient apps and and provides great DX and UX
  - file system routing similar to Next.js
  - `loaders` and `useLoaderData` — allows you to fetch/ query data. 
  - `actions` and `useActionData` — allow you to mutate your data


- Walkthrough app structure


- Remix app using a query builder for CRUD operations
    operations
    - fetch all
    - fetch one
    - create 
- Type errors to catch
    - form submission -> validating form input
    - Database layer
    - data fetching (type guards using the `typeof` keyword)


Steps
- Introduce Prisma for the data layer
- Introspect db to generate schema and types
- Create new Prisma Client instance
- Update database queries with Prisma Client queries
- Fix `useLoaderData` hooks with the `typeof` keyword
- Use Zod (with pre-existing schemas) to fix form submission

- Brief introduction to Prisma — a type-safe modern ORM that
  - Prisma schema
- Zod