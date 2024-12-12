# Rock-Paper-Scissors Game API

A simple REST API for playing the classic "Rock-Paper-Scissors" game. This API allows a player to make a choice (rock, paper, or scissors) and returns the result of the game based on a random server-generated choice.

---

## Features

- Play a game of Rock-Paper-Scissors against the server.
- Randomized server choice ensures fairness.
- Detailed results including the player's choice, the server's choice, and the game outcome (win, lose, draw).

---

## Technologies Used

- **Node.js**: Backend runtime for the API.
- **Express.js**: Framework for creating the REST API.

---

## API Endpoints

### **POST** `/play`
- **Description**: Play a round of Rock-Paper-Scissors.
- **Request Body**: JSON with the player's choice:
  ```json
  {
    "playerChoice": "rock"
  }
  ```

## How to run the project:
1:  Clone the repository:
```bash
git clone <repository_url>
cd <repository_folder>
``` 
2: Install dependencies:
```bash
npm install
``` 
3: Start the server:
```bash
node server.js
``` 
4: Send request:
```bash
curl -X POST http://localhost:3000/play -H "Content-Type: application/json" -d '{"playerChoice": "rock"}'

or use Postman
``` 