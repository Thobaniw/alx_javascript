#!/usr/bin/node
const axios = require('axios');

// Check if a movie ID is provided as a command line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: node star_wars_characters.js <Movie ID>');
  process.exit(1);
}

// Define the Star Wars API base URL
const baseUrl = 'https://swapi.dev/api/films/';

// Function to fetch and print character names
async function fetchAndPrintCharacters(movieId) {
  try {
    // Send a GET request to fetch information about the specified movie
    const response = await axios.get(`${baseUrl}${movieId}/`);

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      const movieData = response.data;
      console.log(`Characters in ${movieData.title} (${movieData.release_date}):`);

      // Loop through the characters and print their names
      for (const characterUrl of movieData.characters) {
        const characterResponse = await axios.get(characterUrl);
        const characterData = characterResponse.data;
        console.log(characterData.name);
      }
    } else {
      console.error(`Failed to fetch movie data for Movie ID ${movieId}`);
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Call the function to fetch and print character names
fetchAndPrintCharacters(movieId);

