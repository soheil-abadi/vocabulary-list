# Vocabulary Project

## Overview

This project involves creating and managing a vocabulary list. Users can submit words along with their descriptions, and the entries are displayed on the page. The project also includes functionality to save the vocabulary list to local storage and navigate to a separate page to view saved entries.

## Project Structure

### HTML Files

1. **index.html**

   - Contains the main interface for entering and displaying vocabulary.
   - Includes a form for submitting words and descriptions.
   - Displays a list of submitted entries.
   - Provides a button to clear the list and a link to the saved entries page.

2. **saveindex.html**
   - Displays the saved entries with an option to delete each entry.

### JavaScript Files

1. **app.js**

   - Manages the main functionality of the vocabulary list.
   - Listens for DOMContentLoaded event and initializes the necessary elements.
   - Handles the submission of words and descriptions, updating the display and saving to local storage.
   - Implements a function to load existing vocabulary from local storage.
   - Provides a button to clear all entries.

2. **save.js**
   - Manages the functionality of the saved entries page.
   - Dynamically updates the display with entries from local storage.
   - Allows users to delete saved entries.

### CSS File

1. **style.css**
   - Defines the styling for the main and saved entries pages.
   - Specifies the layout, colors, and appearance of various elements.

## Style

The project has a clean and responsive design, utilizing a background image and appropriate styling for form elements, lists, and buttons.

## Usage

1. Open `index.html` to access the main vocabulary page.
2. Enter words and descriptions in the form and submit.
3. View the list of entered words with descriptions.
4. Click the "Clear" button to remove all entries.
5. Click the "go to save page" link to navigate to the saved entries page.

## Saved Entries Page

1. Open `saveindex.html` to view saved entries.
2. Each entry includes the word, description, and a delete button.
3. Click the delete button to remove an entry from both the display and local storage.

## Note

The project utilizes localStorage to persist data between sessions. The design is visually appealing and user-friendly.
