# 🌟 Gemini Clone - Modern AI Chat Interface

A beautifully designed clone of Google Gemini with a clean, professional interface matching the original design. Built with React and powered by Google's Generative AI.

![Gemini Clone](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-6.0.1-purple) ![Google AI](https://img.shields.io/badge/Google%20AI-Gemini-orange)

![Gemini Chat Screenshot](https://drive.google.com/uc?id=1ZDcl_tM0p_MdyK5mIGidx6Lr7jE-R7UZ)

## ✨ Features

### 🎨 **Design**
- ✅ Modern, clean interface matching Google Gemini
- ✅ Material Design principles with professional shadows
- ✅ Google Sans typography
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Beautiful gradient effects

### 💬 **Chat Experience**
- ✅ Real-time AI responses using Google Gemini API
- ✅ Markdown support with proper formatting
- ✅ Syntax highlighting for code blocks (VS Code theme)
- ✅ Copy code and response functionality
- ✅ Loading states with shimmer animation
- ✅ Typing animation effect
- ✅ Suggestion cards for quick prompts

### 📱 **Responsive**
- ✅ Mobile-first design approach
- ✅ Collapsible sidebar with mobile drawer
- ✅ Touch-friendly interface (44x44px minimum targets)
- ✅ Optimized for all screen sizes

### 🎯 **Functionality**
- ✅ New chat creation
- ✅ Recent conversation history
- ✅ Prompt suggestions (4 pre-defined cards)
- ✅ Enter key to send messages
- ✅ State management with Context API
- ✅ Error handling with user-friendly messages

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chiragj2003/gemini-clone.git
   cd gemini-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example file and add your API key:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🎨 Design System

### Color Palette
```css
Primary Color:   #1a73e8 (Google Blue)
Hover Color:     #1557b0
Background:      #ffffff
Surface:         #f8f9fa
Text Primary:    #202124
Text Secondary:  #5f6368
Border:          #dadce0
```

### Typography
- **Font Family**: Google Sans, Segoe UI, Tahoma, sans-serif
- **Weights**: 300, 400, 500, 600, 700
- **Line Heights**: 1.4 - 1.7 for optimal readability

### Spacing
- **Radius**: 8px (sm), 12px (md), 24px (lg), 9999px (full)
- **Shadows**: Material Design elevation system

## 📁 Project Structure

```
gemini-clone/
├── src/
│   ├── components/
│   │   ├── Main/
│   │   │   ├── Main.jsx          # Main chat interface
│   │   │   └── main.css          # Main component styles
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   │   └── Sidebar.css       # Sidebar styles
│   │   └── ai/
│   │       ├── chat.jsx          # Chat response renderer
│   │       └── code-highlighter.jsx  # Code block component
│   ├── context/
│   │   └── context.jsx           # Global state management
│   ├── config/
│   │   └── gemini.js             # AI configuration
│   ├── assets/
│   │   └── assets.js             # Image/icon assets
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── FEATURES.md                   # Complete feature list
├── DESIGN_UPDATES.md             # Design documentation
└── README.md                     # This file
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| Vite | 6.0.1 | Build Tool |
| Google Generative AI | 0.21.0 | AI Integration |
| React Markdown | 9.0.1 | Markdown Rendering |
| React Syntax Highlighter | 15.6.1 | Code Highlighting |
| Lucide React | 0.468.0 | Icons |
| Tailwind CSS | 3.4.16 | Utility Styles |

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎯 Key Features Breakdown

### Chat Interface
- **Markdown Support**: H1-H6, lists, code blocks, inline code
- **Code Highlighting**: VS Code Dark Plus theme with 100+ languages
- **Copy Functionality**: Copy entire responses or individual code blocks
- **Loading States**: Beautiful shimmer animation during AI processing
- **Typing Effect**: Words appear progressively for natural feel

### Sidebar Navigation
- **Expandable/Collapsible**: Toggle sidebar width
- **Recent History**: Access previous conversations
- **Quick Actions**: Help, Activity, Settings (UI ready)
- **Mobile Drawer**: Slides in from left on mobile devices
- **Smart Deduplication**: Prevents duplicate prompts in history

### Responsive Breakpoints
- **Desktop**: > 900px (Full sidebar, grid layout)
- **Tablet**: 768px - 900px (Reduced sidebar, adjusted grid)
- **Mobile**: < 768px (Drawer sidebar, stacked layout)
- **Small Mobile**: < 600px (Optimized for phones)

## 🎨 Customization

### Changing Colors
Edit `/src/index.css` CSS variables:
```css
:root {
  --primary-color: #1a73e8;  /* Change primary color */
  --text-primary: #202124;   /* Change text color */
  /* ... more variables */
}
```

### Changing Fonts
Update the font import in `/src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Modifying Suggestion Cards
Edit the cards in `/src/components/Main/Main.jsx`:
```jsx
<div className="card" onClick={() => handleCardClick('Your prompt here')}>
  <p>Your suggestion text</p>
  <img src={assets.your_icon} alt="Icon" />
</div>
```

## 🐛 Troubleshooting

### API Key Issues
- Ensure your `.env` file has the correct API key
- Restart the dev server after adding the API key: `npm run dev`
- Check that the key starts with `VITE_` for Vite to recognize it
- Verify your API key is valid at [Google AI Studio](https://makersuite.google.com/)

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version: `node -v` (should be 16+)

### Styling Issues
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check browser console for errors

## 📚 Documentation

- [FEATURES.md](./FEATURES.md) - Complete feature list with checkmarks
- [DESIGN_UPDATES.md](./DESIGN_UPDATES.md) - Detailed design changes and rationale
- [REDESIGN_SUMMARY.md](./REDESIGN_SUMMARY.md) - Complete redesign summary

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chirag**
- GitHub: [@Chiragj2003](https://github.com/Chiragj2003)

## 🙏 Acknowledgments

- Google for the Gemini AI API
- The React team for an amazing framework
- All contributors and users of this project

---

**Built with ❤️ using React and Google Gemini AI**

For questions or support, please open an issue on GitHub.