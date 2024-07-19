# Weather App

This is a weather application built with Remix, Prisma, MongoDB, and Playwright for end-to-end testing.

## Getting Started

To get started with the weather app, follow these steps:

1. Clone the repository:
2. Install dependencies:
3. Seeding and initialising the db happens automatically when the app is started.

## Development

HRM is enabled so development can be done locally with the ability to see changes in real-time in the Docker container.

## Docker

To run the application using Docker, follow these steps:

1. Build the Docker image and start the Docker container:

```bash
docker-compose up --build
```

2. The app will be available at [http://localhost:3000](http://localhost:3000).

## Testing

I used Playwright with Cucumber for end-to-end testing. To run the tests, use the following command:

```bash
npm run test
```

This will execute the tests defined in the `features` directory.
A BDD report can be generated too.

```bash
npm run generate report
```

open report in browser 'e2e\reports\index.html'

This also has a feature I was working on which will automatically create Jira tickets from any of the failed steps. At the moment, it generates a JSON file for each one.

## Styling

[Material-UI](https://mui.com/)

### Good to know

- Uses Prisma for the ORM and MongoDB as the database.
- Has a few helper functions to make the code cleaner and more readable.
- Uses Remix for the routing and server side rendering.
- Uses Playwright for end-to-end testing.
- Uses Docker for containerisation.
- Hot Module Replacement is enabled for development.
- Uses Material-UI for styling.
- Uses Cucumber for BDD testing.

## TODOs and Improvements

- Refactor the helpers to have more single responsibility.
- Move sessions to the utility folder.
- Clean up a lot of the inline CSS in the MUI components to be more in line with a theme.
- Create a production version as well as the development version.
- Improve error handling and messaging.
- Add more tests!!
- Better UX/UI.
- Make Prisma Studio work with MongoDB from the Docker container.

## Issues Solved

I faced several challenges with compatibility between Node.js, Remix, and Material-UI versions. Ensuring that all dependencies worked seamlessly together required adjustments to the versions of Node.js, Remix, and Material-UI being used.

Using Node.js version 18.20.3.

Also had several challenges with docker in general and mongodb automatically initialising.

## Conclusion

I really liked working with Remix and Prisma, and I think they are a great combination for building web applications. I also enjoyed working with Playwright and Cucumber for end-to-end testing.
