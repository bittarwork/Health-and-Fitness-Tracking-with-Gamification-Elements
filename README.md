# Health and Fitness Tracking with Gamification Elements

A full-stack web application for tracking health and fitness activities with gamification features to keep users motivated and engaged.

## Project Overview

This project is a graduation project that implements a health and fitness tracking system with gamification elements. Users can log their daily activities, earn points, unlock badges, compete on leaderboards, and complete challenges.

## Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Express-Session with bcryptjs
- **Validation:** Express-Validator
- **Security:** CORS, Rate Limiting

### Frontend
- **Library:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Charts:** Chart.js with react-chartjs-2
- **Routing:** React Router DOM v6
- **HTTP Client:** Axios

## Features

### Core Features
- **User Authentication:** Secure registration and login system
- **Activity Tracking:** Log daily activities including:
  - Steps count
  - Distance traveled (km)
  - Exercise time (minutes)
  - Calories burned

### Gamification Features
- **Points System:** Earn points for every activity logged
- **Leveling System:** Progress through levels as you accumulate points
- **Badges:** Unlock achievement badges for reaching milestones
- **Leaderboard:** Compete with other users
- **Daily Challenges:** Complete daily and weekly challenges for bonus rewards
- **Streak Tracking:** Maintain daily activity streaks for extra motivation

### Analytics & Statistics
- Visual charts for tracking progress
- BMI tracking
- Trend analysis
- Weekly and monthly statistics
- Calorie calculator

## Project Structure

```
├── backend/
│   ├── config/
│   │   └── database.js           # MongoDB connection configuration
│   ├── controllers/
│   │   ├── activity.controller.js
│   │   ├── auth.controller.js
│   │   ├── challenge.controller.js
│   │   ├── gamification.controller.js
│   │   ├── leaderboard.controller.js
│   │   └── user.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── errorHandler.middleware.js
│   │   ├── rateLimiter.middleware.js
│   │   └── validation.middleware.js
│   ├── models/
│   │   ├── Activity.js
│   │   ├── Badge.js
│   │   ├── Challenge.js
│   │   ├── Leaderboard.js
│   │   ├── Level.js
│   │   └── User.js
│   ├── routes/
│   │   ├── activity.routes.js
│   │   ├── auth.routes.js
│   │   ├── challenge.routes.js
│   │   ├── gamification.routes.js
│   │   ├── leaderboard.routes.js
│   │   └── user.routes.js
│   ├── services/
│   │   ├── badge.service.js
│   │   ├── challenge.service.js
│   │   ├── leaderboard.service.js
│   │   ├── level.service.js
│   │   └── points.service.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── validators.js
│   ├── scripts/
│   │   ├── createTestUser.js
│   │   ├── fixActivityIndex.js
│   │   └── initializeBadges.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── challenges/
│   │   │   │   └── ChallengeCard.jsx
│   │   │   ├── charts/
│   │   │   │   ├── BMITrackingChart.jsx
│   │   │   │   ├── CaloriesChart.jsx
│   │   │   │   ├── ComparisonChart.jsx
│   │   │   │   ├── DistanceChart.jsx
│   │   │   │   ├── ExerciseTimeChart.jsx
│   │   │   │   └── StepsChart.jsx
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── CalorieCalculator.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Confetti.jsx
│   │   │   │   ├── ErrorBoundary.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Loading.jsx
│   │   │   │   ├── PasswordStrength.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   └── ToastContainer.jsx
│   │   │   ├── gamification/
│   │   │   │   ├── BadgeCard.jsx
│   │   │   │   ├── LevelProgress.jsx
│   │   │   │   └── PointsDisplay.jsx
│   │   │   └── statistics/
│   │   │       └── TrendAnalysis.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ToastContext.jsx
│   │   ├── pages/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── ActivityEntry.jsx
│   │   │   ├── Badges.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Statistics.jsx
│   │   ├── services/
│   │   │   ├── activity.service.js
│   │   │   ├── api.js
│   │   │   ├── auth.service.js
│   │   │   ├── challenge.service.js
│   │   │   ├── gamification.service.js
│   │   │   ├── leaderboard.service.js
│   │   │   └── user.service.js
│   │   ├── utils/
│   │   │   ├── activityTemplates.js
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret_key
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

4. Initialize badges (first time only):
   ```bash
   npm run init-badges
   ```

5. Start the server:
   ```bash
   # Development mode with hot reload
   npm run dev
   
   # Production mode
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/stats` - Get user statistics

### Activities
- `POST /api/activities` - Log a new activity
- `GET /api/activities` - Get user activities
- `GET /api/activities/today` - Get today's activity
- `GET /api/activities/stats/:period` - Get activity statistics
- `DELETE /api/activities/:id` - Delete an activity

### Gamification
- `GET /api/gamification/points` - Get user points and level
- `GET /api/gamification/badges` - Get user badges
- `GET /api/gamification/badges/all` - Get all available badges

### Challenges
- `GET /api/challenges/active` - Get active challenges
- `POST /api/challenges/default` - Create default challenges

### Leaderboard
- `GET /api/leaderboard` - Get leaderboard rankings
- `GET /api/leaderboard/stats` - Get leaderboard statistics

## Data Models

### User
- username, email, password
- age, weight, height, goal
- totalPoints, currentLevel
- badges, streakDays, lastActivityDate

### Activity
- userId, date
- steps, distance, exerciseTime, calories
- pointsEarned

### Badge
- name, description, icon
- category (activity, streak, milestone)
- requirement (type, value)
- pointsReward

### Challenge
- userId, type (daily, weekly)
- target (type, value)
- startDate, endDate
- completed, completedDate
- pointsReward

### Level
- levelNumber, title
- minPoints, maxPoints
- color

## Environment Variables

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | - |
| SESSION_SECRET | Session secret key | - |
| NODE_ENV | Environment mode | development |
| CORS_ORIGIN | Allowed CORS origin | http://localhost:3000 |

## Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run init-badges` - Initialize default badges

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment

The backend is deployed on Railway:
- **API URL:** https://bakery-management-system-production.up.railway.app/api/

## License

ISC License

## Author

Graduation Project - 2024
