# ✨ Todo App

A modern, responsive todo application built with React and Tailwind CSS. Organize your tasks with style and simplicity.

![Todo App Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Todo+App+Preview)

## 🚀 Live Demo

**[View Live App](https://username.github.io/todo-app)**

## 📋 Features

- ✅ **Add, Delete & Toggle Todos** - Complete CRUD operations
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 📱 **Mobile-First** - Optimized for all device sizes
- 🔄 **Filter Todos** - View all, active, or completed tasks
- 📊 **Task Statistics** - Real-time count of active and completed todos
- 🗑️ **Clear Completed** - Bulk delete completed tasks
- 💾 **Local Storage** - Persists todos between sessions
- ⚡ **Smooth Animations** - Delightful user interactions
- 🎯 **Intuitive UX** - Easy-to-use interface

## 🛠️ Tech Stack

- **Frontend**: React 18 (via CDN)
- **Styling**: Tailwind CSS (via CDN)
- **Build Tool**: Babel (via CDN)
- **Deployment**: GitHub Pages
- **Storage**: Browser LocalStorage

## 📦 Installation

### Prerequisites
- A modern web browser
- Git (for cloning the repository)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/todo-app.git
   cd todo-app
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or serve it using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have npx)
   npx serve .
   ```

3. **Access the app**
   - If using a local server: `http://localhost:8000`
   - If opening directly: File path to `index.html`

## 🎯 Usage

### Adding Todos
1. Type your task in the input field
2. Press Enter or click "Add" button
3. Your todo will appear at the top of the list

### Managing Todos
- **Complete a todo**: Click the circular checkbox
- **Delete a todo**: Click the trash icon
- **Filter todos**: Use the filter buttons (All, Active, Completed)
- **Clear completed**: Click "Clear completed" button

### Features Overview
- **Real-time stats**: See active, completed, and total todo counts
- **Persistent storage**: Todos are saved in your browser
- **Responsive design**: Works perfectly on desktop, tablet, and mobile
- **Smooth animations**: Enjoy delightful interactions

## 🚀 Deployment

### GitHub Pages Deployment

1. **Create a new repository on GitHub**
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/todo-app.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select root folder (/)
   - Click "Save"

3. **Access your deployed app**
   - Your app will be available at: `https://username.github.io/todo-app`
   - It may take a few minutes for the first deployment

### Alternative Deployment Options

- **Netlify**: Drag and drop the `index.html` file
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy

## 🏗️ Project Structure

```
todo-app/
├── index.html          # Main application file
├── README.md          # Project documentation
├── spec.md            # Technical specifications
└── .gitignore         # Git ignore file
```

## 🎨 Customization

### Styling
The app uses Tailwind CSS classes. You can customize:
- Colors: Modify the color classes (blue-500, green-500, etc.)
- Spacing: Adjust padding and margin classes
- Animations: Modify the custom animation classes

### Features
To add new features:
1. Modify the React component in `index.html`
2. Add new state variables using `useState`
3. Implement new functions for additional functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React** - For the amazing component library
- **Tailwind CSS** - For the utility-first CSS framework
- **GitHub Pages** - For free hosting and deployment
- **Babel** - For JSX transformation

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Contact: [your-email@example.com]
- Project URL: [https://github.com/username/todo-app](https://github.com/username/todo-app)

---

**Made with ❤️ and ☕ by [Your Name]**
