/* eslint-disable */
const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/webtables',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        newWorker() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            age: faker.datatype.number({max: 99}),
            salary: faker.random.number(),
            department: faker.random.arrayElement(['Insurance', 'Compliance', 'Legal'])
          };
        }
      });
    }
  }
});
