# Chat AI

## About

Welcome to your AI Companion Creator! With this application, you can craft your very own personalised AI chatbot. Whether you want to recreate a renowned figure, simulate a cherished friend, or even replicate a beloved family member, the possibilities are endless. Simply provide your AI with instructions on how to interact and behave, and watch as your creation comes to life for engaging conversations and good banter.


## Features

**Instant Real-Time Functionality:** Engage in chats with your AI companions and receive immediate responses.

**User Authentication:** Robust authentication powered by Clerk to ensure your accounts are safe.

**Comprehensive System:** Complete full CRUD (create, read, update, delete) functionalities to manage your AI companions effortlessly.

**Responsive User Interface:** Enjoy consistent and visually appealing experiences across diverse devices.

**Route Protection:** Robust mechanisms to protect sensitive areas of the application, ensuring data security.

**Monthly Subscription:** Seamlessly handle your subscription payments using Stripe integration.



## How To Use In Local Development

Follow these steps to get started with the project:

### **1. Clone the Repository**

First, clone the repository to your local machine using the following command:

```
git clone https://github.com/bianca9901/SaaS-Ai-Chat.git

```

### **2. Install Dependencies**

Navigate into the project directory and install the dependencies using npm or yarn:

```
cd SAASS-AI-CHAT

```

```
npm install

```

or

```
yarn install
```

### **3. Set up Accounts and get keys for your Environment Variables**

**You will need an account for:**

* [Clerk,](https://clerk.com/)
* [OpenAI,](https://platform.openai.com/)
* [Replicate,](https://replicate.com/)
* [Pinecone,](https://www.pinecone.io/)
* [Stripe,](https://stripe.com/),
* [Sql Database,](https://www.elephantsql.com/) Currently using PostgreSQL (ElephantSQL), but planning to migrate to a MySQL database due to unexpected issues with search functionality. (More details in the Bugs section.)
* [Upstash](https://upstash.com/)


**Environment Variables**

Create `.env.local` File In The Root Directory Of Your Project:

```
cd SAASS-AI-CHAT
```

```
touch .env
```

**Add all your secrets next to these variables:**

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=
PINECONE_INDEX=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```


**Database Configuration and Seeding Setup**

Run these commands to initialise and configure your database, as well as seed it with initial data:

```
npx prisma db push

```

```
node scripts/seed.ts
```


### **4. Start the Development Server**

Once the dependencies are installed and environment variables are set up, you can start the development server:

```
npm run dev

```

or

```
yarn dev

```

This command will start the development server and your project will be accessible at **`http://localhost:3000`** by default.

### **5. Explore and Enjoy!**

You're all set! explore the project, interact with its features, and enjoy using it. If you encounter any issues or have feedback, feel free to open an issue on GitHub.

## Technologies Used

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript. [Learn more](https://www.typescriptlang.org/)
- **Next.js**: A React framework for building server-side rendered (SSR) and statically generated (SSG) web applications. [Learn more](https://nextjs.org/)
- **React**: A JavaScript library for building user interfaces. [Learn more](https://reactjs.org/)
- **Tailwind CSS**: A utility-first CSS framework for quickly styling web applications. [Learn more](https://tailwindcss.com/)
- **Replicate**: A library for replicating data between databases. [Learn more](https://replicate.com/)
- **OpenAI**: An AI platform for building and deploying natural language processing models. [Learn more](https://openai.com/)
- **OpenAI Edge**: OpenAI's API for deploying models locally and offline. [Learn more](https://www.npmjs.com/package/openai-edge)
- **Stripe**: A payment processing platform. [Learn more](https://stripe.com)
- **Clerk for Next.js**: An authentication and identity management system for Next.js applications. [Learn more](https://clerk.com/)
- **Prisma**: An open-source ORM (Object-Relational Mapping) tool. [Learn more](https://www.prisma.io/)
- **Langchain**: A tool for natural language processing tasks. [Learn more](https://www.langchain.com/)
- **Pincone**: A vector database for building knowledgeable AI. [Learn more](https://www.pinecone.io/)
- **ElephantSql**: Installs and manages PostgreSQL databases for you. [Learn more](https://www.elephantsql.com/)
- **Upstash/redis**: Redis client for Node.js. [Learn more](https://www.npmjs.com/package/@upstash/redis)
- **React Hot Toast**: A toast notification library for React applications. [Learn more](https://react-hot-toast.com/)
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. [Learn more](https://eslint.org/)
- **Vercel:** A cloud platform for static sites and serverless functions, used for hosting the project. [Learn more](https://vercel.com/)
- **GitHub:** Repository hosting and version control. [Learn more](https://github.com/)
- **Git:** Version control. [Learn more](https://git-scm.com/)
- **Lucide-react**: Icons for React. [Learn more](https://lucide.dev/)
- **Clsx**: A utility for constructing className strings conditionally. [Learn more](https://www.npmjs.com/package/clsx)
- **Axios**: Promise-based HTTP client for the browser and Node.js. [Learn more](https://axios-http.com/)
- **Class-variance-authority**: Library for class variance authority. [Learn more](https://www.npmjs.com/package/class-variance-authority)
- **Tailwind-merge**: Merge Tailwind CSS classes together. [Learn more](https://www.npmjs.com/package/tailwind-merge)
- **Next-auth/upstash-redis-adapter**: Adapter for using Upstash Redis with NextAuth. [Learn more](https://authjs.dev/reference/adapter/upstash-redis)
- **Tailwindcss/forms**: Tailwind CSS plugin for styling form elements. [Learn more](https://tailwindcss.com/docs/plugins#forms)
- **Tailwindcss-animate**: A Tailwind CSS plugin for creating animations. [Learn more](https://www.npmjs.com/package/tailwindcss-animate)
- **Zod**: TypeScript-first schema declaration and validation library. [Learn more](https://github.com/colinhacks/zod)
- **React-hook-form**: For forms with easy-to-use validation. [Learn more](https://react-hook-form.com/)
- **dotenv**:  A zero-dependency module that loads environment variables from a .env file. [Learn more](https://www.npmjs.com/package/dotenv)
- **Shadcn/ui**: Beautifully designed components that you can copy and paste into your apps. [Learn more](https://ui.shadcn.com/)
- **Next-cloudinary**: High-performance image and video delivery and uploading at scale in Next.js powered by Cloudinary. [Learn more](https://next.cloudinary.dev/)
- **Radix UI**: An open source component library optimized for fast development. [Learn more](https://www.radix-ui.com/)
- **Zustand**: A state-management solution using simplified flux principles. [Learn more](https://github.com/pmndrs/zustand)
- **Query-string**: A querystring parsing and stringifying library. [Learn more](https://www.npmjs.com/package/query-string)
- **Next Themes:** A plugin for adding theme support to Next.js applications. [Learn more](https://www.npmjs.com/package/next-themes)
- **Hookform/resolvers**: A form validation tool. [Learn more](https://www.npmjs.com/package/@hookform/resolvers)
- **React-spinners:** A collection of loading spinners for React.js. [Learn more](https://www.npmjs.com/package/react-spinners)

## Bugs
Upon utilising @@fulltext([name]) inside schema.prisma, an error occurred with the message: "Error parsing attribute "@@fulltext": Defining fulltext indexes is not supported with the current connector. Prisma". After doing some research, it became apparent that Prisma Client does not currently facilitate the utilisation of indexes to enhance full-text search on PostgreSQL. The recommended solution is to transition to MySQL and adjust the provider accordingly.

Although the project is currently operational with PostgreSQL, it's encountering limitations when it comes to searching for companions. Therefore, transitioning to MySQL is advisable to address this issue effectively.
