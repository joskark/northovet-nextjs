This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on S3

In order to deploy to S3 we need to get the content of the `out` folder and upload them in the bucket we want.
Make the bucket public and add permissions for everyone to access the objects.

## Deploying to GitHub Pages

Instructions have been copied from this [link](https://github.com/nextjs/deploy-github-pages).

1.  Create a new public GitHub repository
1.  Edit `next.config.ts` to match your GitHub repository name:
    - Given the pattern `https://github.com/<user>/<repo>`
    - Update your `basePath` config to the name of your repo (e.g. `/repo`)
1.  Push the starter code to the `main` branch
1.  Run the `deploy` script (e.g. `npm run deploy`) to create the `gh-pages` branch
1.  On GitHub, go to **Settings** > **Pages** > **Branch**, and choose `gh-pages` as the branch with the `/root` folder. Hit **Save**
1.  Make a change
1.  Run the `deploy` script again to push the changes to GitHub Pages

Congratulations! You should have a URL like:

```bash
https://<github-user-name>.github.io/<github-project-name>/
```

For more information, see our [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).
