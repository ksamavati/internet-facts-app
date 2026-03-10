# Internet Facts App

A React application I built as an exercise in [Kable Academy's](https://kableacademy.com) Full Stack Web Development program.

## About the Exercise

The purpose of this exercise was to practice building a multi-page single-page application (SPA) using **React**, **React Router**, and an introduction to **Redux** for state management. Key concepts covered include:

- Creating and composing React functional components
- Setting up client-side routing with React Router (v6) to navigate between a list view and individual detail pages
- Wiring up a Redux reducer and store as a foundation for centralised state management
- Deploying a React app to GitHub Pages

## What the App Does

The app displays a collection of fun facts about the internet. The home page shows all facts as clickable cards. Clicking a card (or selecting a numbered link in the navbar) navigates to a detail page for that fact. A "Back" button returns the user to the home page.

The app is live at: https://ksamavati.github.io/internet-facts-app/

## Running Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

## Deploying to GitHub Pages

```bash
npm run deploy
```
