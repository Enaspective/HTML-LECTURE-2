# Modern Quiz App

A beautiful, interactive quiz application built with HTML, CSS, and JavaScript. Test your knowledge across multiple categories with different difficulty levels.

## 🌟 Features

- **Multiple Categories**: General Knowledge, Science, History, and Technology
- **Difficulty Levels**: Easy, Medium, and Hard
- **Interactive UI**: Modern design with smooth animations and transitions
- **Timer System**: 30-second countdown for each question
- **Progress Tracking**: Visual progress bar and question counter
- **Score Calculation**: Detailed results with performance feedback
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## 🚀 Live Demo

[View the live demo here](https://your-username.github.io/modern-quiz-app/)

## 📁 Project Structure

```
modern-quiz-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Setup Instructions

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/modern-quiz-app.git
   cd modern-quiz-app
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
   `https://your-username.github.io/modern-quiz-app/`

## 🎮 How to Play

1. **Choose a Category**: Select from General Knowledge, Science, History, or Technology
2. **Select Difficulty**: Pick Easy, Medium, or Hard
3. **Start Quiz**: Click "Start Quiz" to begin
4. **Answer Questions**: Click on your chosen answer
5. **View Results**: See your score and performance feedback
6. **Try Again**: Retry the same quiz or start a new one

## 🎨 Features in Detail

### Quiz Categories
- **General Knowledge**: Basic facts about the world
- **Science**: Scientific concepts and discoveries
- **History**: Historical events and figures
- **Technology**: Modern tech and computing

### Difficulty Levels
- **Easy**: Basic questions suitable for everyone
- **Medium**: More challenging questions
- **Hard**: Advanced questions for experts

### Timer System
- 30-second countdown for each question
- Visual warning when time is running low
- Automatic progression when time runs out

### Scoring System
- Points awarded for correct answers
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
- Colors and gradients
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
- Google Fonts for typography
- CSS Grid and Flexbox for layout
- Modern CSS features for animations

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the existing issues for solutions
- Review the code comments for implementation details

---

**Happy Quizzing! 🧠✨** 