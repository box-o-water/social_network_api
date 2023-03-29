# social_network_api

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

## Description

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

<img src="/assets/images/social_network_api_preview1.png" width="700"/>
<img src="/assets/images/social_network_api_preview2.png" width="700"/>

Click [here](https://watch.screencastify.com/v/J7xgpAiPYfnXZ2QJvvtX) to watch a screencastify video demonstrating the application.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

GIVEN a social network API

- [x] WHEN I enter the command to invoke the application
      THEN my server is started and the Mongoose models are synced to the MongoDB database

- [x] WHEN I open API GET routes in Insomnia for users and thoughts
      THEN the data for each of these routes is displayed in a formatted JSON

- [x] WHEN I test API POST, PUT, and DELETE routes in Insomnia
      THEN I am able to successfully create, update, and delete users and thoughts in my database

- [x] WHEN I test API POST and DELETE routes in Insomnia
      THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

- Install `nvm`
- Use `nvm` to install `npm`
- $ git clone git@github.com:box-o-water/social_network_api.git
- $ npm install
- Install and start `MongoDb`
- Install `MongoDB Compass` UI (optional)

## Usage

- $ npm start
- Use `insomnia` or another API Client to set up the routes and applicable JSON bodies in [userRoutes](./routes/api/userRoutes.js) and [thoughtRoutes](./routes/api/thoughtRoutes.js) to interact with the Mongo database.
- Note: append routes with `http://localhost:3001`

## Contributing

To contribute, create an issue in this repo, or fork this repo and create a pull request against this repo from your fork.

# Tests

N/A

# Questions

Visit my [box-o-water](https://github.com/box-o-water) profile page.

For any questions about this project, please send an email to <boxooowater@gmail.com>.

## Credits

N/A

## License

Licensed under the [MIT](/LICENSE) license.
