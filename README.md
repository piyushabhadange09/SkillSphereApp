# 🌐 SkillSphere
SkillSphere is a collaborative platform designed to facilitate skill exchange among users.
It empowers individuals to connect, share expertise, and learn from each other in real-time, fostering a culture of continuous learning and personal growth. 🚀

# 🔑 Key Features

🎯 User-Friendly Interface
Built with React, ensuring a smooth and responsive user experience.


🔐 Secure Authentication
Login securely using Google OAuth 2.0, with JWT used for safe session management.


👤 Profile Management
Users can create and update their profiles to showcase their skills and learning interests.

🔄 Skill Exchange Mechanism
Easily send and manage skill exchange requests for interactive learning.


💬 Real-Time Communication
Integrated chat functionality powered by Socket.io for instant messaging and real-time conversations.


# ⚙️ Installation Guide


# 📁3.1 Clone the Repository
git clone https://github.com/piyushabhadange09/SkillSphereApp.git
cd SkillSphereApp


# 🔧3.2 Backend Setup
cd backend
npm install

📝 Create a .env file inside the backend directory with the following contents:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/skillsphere
JWT_SECRET=<Your JWT Secret Key>

*Google OAuth Credentials

GOOGLE_CLIENT_ID= <Your Google Client ID>

GOOGLE_CLIENT_SECRET=<Your Google Client Secret>

GOOGLE_CALLBACK_URL=http://localhost:8000/auth/google/callback

🛢️ Start the MongoDB server (if not already running):
bash
Copy
Edit

🚀 Start the backend server:
  npm run dev

✅ Backend server runs on: http://localhost:8000

# 💻3.3 Frontend Setup

1.Open a new terminal window/tab.

2.Navigate to the frontend directory:
cd frontend

3.Install dependencies:
npm install

4.Start the frontend development server:
npm run dev

App will be live at: http://localhost:5173
