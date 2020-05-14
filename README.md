### Sample application

1. First of all, setup developer environment by guide: https://reactnative.dev/docs/environment-setup
2. Install dependencies in the project: run `yarn install`
3. Start project development server with `yarn start` 
4. Run on a device using one of the following command: `yarn run android` or `yarn run ios`
5. To run test use `yarn test`

NOTE: all of these command can be used with `npm`

### Possible improvements
* Better test coverage, requires configured environment. Current Test coverage including all components checking for happy flow, and snapshot matching, but doesn't check user interactions, computed values check, business logic (filtering).
* Create custom hooks ( data fetching, filtering, etc.)
