# 🌟 Modern Portfolio Website

A stunning, responsive portfolio website built with Next.js 14, featuring dynamic animations, interactive 3D elements, and a sophisticated dark theme design. This portfolio showcases professional work, experience, and skills through an engaging user interface.

![Portfolio Preview](public/profile.svg)

## ✨ Features

### 🎨 Visual Design
- **Dark Theme Aesthetic**: Custom dark color palette with purple accents
- **Animated Grid Backgrounds**: Subtle checkered patterns with radial fade effects
- **Spotlight Effects**: Dynamic lighting animations for visual depth
- **Responsive Design**: Seamless experience across all device sizes

### 🚀 Interactive Elements
- **3D Pin Containers**: Project cards with hover effects and depth
- **Magic Buttons**: Animated gradient borders with spinning effects
- **Typewriter Animation**: Multi-language name cycling (English, Bengali, Hindi, Spanish)
- **Canvas Reveal Effects**: Interactive cards with animated backgrounds
- **Moving Borders**: Smooth gradient animations around experience cards

### 📱 Sections & Content
- **Hero Section**: Animated introduction with spotlight effects and typewriter name
- **About Grid**: Bento-style layout showcasing skills and personality
- **Projects Showcase**: Interactive 3D cards with technology stacks and live links
- **Client Testimonials**: Infinite scrolling testimonials with profile photos
- **Work Experience**: Timeline of professional experience with company logos
- **Development Approach**: Three-phase methodology with canvas animations
- **Contact Footer**: Social media links and direct email contact

### 🔧 Technical Features
- **Next.js 14**: Latest App Router with server-side rendering
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Custom configuration with utility classes and animations
- **Framer Motion**: Smooth animations and transitions
- **Three.js Integration**: 3D globe and interactive elements
- **Responsive Images**: Optimized loading and display

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Animations** - Keyframe animations and transitions
- **Responsive Design** - Mobile-first approach

### 3D & Animations
- **Three.js** - 3D graphics and interactive elements
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library for React

### Icons & Assets
- **React Icons** - Icon library with multiple icon sets
- **React Lottie** - Lottie animations integration
- **Custom SVGs** - Technology and company logos

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Tailwind Merge** - Utility for merging Tailwind classes

### Monitoring & Analytics
- **Vercel Analytics** - Website performance insights

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodingSagnik/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables** (if needed)
   Create a `.env.local` file in the root directory for any future environment variables:
   ```env
   # Add your environment variables here
   # NEXT_PUBLIC_API_URL=your-api-url
   ```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   ├── components/               # Shared components (if any)
│   ├── fonts/                    # Custom fonts (Geist)
│   ├── favicon.ico               # Site favicon
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page component
│   └── provider.tsx              # Theme and context providers
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   │   ├── 3d-pin.tsx           # 3D pin container for projects
│   │   ├── BentoGrid.tsx        # Grid layout for about section
│   │   ├── CanvasRevealEffect.tsx # Canvas animations
│   │   ├── FloatingNav.tsx      # Navigation component
│   │   ├── Globe.tsx            # 3D globe component
│   │   ├── MagicButton.tsx      # Animated button component
│   │   ├── TypewriterName.tsx   # Multi-language typewriter
│   │   └── ...                  # Other UI components
│   ├── Approach.tsx             # Development methodology section
│   ├── Clients.tsx              # Testimonials section
│   ├── Experience.tsx           # Work experience section
│   ├── Footer.tsx               # Contact and footer section
│   ├── Grid.tsx                 # About section with bento grid
│   ├── Hero.tsx                 # Landing section
│   └── RecentProjects.tsx       # Projects showcase section
├── data/                        # Static data and configuration
│   ├── confetti.json            # Lottie animation data
│   ├── globe.json               # Globe visualization data
│   └── index.tsx                # Main data exports
├── public/                      # Static assets
│   ├── icons/                   # Technology and social media icons
│   ├── images/                  # Project screenshots and photos
│   ├── logos/                   # Company and organization logos
│   └── ...                      # Other static files
├── utils/                       # Utility functions
│   └── cn.ts                    # Class name utility
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Update data in `data/index.tsx`
   - Navigation items
   - Grid items for about section
   - Projects showcase
   - Work experience
   - Testimonials
   - Social media links

2. **Colors and Styling**: Modify `tailwind.config.ts`
   - Custom color palette
   - Animation timings
   - Responsive breakpoints

3. **Components**: Edit individual components in `components/`
   - Add new sections
   - Modify existing layouts
   - Update animations

### Adding New Sections

1. Create a new component in `components/`
2. Add the component to `app/page.tsx`
3. Update navigation in `data/index.tsx` if needed
4. Add any required data structures

### Customizing Animations

- Modify keyframes in `tailwind.config.ts`
- Adjust animation durations and easing
- Add new animations using CSS or Framer Motion

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings

2. **Environment Variables**
   - Add any required environment variables if needed

3. **Deploy**
   - Vercel automatically deploys on push to main branch
   - Preview deployments for pull requests

### Other Platforms

The project can be deployed on any platform that supports Next.js:

- **Netlify**: Configure build command and publish directory
- **Railway**: Direct GitHub integration
- **DigitalOcean App Platform**: Container-based deployment
- **AWS Amplify**: Full-stack deployment with CI/CD

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📊 Performance Optimizations

### Built-in Optimizations
- **Next.js Image Optimization**: Automatic image resizing and WebP conversion
- **Code Splitting**: Automatic bundle splitting for optimal loading
- **Tree Shaking**: Unused code elimination
- **CSS Optimization**: Automatic CSS minification and purging

### Performance Features
- **Hardware Acceleration**: GPU-accelerated animations
- **Lazy Loading**: Images and components load on demand
- **Prefetching**: Next.js automatically prefetches linked pages
- **Bundle Analysis**: Built-in tools for analyzing bundle size

## 🔧 Development Tools

### Code Quality
- **TypeScript**: Static type checking
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Code formatting (recommended)

### Debugging
- **React Developer Tools**: Component inspection
- **Next.js DevTools**: Performance and bundle analysis
- **Browser DevTools**: Built-in debugging capabilities

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Aceternity UI**: Inspiration for modern UI components
- **Three.js Community**: 3D graphics and animations
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js Team**: React framework and tooling
- **Vercel**: Hosting and deployment platform

## 📞 Contact

**Sagnik Ray**
- Portfolio: [Live Site](https://your-portfolio-url.com)
- Email: raysagnik@gmail.com
- LinkedIn: [ray-sagnik](https://www.linkedin.com/in/ray-sagnik/)
- GitHub: [CodingSagnik](https://github.com/CodingSagnik)
- Instagram: [am.i.sagnik](https://www.instagram.com/am.i.sagnik/)

---

<div align="center">
  <p>Made with ❤️ by Sagnik Ray</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
