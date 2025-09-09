# Aarya Singh - Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring smooth animations with Framer Motion.

## Features

- **Modern Design**: Clean, minimalist design with a focus on readability and professional presentation
- **Responsive Layout**: Mobile-friendly design that works on all screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, smooth scrolling, and interactive elements
- **Professional Sections**:
  - Header with sticky navigation
  - About section with personal introduction
  - Resume section with downloadable PDF and inline content
  - Projects showcase with tech stack and links
  - Contact form with social media links

## Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **HTML5** - Semantic markup
- **CSS3** - Custom styles and animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aaryasingh/aaryasingh.github.io.git
cd aaryasingh.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── About.js           # About section
│   ├── Resume.js          # Resume section
│   ├── Projects.js        # Projects showcase
│   └── Contact.js         # Contact form and info
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Colors
The color palette can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color variations
  },
  gray: {
    // Your gray color variations
  }
}
```

### Content
Update the content in each component file:
- Personal information in `About.js`
- Resume content in `Resume.js`
- Project details in `Projects.js`
- Contact information in `Contact.js`

### Animations
Modify animations in the component files using Framer Motion props:
- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing
- `whileHover` - Hover animations
- `whileTap` - Click animations

## Deployment

This project is configured for GitHub Pages deployment. Simply push to the main branch and GitHub Pages will automatically build and deploy the site.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: aarya@example.com
- LinkedIn: [linkedin.com/in/aaryasingh](https://linkedin.com/in/aaryasingh)
- GitHub: [github.com/aaryasingh](https://github.com/aaryasingh)