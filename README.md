# webm-sveltekit

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Formatting

Automatically format code prior to committing:

```bash
pnpm exec husky-init
pnpm add --save-dev pretty-quick
pnpm exec husky set .husky/pre-commit "npx pretty-quick --staged"
```

> These dependencies and commands are performed when beginning a new application. Afterwards all commits will format automatically. See the [prettier](https://prettier.io/docs/en/precommit.html) docs for more detail.

## Technology

Utilizing html `<video>` & `<audio>` elements:

<img src="https://blog.addpipe.com/content/images/size/w700h329/2017/09/html-video-player.png" width=500/>

And many more...

<br/>
<br/>

<div style="text-align:center">
<img src="https://raw.githubusercontent.com/jycouet/kitql/main/logo.svg" width=200/>
<img src="https://openclipart.org/download/272343/1486640684.svg" width=200 height="195"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" width=200 height="195"/>
</div>

<div style="text-align:center">
<img src="https://pnpm.io/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" width=200 height="200"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" width=200 />
<img src="https://prettier.io/icon.png" width=200 height="196"/>
</div>
