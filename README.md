# 🌍 World Clock Dashboard

A responsive React dashboard that displays the current time, allows switching between analog and digital clock views, and tracks time across multiple cities worldwide.

This project is built with Vite and React and includes theme switching, 12/24-hour formatting, custom timezone support, and a simple alarm manager.

## ✨ Features

- Real-time analog clock
- Real-time digital clock
- Multi-city world clock list
- Add or remove custom time zones
- 12-hour / 24-hour time formatting toggle
- Light and dark mode
- Alarm creation and deletion
- Responsive layout for desktop and smaller screens

## 🧩 Tech Stack

- React
- Vite
- JavaScript
- CSS

## 📁 Project Structure

```text
world-clock-dashboard/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Alarm.jsx
│   │   ├── AnalogClock.jsx
│   │   ├── Controls.jsx
│   │   ├── DigitalClock.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── WorldClock.jsx
│   ├── data/
│   │   └── timezones.js
│   ├── styles/
│   │   ├── App.css
│   │   └── Clock.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── Screenshots/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/siddhinehe19/react-world-clock-dashboard.git
```

2. Navigate to the project folder:

```bash
cd react-world-clock-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the app in your browser at:

```text
http://localhost:5173
```

## 🕒 How It Works

- The app uses the browser's current system time and updates once per second.
- Each world clock calculates the local time based on the configured timezone using the browser's Intl APIs.
- The alarm feature checks the current time against saved alarm values and triggers a browser alert when the match occurs.
- Theme and display preferences are controlled from the dashboard controls panel.

## 📸 Screenshots

![World Clock Dashboard Screenshot](https://github.com/user-attachments/assets/02d2c785-a2b7-4019-9c6f-c3e1c0fb14fe)

![World Clock Dashboard UI](https://github.com/user-attachments/assets/820f18cd-a598-4431-b0cb-abc22d88a27d)

![World Clock Dashboard Controls](https://github.com/user-attachments/assets/f5dc9fdb-dd98-41f0-b7ea-7337ba499185)

![Clock View](https://github.com/user-attachments/assets/3e6d4ca9-11fd-499c-bdd4-d2de686291c0)

## 🔮 Possible Improvements

- Add alarm sound notifications
- Add stopwatch and countdown timer features
- Save user preferences in local storage
- Integrate weather or timezone search suggestions
- Add draggable dashboard layout

## 📄 License

This project is for educational and demonstration purposes.
