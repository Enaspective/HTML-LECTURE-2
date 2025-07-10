# GoQuizer - Interactive Quiz Application

A modern, beautiful quiz application built with HTML, CSS, and JavaScript, inspired by the Figma design. Test your knowledge across multiple categories with different difficulty levels.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Multiple Categories**: General Knowledge, Science & Technology, History & Culture, Geography
- **Difficulty Levels**: Easy, Medium, and Hard
- **Interactive Timer**: 30-second countdown with visual warnings
- **Progress Tracking**: Real-time progress bar and question counter
- **Score Visualization**: Animated circular progress ring
- **Performance Feedback**: Personalized messages based on performance
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## 🚀 Live Demo

[View the live demo here](https://your-username.github.io/goquizer-app/)

## 📁 Project Structure

```
goquizer-app/
├── index.html          # Main HTML file
├── styles.css          # Modern CSS with animations
├── script.js           # Quiz functionality
├── README.md           # This file
├── deploy.md           # Deployment instructions
├── package.json        # Project configuration
└── .gitignore          # Git ignore rules
```

## 🛠️ Setup Instructions

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/goquizer-app.git
   cd goquizer-app
   ```

2. **Open in your browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**:
   - If using a local server: `http://localhost:8000`
   - If opening directly: File path to `index.html`

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at**:
   `https://your-username.github.io/goquizer-app/`

## 🎮 How to Play

1. **Choose a Category**: Select from General Knowledge, Science & Technology, History & Culture, or Geography
2. **Select Difficulty**: Pick Easy, Medium, or Hard
3. **Start Quiz**: Click "Start Quiz" to begin
4. **Answer Questions**: Click on your chosen answer within 30 seconds
5. **View Results**: See your score with animated progress ring
6. **Try Again**: Retry the same quiz or start a new one

## 🎨 Features in Detail

### Quiz Categories
- **General Knowledge**: Basic facts about the world
- **Science & Technology**: Scientific concepts and discoveries
- **History & Culture**: Historical events and figures
- **Geography**: World geography and locations

### Difficulty Levels
- **Easy**: Basic questions suitable for everyone
- **Medium**: More challenging questions
- **Hard**: Advanced questions for experts

### Timer System
- 30-second countdown for each question
- Visual warning when time is running low
- Automatic progression when time runs out

### Score Visualization
- Animated circular progress ring
- Detailed breakdown of performance
- Personalized feedback based on score

## 🎯 Customization

### Adding New Questions

To add new questions, edit the `script.js` file and add to the `allQuestions` object:

```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer (0-3)
}
```

### Styling Changes

Modify `styles.css` to customize:
- Colors and gradients (CSS variables)
- Fonts and typography
- Animations and transitions
- Layout and spacing

### Adding New Categories

1. Add a new category card in `index.html`
2. Add corresponding questions in `script.js`
3. Update the category selection logic

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎨 Design Features

- **Glass Morphism**: Backdrop blur effects
- **Smooth Animations**: CSS transitions and keyframes
- **Modern Color Palette**: Purple and blue gradients
- **Responsive Grid**: CSS Grid and Flexbox
- **Interactive Elements**: Hover effects and micro-interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts (Inter) for typography
- CSS Grid and Flexbox for layout
- Modern CSS features for animations and effects

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the existing issues for solutions
- Review the code comments for implementation details

---

**Happy Quizzing! 🧠✨** 