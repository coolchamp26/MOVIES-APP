# 🎬 Movies App

A simple movie browsing application built with **React** and **Vite** that uses the **TMDB API** to fetch and display movie data. Users can search for movies, explore popular titles, and save their favorite movies for quick access.

## Features

- 🔍 Search for movies
- 🎥 Browse popular movies
- ⭐ Add movies to favourites
- ❌ Remove movies from favourites
- 📅 View movie release dates
- 🖼️ Display movie posters
- ⚡ Fast and responsive React interface

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- TMDB API

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/movies-app.git
cd movies-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```text
src/
├── components/
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── pages/
│   ├── Home.jsx
│   └── Favourites.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── App.css
```

## API

Movie data is provided by The Movie Database (TMDB) API.

- Search movies
- Fetch popular movies
- Retrieve movie details such as posters, ratings, and release dates

## Favourites

The application allows users to maintain a personal favourites list by adding and removing movies directly from the interface.

## Future Improvements

- Movie details page
- Genre filtering
- Infinite scrolling
- Pagination
- User authentication

## License

This project is intended for learning and educational purposes.