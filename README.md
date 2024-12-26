# Weather Journal App 🌤️

A full-stack web application that allows users to enter their zip code and feelings, then displays the date, temperature for the given location and the user's input .

- [📑 Project Overview](#-project-overview)
- [🛠️ Technologies Used](#️-technologies-used)
- [📂 Project Structure](#-project-structure)
- [🌐 How It Works](#-how-it-works)
- [🚀 Installation](#-installation)
- [📈 Usage](#-usage)

## 📑 Project Overview

This app fetches temperature data based on the user’s zip code, allowing them to input their feelings and receive updated weather info for their area. The data is fetched from the [OpenWeather API](https://openweathermap.org/api) and updated on the UI with the user’s most recent entries, including the temperature, current date, and their feelings.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express
  - **Dependencies**:
    - `cors`: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **Frontend**: HTML, CSS, Vanilla JavaScript

## 📂 Project Structure

|── package.json # Project dependencies and scripts
├── README.md # Project documentation
├── server.js # Backend server script
├── website/ # Frontend files
│ ├── index.html # Main HTML file
│ ├── app.js # Client-side JavaScript
│ ├── styles.css # Stylesheet
│ └── assets/ # Folder for static assets
│ └── images/ # Image assets

## 🌐 How It Works

1. **User Input**: The user enters their zip code and feelings.
2. **Temperature Fetch**: The zip code is sent to the OpenWeather API to get the current temperature in imperial units.
3. **Data Storage**: The temperature, date, and user’s feelings are sent to the server and stored in a variable.
4. **UI Update**: The frontend fetches the stored data from the server and updates the UI with the most recent entry.

## 🚀 Installation

1. Download dependencies:
   ```bash
      npm install
   ```
2. Run the server:
   ```bash
      node server.js
   ```

## 📈 Usage

1. Enter a zip code and your feelings in the input fields.
2. Click Generate to submit.
3. The app will fetch the current temperature and update the display with the temperature, the date, and the user’s feelings.
