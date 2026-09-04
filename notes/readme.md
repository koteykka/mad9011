Inside of your Astro + Starlight project, you'll see the following folders and files:

.
├── public/
├── src/
│ ├── assets/
│ ├── content/
│ │ ├── docs/
│ └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json

Starlight looks for .md or .mdx files in the src/content/docs/ directory. Each file is exposed as a route based on its file name.

Images can be added to src/assets/ and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the public/ directory.

🧞 Commands
All commands are run from the root of the project, from a terminal:

Command Action
npm install Installs dependencies
npm run dev Starts local dev server at localhost:4321
npm run build Build your production site to ./dist/
npm run preview Preview your build locally, before deploying
npm run astro ... Run CLI commands like astro add, astro check
npm run astro -- --help Get help using the Astro CLI

Starlight docs - https://starlight.astro.build/
Astro docs - https://docs.astro.build/

Starlight Icons - https://starlight.astro.build/reference/icons/#all-icons

week 14
/_
TODO: add notes about using CloudFlare like https://developers.cloudflare.com/pages/get-started/git-integration/ https://dash.cloudflare.com/3f8aa5ee7556bac038aa10f9f4c99d7d/workers-and-pages/create/pages and add notes and screenshots about understanding the different URLs and inviting guests to dashboard
_/
