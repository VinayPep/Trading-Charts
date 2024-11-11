# Trading Charts

A modern analytics dashboard built with ReactJs, JavaScript, and Tailwind CSS, featuring SSO authentication and data visualization of international trade metrics.

## 🚀 Features

- **Authentication**
  - Secure SSO integration (Auth0)
  - Protected routes
  - Seamless login/logout flow

- **Analytics Dashboard**
  - Interactive trade metrics visualization
  - Responsive design

- **Technical Stack**
  - ReactJs with  JavaScript
  - Tailwind CSS for styling
  - Recharts for data visualization

## 📋 Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trade-analytics-dashboard.git
cd trade-analytics-dashboard
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

Fill in the following variables in `.env.local`:
```
ALREADY ADDED IN THE ENV CURRENTLY
```

3. Start the development server:
```bash
npm run start
```

The application will be available at `http://localhost:3002`.

## 🏗️ Project Structure

```
├── components/        # UI components
├── assets/            # Static assets
├── context/           # Context api to manage the token and user
├── commons/           # Common/ Reusable components with utilities
├── routes/            # Custom Routes for Public and Private Endpoints
└── hooks/             # Custom Hooks 
```



## 🎨 Styling

The project uses Tailwind CSS for styling. Custom configurations can be modified in:
- `tailwind.config.js`

## 📝 Development Guidelines

- Run ESLint: `npm run lint`
- Format code: `npm run format`
- Build project: `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## ✨ Acknowledgments

- Data source: [Kaggle International Trade Analysis](https://www.kaggle.com/datasets/international-trade-analysis)
- Auth0/Okta for authentication solutions
