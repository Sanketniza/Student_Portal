# DYP Portal - Job Portal Application

A full-stack job portal application where companies can post jobs and students can apply to them.

## 🚀 Live Demo

Visit the live application: [DYP Portal](https://dyp-portal-ruddy.vercel.app/)

## 📋 Features

- **User Authentication**: Secure signup and login for students and administrators
- **Company Management**: Create and manage company profiles
- **Job Postings**: Post and manage job listings with detailed descriptions
- **Job Applications**: Students can browse and apply to jobs
- **Application Tracking**: Track application status (Pending, Accepted, Rejected)
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React**: Frontend library for building user interfaces
- **Redux**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server

### Backend
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **JWT**: Authentication using JSON Web Tokens
- **Cloudinary**: Cloud storage for images

### Deployment
- **Vercel**: Hosting platform for the full-stack application
- **MongoDB Atlas**: Cloud database service

## 🏗️ Project Structure

```
├── frontend/           # React frontend
│   ├── src/            # Source code
│   │   ├── components/ # UI components
│   │   ├── redux/      # Redux store and slices
│   │   ├── lib/        # Utilities and API client
│   │   └── hooks/      # Custom React hooks
│   └── dist/           # Production build
├── backend/            # Express backend
│   ├── controllers/    # Request handlers
│   ├── models/         # MongoDB schema models
│   ├── routes/         # API endpoints
│   ├── middlewares/    # Custom middleware
│   └── utils/          # Utility functions
├── api/                # Serverless function entry point
└── vercel.json         # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Sanketniza/DYP_Portal.git
   cd DYP_Portal
   ```

2. Install dependencies
   ```bash
   npm run install-all
   ```

3. Create `.env` file in the root directory with the following variables
   ```
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Screenshots

[Add screenshots of your application here]

## 🧪 Testing

[Explain how to run tests for your application]

## 📄 License

[Specify your license information]

## 👨‍💻 Contributors

- [Your Name](https://github.com/yourusername)

## 🙏 Acknowledgements

- Thanks to all libraries and tools used in this project
- [Any other acknowledgements you want to add]
