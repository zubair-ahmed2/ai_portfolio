# My AI Engineer Portfolio

Hey there! 👋 This is my personal portfolio website showcasing my work as an AI Engineer. I built this to demonstrate my skills in both frontend and backend development, with a focus on modern web technologies.

## What I Built

This portfolio is a full-stack application featuring:

- **Frontend**: React + TypeScript + Vite for lightning-fast development
- **Backend**: FastAPI with Python for a robust API
- **Design**: Modern dark/light theme with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile

## Features

✨ **Modern UI/UX** - Clean design with gradient accents and smooth animations  
📱 **Fully Responsive** - Looks great on any device  
🌙 **Dark/Light Mode** - Toggle between themes with persistent preference  
⚡ **Fast Performance** - Built with Vite for optimal speed  
🎨 **Smooth Animations** - Framer Motion for delightful interactions  
🔌 **REST API** - FastAPI backend with auto-generated documentation  
📝 **Type Safety** - Full TypeScript implementation  
🚀 **Production Ready** - Optimized builds and deployment ready  

## Tech Stack

### Frontend
- React 18.2 with TypeScript
- Vite for build tooling
- Framer Motion for animations
- Axios for API calls
- React Icons for beautiful icons

### Backend
- FastAPI with Python
- Pydantic for data validation
- Uvicorn ASGI server
- CORS enabled for frontend integration

## Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Running the Application

**Start the backend server:**
```bash
cd backend
python -m uvicorn main:app --reload
```

**Start the frontend (in a new terminal):**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000` or `http://localhost:5173` to see the portfolio!

## Customization

### Updating Content
Edit `backend/main.py` and modify the `get_portfolio_data()` function to update:
- Personal information (name, title, bio)
- Skills and technologies
- Projects and experience
- Contact information

### Styling
Modify CSS files in `frontend/src/components/` to customize:
- Colors and gradients
- Animations and transitions
- Layout and spacing

### Theme Customization
The app supports both dark and light themes. Toggle using the sun/moon icon in the navigation.

## Project Structure

```
Portfolio/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── contexts/        # Theme context
│   │   ├── api/            # API client
│   │   └── types/          # TypeScript types
│   └── package.json
├── backend/                 # FastAPI application
│   ├── main.py             # API routes and data
│   └── requirements.txt    # Python dependencies
└── README.md
```

## API Endpoints

- `GET /api/portfolio` - Returns complete portfolio data
- `POST /api/contact` - Handles contact form submissions
- `GET /health` - Health check endpoint
- `GET /docs` - Interactive API documentation

## Deployment

### Frontend
Build the production version:
```bash
cd frontend
npm run build
```

Deploy the `dist` folder to any static hosting service like Vercel, Netlify, or GitHub Pages.

### Backend
Deploy to platforms like Railway, Render, Heroku, or AWS.

## What I Learned

Building this portfolio taught me:
- Modern React patterns with hooks and context
- TypeScript for type-safe development
- FastAPI for building robust APIs
- CSS animations and responsive design
- Component architecture and state management
- API integration and error handling

## Contact

Feel free to reach out if you have any questions or just want to chat about AI/ML!

- **Email**: [your-email@example.com]
- **GitHub**: [your-github-username]
- **LinkedIn**: [your-linkedin-profile]

---

*Built with ❤️ and lots of coffee ☕*

*Last updated: January 2025*