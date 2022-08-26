## Project Structure and Decisions

# Components

React components used by pages or by other react components, all of them has style components using emotion library.

# Pages
 The /pages folder contains all routed pages with the route to each page defined by its file name. The /pages/api folder contains all API route handlers which are also routed based on each file name. For more info on Next.js Page Routing and file name patterns see https://nextjs.org/docs/routing/introduction, for API Routing see https://nextjs.org/docs/api-routes/introduction.

 # Services

 Services handle all HTTP communication with backend APIs for the React front-end application, each service encapsulates the API calls for a content type (e.g. auth) and exposes methods for performing various operations (e.g. authentication and CRUD operations). Services can also perform actions that don't involve HTTP requests, such as logging out.

 # DB
 I choose Mongodb because it was a requirement for this challenge, but i chose a powerfull ORM tool like Prisma for handling DB requests from the API Routes and if in the future, We need to migrate from MongoDB to idk, PostgreSQL, with an ORM like Prisma at our side will be a smoother and cleaner transition.

 # API
 I chose NextJS for the simple reason that I can make use of the api routes, I could've done an external API, but for two simple request would've been a waste of time and resources in my humble opinion.
 
 # Hosting
 vercel, vercel is the best, just use it.


You can test the app here https://drixit-challenge.vercel.app/, the users are the same specified in the users file in the challenge repo
