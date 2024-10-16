# Portfolio Website By Abudu Samadu

![demo](/public/hero.png)
![demo](/public/education.png)
![demo](/public/experience.png)
![demo](/public/project.png)



<details><summary><b>Folder Structure</b></summary>

```bash
Portfolio Website /
.
├── bun.lockb
├── CODE_OF_CONDUCT.md
├── components.json
├── docker-compose.yaml
├── Dockerfile
├── jsconfig.json
├── LICENSE
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── prisma
│   ├── migrations
│   │   ├── 20240919213038_init
│   │   │   └── migration.sql
│   │   ├── 20240919213630_adding_user
│   │   │   └── migration.sql
│   │   ├── 20240919223806_adding_all_filed
│   │   │   └── migration.sql
│   │   ├── 20240919230257_adding_techstack_model
│   │   │   └── migration.sql
│   │   ├── 20240920012045_adding_fixed
│   │   │   └── migration.sql
│   │   ├── 20240924163632_adding_extending_user
│   │   │   └── migration.sql
│   │   ├── 20240925150741_adding_user_profile
│   │   │   └── migration.sql
│   │   ├── 20241002234053_adding_user_role
│   │   │   └── migration.sql
│   │   ├── 20241014142736_modified_database_with_user
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── blur-23.svg
│   ├── education.png
│   ├── experience.png
│   ├── favicon.ico
│   ├── hero.png
│   ├── hero.svg
│   ├── logo.png
│   ├── lottie
│   │   ├── build.json
│   │   ├── code1.json
│   │   ├── code.json
│   │   ├── coding.json
│   │   ├── contact.json
│   │   ├── development.json
│   │   ├── education.json
│   │   ├── js.json
│   │   ├── lotti.json
│   │   └── study.json
│   ├── mascot.jpeg
│   ├── next.svg
│   ├── placeholder.jpg
│   ├── project.png
│   ├── section.svg
│   ├── svg
│   │   ├── contactsImage.svg
│   │   ├── education
│   │   │   ├── eduBlack.svg
│   │   │   ├── eduBlue.svg
│   │   │   ├── eduGreen.svg
│   │   │   ├── eduImgBlack.svg
│   │   │   ├── eduImgWhite.svg
│   │   │   ├── eduOrange.svg
│   │   │   ├── eduPink.svg
│   │   │   ├── eduPurple.svg
│   │   │   ├── eduRed.svg
│   │   │   ├── eduTwitter.svg
│   │   │   └── eduYellow.svg
│   │   ├── experience
│   │   │   ├── expBlack.svg
│   │   │   ├── expBlue.svg
│   │   │   ├── expGreen.svg
│   │   │   ├── expImgBlack.svg
│   │   │   ├── expImgWhite.svg
│   │   │   ├── expOrange.svg
│   │   │   ├── expPink.svg
│   │   │   ├── expPurple.svg
│   │   │   ├── expRed.svg
│   │   │   ├── expTwitter.svg
│   │   │   └── expYellow.svg
│   │   ├── projects
│   │   │   ├── eight.svg
│   │   │   ├── eleven.svg
│   │   │   ├── five.svg
│   │   │   ├── four.svg
│   │   │   ├── nine.svg
│   │   │   ├── one.svg
│   │   │   ├── sample.svg
│   │   │   ├── seven.svg
│   │   │   ├── six.svg
│   │   │   ├── ten.svg
│   │   │   ├── thirteen.svg
│   │   │   ├── three.svg
│   │   │   ├── twelve.svg
│   │   │   └── two.svg
│   │   └── skills
│   │       ├── adobeaudition.svg
│   │       ├── adobe-xd.svg
│   │       ├── after-effects.svg
│   │       ├── angular.svg
│   │       ├── aws.svg
│   │       ├── azure.svg
│   │       ├── blender.svg
│   │       ├── bootstrap.svg
│   │       ├── bulma.svg
│   │       ├── canva.svg
│   │       ├── capacitorjs.svg
│   │       ├── coffeescript.svg
│   │       ├── cplusplus.svg
│   │       ├── csharp.svg
│   │       ├── css.svg
│   │       ├── c.svg
│   │       ├── dart.svg
│   │       ├── deno.svg
│   │       ├── django.svg
│   │       ├── docker.svg
│   │       ├── fastify.svg
│   │       ├── figma.svg
│   │       ├── firebase.svg
│   │       ├── flutter.svg
│   │       ├── gcp.svg
│   │       ├── gimp.svg
│   │       ├── git.svg
│   │       ├── go.svg
│   │       ├── graphql.svg
│   │       ├── haxe.svg
│   │       ├── html.svg
│   │       ├── illustrator.svg
│   │       ├── ionic.svg
│   │       ├── javascript.svg
│   │       ├── java.svg
│   │       ├── julia.svg
│   │       ├── kotlin.svg
│   │       ├── lightroom.svg
│   │       ├── markdown.svg
│   │       ├── materialui.svg
│   │       ├── matlab.svg
│   │       ├── memsql.svg
│   │       ├── microsoftoffice.svg
│   │       ├── mongoDB.svg
│   │       ├── mysql.svg
│   │       ├── nextJS.svg
│   │       ├── nginx.svg
│   │       ├── numpy.svg
│   │       ├── nuxtJS.svg
│   │       ├── opencv.svg
│   │       ├── photoshop.svg
│   │       ├── php.svg
│   │       ├── picsart.svg
│   │       ├── postgresql.svg
│   │       ├── premierepro.svg
│   │       ├── python.svg
│   │       ├── pytorch.svg
│   │       ├── react.svg
│   │       ├── ruby.svg
│   │       ├── selenium.svg
│   │       ├── sketch.svg
│   │       ├── sqlite.svg
│   │       ├── strapi.svg
│   │       ├── svelte.svg
│   │       ├── swift.svg
│   │       ├── tailwind.svg
│   │       ├── tensorflow.svg
│   │       ├── typescript.svg
│   │       ├── unity.svg
│   │       ├── vitejs.svg
│   │       ├── vue.svg
│   │       ├── vuetifyjs.svg
│   │       ├── webix.svg
│   │       ├── wolframalpha.svg
│   │       └── wordpress.svg
│   └── vercel.svg
├── README.Docker.md
├── README.md
├── scripts
│   └── seed.ts
├── SECURITY.md
├── src
│   ├── actions
│   │   ├── get-current-user.ts
│   │   ├── get-project.ts
│   │   ├── login.ts
│   │   ├── register.ts
│   │   └── verification.ts
│   ├── app
│   │   ├── (admin)
│   │   │   └── admin
│   │   │       ├── columns.tsx
│   │   │       ├── data-table.tsx
│   │   │       ├── page.tsx
│   │   │       └── projects
│   │   │           ├── _components
│   │   │           │   ├── action.tsx
│   │   │           │   ├── image-form.tsx
│   │   │           │   ├── link-form.tsx
│   │   │           │   ├── project-upate.tsx
│   │   │           │   └── tech-stack.tsx
│   │   │           ├── page.tsx
│   │   │           └── [projectId]
│   │   │               └── page.tsx
│   │   ├── api
│   │   │   ├── admin
│   │   │   │   ├── create
│   │   │   │   │   └── route.ts
│   │   │   │   └── projects
│   │   │   │       └── [projectId]
│   │   │   │           ├── publish
│   │   │   │           │   └── route.ts
│   │   │   │           ├── route.ts
│   │   │   │           └── unpublish
│   │   │   │               └── route.ts
│   │   │   ├── auth
│   │   │   │   └── [...nextauth]
│   │   │   │       └── route.ts
│   │   │   └── uploadthing
│   │   │       ├── core.ts
│   │   │       └── route.ts
│   │   ├── auth
│   │   │   ├── confirm
│   │   │   │   └── page.tsx
│   │   │   ├── error
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   └── register
│   │   │       └── page.tsx
│   │   ├── education
│   │   │   ├── _components
│   │   │   │   └── education.tsx
│   │   │   └── page.tsx
│   │   ├── experience
│   │   │   ├── _components
│   │   │   │   └── experience.tsx
│   │   │   └── page.tsx
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── projects
│   │   │   ├── _components
│   │   │   │   ├── project-card.tsx
│   │   │   │   ├── project-list.tsx
│   │   │   │   ├── tech-stack-item.tsx
│   │   │   │   └── tech-stack.tsx
│   │   │   └── page.tsx
│   │   ├── skills
│   │   │   ├── _components
│   │   │   │   └── skills.tsx
│   │   │   └── page.tsx
│   │   └── style
│   │       ├── card.css
│   │       ├── card.css.map
│   │       └── card.scss
│   ├── auth.config.ts
│   ├── auth.ts
│   ├── components
│   │   ├── auth
│   │   │   ├── back-button.tsx
│   │   │   ├── card-wrapper.tsx
│   │   │   ├── confirm-form.tsx
│   │   │   ├── error-card.tsx
│   │   │   ├── github-logo.tsx
│   │   │   ├── google-logo.tsx
│   │   │   ├── header.tsx
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   ├── signIn-method-divider.tsx
│   │   │   └── social.tsx
│   │   ├── avatarImage.tsx
│   │   ├── banner.tsx
│   │   ├── container.tsx
│   │   ├── file-upload.tsx
│   │   ├── footer.tsx
│   │   ├── form-error.tsx
│   │   ├── form-sucess.tsx
│   │   ├── home
│   │   │   └── hero-section.tsx
│   │   ├── icon-badge.tsx
│   │   ├── loading.tsx
│   │   ├── logo.tsx
│   │   ├── mobile-sidebar.tsx
│   │   ├── modal
│   │   │   └── confirm-modal.tsx
│   │   ├── navbar-route.tsx
│   │   ├── navbar.tsx
│   │   ├── search-input.tsx
│   │   ├── sidebar-item.tsx
│   │   ├── sidebar-route.tsx
│   │   ├── sidebar.tsx
│   │   ├── ui
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── command.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── select.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── table.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── toast.tsx
│   │   └── user-menu.tsx
│   ├── config
│   │   └── site.ts
│   ├── data
│   │   ├── account.ts
│   │   ├── educations.ts
│   │   ├── experience.ts
│   │   ├── personal-data.ts
│   │   ├── project.ts
│   │   ├── skills-image.js
│   │   ├── skills.ts
│   │   ├── user.ts
│   │   └── verification-token.ts
│   ├── helper
│   │   ├── animation-lottie.tsx
│   │   └── glow-card.tsx
│   ├── hooks
│   │   ├── use-current-role.ts
│   │   ├── use-current-user.ts
│   │   ├── use-debounce.ts
│   │   ├── use-mobile-sidebar.ts
│   │   └── use-toast.ts
│   ├── lib
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   ├── mail.ts
│   │   ├── redis.ts
│   │   ├── tokens.ts
│   │   ├── uploadthing.ts
│   │   └── utils.ts
│   ├── middleware.ts
│   ├── next-auth.d.ts
│   ├── providers
│   │   ├── Providers.tsx
│   │   └── toast-provider.tsx
│   ├── routes.ts
│   └── schemas
│       └── index.ts
├── tailwind.config.ts
├── test-docker.sh
├── tsconfig.json
├── tsconfig.tsbuildinfo
└── UPGRADING.md
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [References](#-references)
- [Contact Us](#-contact-us)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>EduStream</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the
  frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note that you can use either `npm` or `yarn` to run the scripts. In this guide, we will use `npm`.
Setup clerk.dev account and get the required credentials to run the app.


**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/abudusamad/portfoliowebsite.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script             | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:3000` |
| `npm run build`    | Build your production site to `./dist/`     |
| `npm run preview`  | Boot up a local static web server           |
| `npm run lint`     | Run ESLint                                  |
| `npm run ts:check` | Perform type-checking                       |



### ⚙️ Or you can run the project using docker


**Step 1:**
```bash
docker-compose up
```

**Step 2:**
```bash
docker-compose exec app bash
```

**Step 3:**
```bash
npm run dev
```

**Step 4:**
```bash
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```

## 📦 Prisma

***Prisma*** is a modern database toolkit that makes database access easy with an auto-generated and type-safe query builder. It is used to interact with the database in this project.

### 🚀 Migrate the database

To migrate the database, run the following command:

```bash
npx prisma migrate dev
```

### 🚀 Seed the database

To seed the database, run the following command:

```bash
node scripts/seed.ts
```
 
### prisma schema

click [here](/prisma/schema.prisma) to view the prisma schema

### Prism Studio

You can use Prisma Studio to view and edit the data in your database. To open Prisma Studio, run the following command:

```bash
npx prisma studio
```


## 🔒 Environment Variables

Environment variables can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

**Edustream** uses [EmailJS](https://www.emailjs.com/) as external service. You need
to create an account and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env

DATABASE_URL=${DATABASE_URL}

UPLOADTHING_SECRET=${UPLOADTHING_SECRET}
UPLOADTHING_APP_ID=${UPLOADTHING_APP_ID}


NEXT_PUBLIC_APP_URL=http://localhost:3000

"

 AUTH_SECRET=any_secret
advice to use a random string for the secret
such as `openssl rand -hex 32` if you have openssl installed on your system

 AUTH_GITHUB_ID=${AUTH_GITHUB_ID}
AUTH_GITHUB_SECRET=${AUTH_GITHUB_SECRET}

 AUTH_GOOGLE_ID=${AUTH_GOOGLE_ID}
AUTH_GOOGLE_SECRET=${AUTH_GOOGLE_SECRET}

REDIS_URL=redis://my_redis:6379

NEXTAUTH_URL=http://localhost:3000


NEXT_PUBLIC_URL=http://localhost:3000
RESEND_API_KEY=${RESEND_API_KEY}

REDIS_URL=${REDIS_URL}
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url= https://github.com/abudusamad/portfoliowebsite.git)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https:https://github.com/abudusamad/portfoliowebsite.git)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🔧 Contributing


Contributions are what make the open source community such an amazing place to learn, inspire, and
create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉


## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this project and made it
possible:

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [EmailJS](https://www.emailjs.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com/)
- [UploadThing](https://uploadthingy.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

<!-- 
## 📞 Contact Us

[![Telegram](https://img.shields.io/badge/Telegram-@ladunjexa-2CA5E0?style=social&logo=telegram&logoColor=000000)](https://t.me/ladunjexa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ladunjexa-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/lironabutbul)
[![Instagram](https://img.shields.io/badge/Instagram-ladunjexa-grey?style=flat&logo=instagram&logoColor=b0c0c0&labelColor=8134af)](https://www.instagram.com/ladunjexa)
[![Discord](https://img.shields.io/badge/Discord-ladunjexa-7289da?style=flat&logo=discord&logoColor=b0c0c0&labelColor=2c2f33)](https://discord.com/users/827996364331810816) -->


