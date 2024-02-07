# nest-ts-boilerplate

### Service Layer
When creating a service, make sure that the entire flow is wrapped by an error handler, and each significant step, including the initial step, must be logged to make everything traceable in any environment.

![Service Layer Graphics](/graphics/service-layer-graphic.png)

### How to run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create `.env` file and add your MongoDB URL using `DATABASE_URL` variable.
4. Make sure you have a running MongoDB in your local machine.
5. Seed the database by running `npm run seed`.
6. Start the development environment by running `npm run start:dev`

### 🌱 How seed works
Seeding is crucial during development phase to ensure all database models will be successfully executed according to its' schema and business requirements.

In this repository, seeds are located under the Prisma directory called `seeder.prisma.ts`. It is a class-based service that has multiple methods based on the available collections declared in the Prisma schema, which are intended to perform data creation.

![Prisma Graphics](/graphics/prisma-graphic.png)

### △ Why Prisma
Having an ORM to your application will help you define a safe structure of the database and eventually gives you detailed references of explaining how your database is structured.
