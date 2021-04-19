# Socialize (Social Media API)

API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list built with Express, Mongoose and MongoDB.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Usage

1. Have MongoDB installed on your machine.
2. Clone the repo.
3. Install dependencies with `npm -i`
4. Run npm start to run the server and make the API live
5. Use Insomnia to test.

#### User
- Get all users: GET /api/users
- Create a user: POST /api/users
- Get user by ID: GET /api/users/:id
- Update a user: PUT /api/users/:id
- Delete a user: DELETE /api/users/:id
- Add a friend: PUT /api/users/:userId/friends/:friendId
- Delete a friend: DELETE /api/users/:userId/friends/:friendId

#### Thought
- Get all thoughts: GET /api/thoughts
- Create a thought: POST /api/thoughts
- Get thought by ID: GET /api/thoughts/:id
- Update a thought: PUT /api/thoughts/:id
- Delete a thought: DELETE /api/thoughts/:id

#### Reaction
- Add a reaction: POST /api/thoughts/:id/reactions
- Delete a reaction: DELETE /api/thoughts/:id/reactions

![Video Walkthrough](./assets/Social-Network-API.mp4)

## License
This application is licensed by ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg).

## Contributors
The following people contributed to the creation of this application: Alicia Vega.

## Questions
If you have any other questions or concerns, please reach out via email aliciamvega94@gmail.com or via <a href="https://github.com/aliciavega731"> Github</a>.