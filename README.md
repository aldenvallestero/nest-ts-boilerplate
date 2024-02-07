# nest-ts-boilerplate

### Service Layer
When creating a service, make sure that the entire flow is wrapped by an error handler and each significant steps including the initial step must be logged in order to make everything tracable to any environment.

![Service Layer Graphics](/graphics/service-layer-graphic.png)

### How to run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create `.env` file and add your MongoDB URL using `DATABASE_URL` variable.
4. Make sure you have a running MongoDB in your local machine.
5. Seed the database by running `npm run seed`.
6. Start the development environment by running `npm run start:dev`
