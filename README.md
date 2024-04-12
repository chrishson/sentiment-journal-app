### Description
- A simple journal app that assesses sentiment of post. Using Nextjs 14.x, Prisma, Typescript, Tailwind, and Google Cloud Natural Language API.
- [Live Demo](https://journal-app-beige.vercel.app/)

### Instructions to run locally

1. Install npm dependencies. Note: I used node version 21.2.0
   ```
   npm i
   ```
2. Create a postgresql db locally (https://www.postgresql.org/docs/current/tutorial-createdb.html)
3. Create a Service Account for the 'Cloud Natural Language API' and create a key for the service account in JSON format. (https://cloud.google.com/natural-language/docs/setup)
4. Create a .env file and replace with values from steps 2 and 3.
   ```
   cp .env.example .env
   ```
5. Run Prisma Migrations

   ```
   npx prisma migrate dev --name init
   ```

   Optional: Seed the database with the sample data from [`prisma/seed.ts`](./prisma/seed.ts).

   ```
   npm run seed
   ```

6. Start the app

   ```
   npm run dev
   ```

   The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.Z