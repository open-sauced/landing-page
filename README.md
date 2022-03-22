# OpenSauced Landing Page

## Prerequisites

In order to run the project we need the following software binaries installed on our development machines:
- `node>=16.7.0`
- `npm>=8.0.0`


## 🖥️ Local development

To install the application:

```shell
npm install
```

To start a local copy of the app on port `3000`:

```shell
npm run dev
```

## 🔑 CMS (Sanity) commands

You will need to be added to the project beforehand. Contact a maintainer to get you added.

Install [Sanity Studio](https://www.sanity.io/docs/getting-started-with-sanity-cli):

```shell
npm install -g @sanity/cli
```

Start the local [Sanity Studio](https://www.sanity.io/docs/getting-started-with-sanity-cli) which will be available at [http://localhost:3333](http://localhost:3333):

```shell
cd sanity
npm install # only needs to be ran once
sanity start
```

### 📄 Editing Home Page Content

Go to [http://localhost:3333/desk/about;da83ea19-890f-43be-9757-d4eab5271392](http://localhost:3333/desk/about;da83ea19-890f-43be-9757-d4eab5271392)

### 🔎 Editing SEO Content

Go to [http://localhost:3333/desk/seo;fab1dc19-7089-4b59-ac49-3481046078fc](http://localhost:3333/desk/seo;fab1dc19-7089-4b59-ac49-3481046078fc)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
