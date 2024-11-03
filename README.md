# React Quiz App

A dynamic quiz application built with **React**, using **useContext** and **useReducer** hooks for state management. The quiz questions are fetched from an external source (**JSONBin**), providing a seamless and interactive experience for users.

## 🚀 Features

- **Multiple Quiz States**: The quiz transitions through various states: loading, error, ready, active, and finished.
- **Dynamic Timer**: Each question has a set timer, adding a time-bound challenge to the quiz.
- **Scoring System**: Earn points based on correct answers. Your high score is tracked and updated.
- **Question Navigation**: Move through questions, retry the quiz, and see real-time progress.
- **Error Handling**: Gracefully handles errors during data fetching.
- **State Management**: Uses `useReducer` for predictable state transitions and `useContext` for global state access.

## 🛠️ Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **useContext & useReducer Hooks**: For state management and sharing state across components.
- **JSONBin**: External data source for storing quiz questions.
- **Vite**: Fast build tool for modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
