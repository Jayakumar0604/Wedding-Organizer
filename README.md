# Wedding Organizer - Professional Wedding Planning Website

A modern, responsive wedding planning website built with React and Vite. This elegant single-page application showcases wedding services, galleries, testimonials, and provides an easy way for couples to get in touch with wedding organizers.

🌐 **Live Demo**: [https://wedding-organizer.netlify.app/](https://wedding-organizer.netlify.app/)

## 🎯 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Multi-Page Navigation**: Clean routing structure with dedicated pages for:
  - Home
  - About
  - Services
  - Gallery
  - Testimonials
  - Contact
- **Interactive Components**:
  - Image slider/carousel for showcasing wedding photos
  - Mobile-friendly navigation menu
  - Social media integration
- **Modern UI/UX**: Built with TailwindCSS for a beautiful, modern interface
- **Fast Performance**: Powered by Vite for lightning-fast development and optimized production builds

## 🚀 Tech Stack

- **React 19.1.1** - UI library
- **React Router DOM 7.9.3** - Client-side routing
- **TailwindCSS 4.1.14** - Utility-first CSS framework
- **Swiper 12.0.2** - Touch slider for galleries and carousels
- **React Icons 5.5.0** - Icon library
- **Vite (Rolldown)** - Build tool and development server
- **ESLint** - Code linting and quality assurance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wedding-organizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production (outputs to `dist/` folder)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
wedding-organizer/
├── public/                 # Static assets and public files
│   └── _redirects         # Netlify redirects configuration
├── src/
│   ├── assets/            # Image assets (logos, banners, gallery images)
│   ├── Components/        # Reusable React components
│   │   ├── Footer/       # Footer component
│   │   ├── Header/       # Navigation header with mobile menu
│   │   ├── Profile/      # Profile component
│   │   └── Slider/       # Image slider/carousel component
│   ├── Layouts/          # Layout components
│   │   └── MainLayouts.jsx  # Main layout wrapper (Header + Footer)
│   ├── Pages/            # Page components
│   │   ├── About/        # About page sections
│   │   ├── Contact/      # Contact page with form and map
│   │   ├── Gallery/      # Photo gallery page
│   │   ├── Home/         # Home page with hero and sections
│   │   ├── Services/     # Services showcase page
│   │   └── Testimonials/ # Customer testimonials page
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and font imports
├── dist/                 # Production build output
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Styling

The project uses **TailwindCSS 4.1.14** for styling with custom fonts:
- **Raleway** - Primary sans-serif font
- **Cardo** - Serif font for headings and emphasis

Custom CSS classes are defined in `src/index.css` for font styling and any additional customizations.

## 🔧 Configuration

### Vite Configuration
The project uses Vite with the following plugins:
- `@vitejs/plugin-react` - React plugin for JSX support and Fast Refresh
- `@tailwindcss/vite` - TailwindCSS Vite plugin

### Routing
Routes are defined in `src/App.jsx` using React Router DOM:
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/gallery` - Gallery page
- `/testimonials` - Testimonials page
- `/contact` - Contact page

## 🚢 Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

The production build will be available in the `dist/` directory, optimized and ready for deployment.

## 🌐 Deployment

The project is deployed on **Netlify** and is live at: [https://wedding-organizer.netlify.app/](https://wedding-organizer.netlify.app/)

The project includes a `_redirects` file in the `public/` directory for Netlify deployment. The built files in the `dist/` folder can be deployed to:

- **Netlify** - Drag and drop the `dist/` folder (Currently deployed)
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Configure for static site hosting
- **Any static hosting service**

## 📝 Development Notes

- The project uses **ESLint** for code quality. Run `npm run lint` to check for issues.
- Components are organized by feature (Header, Footer, etc.) for better maintainability.
- Images are stored in `src/assets/` and optimized during the build process.
- The mobile menu toggle is handled using React state hooks.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 👤 Author

Developed for wedding planning and organization services.

---

**Note**: Make sure to update the repository URL and author information as needed for your specific project.
