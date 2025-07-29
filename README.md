# MyStore Angular E-commerce Project

## 📝 Project Overview
MyStore is a modern, responsive e-commerce web application built with Angular. It features a beautiful UI, product search and filtering, and integration with the Fake Store API. The app is designed for a seamless shopping experience on any device, with creative design elements and smooth animations.

## 📸 Screenshots / Demo
<!-- Replace the below with actual screenshots or a demo link if available -->
| Home Page | Product List | Product Detail |
|---|---|---|
| ![Home](screenshots/home.png) | ![Product List](screenshots/product-list.png) | ![Product Detail](screenshots/product-detail.png) |

> 💡 **Live Demo:** [https://route-event-task-vert.vercel.app](#)

## 🧱 Tech Stack Used
- **Angular 17+** (Standalone Components)
- **Tailwind CSS** (utility-first styling, dark mode)
- **Font Awesome** (icons)
- **RxJS** (reactive programming, subscription management)
- **TypeScript**
- **Fake Store API** (product data)
- **Angular Router** (lazy loading)
- **HTTP Interceptors** (global loading state)

## 🚀 Features
- **Product Management**: Product listing with grid view and creative card design
- **Product Details**: Detailed product pages with image, price, and rating
- **Search & Filtering**: Search bar and dropdown filters (price, rating, name)
- **Responsive Design**: Mobile-first responsive navigation bar and footer
- **Dark/Light Mode**: Toggle between dark and light themes with persistence
- **Loading States**: Global HTTP interceptor-based loading spinner
- **Error Handling**: Comprehensive error handling and user feedback
- **Performance**: Lazy loading for all routes and optimized bundle size

## 🛠️ Getting Started
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mystore-angular
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   ng serve
   ```
4. **Open your browser:**
   Visit [http://localhost:4200](http://localhost:4200)

## 🌐 API Endpoints Used
- `GET /products` — Fetch all products
- `GET /products/:id` — Fetch single product details

## 📁 Project Structure
```
src/
├── app/
│   ├── core/                    # Core application features
│   │   ├── interceptors/        # HTTP interceptors
│   │   ├── layout/              # Navbar & Footer
│   │   └── services/            # Core services
│   │
│   ├── features/                # Feature modules
│   │   └── pages/               # Page components
│   │       ├── home/            # Home page
│   │       ├── product-list/    # Product listing
│   │       └── product-detail/  # Product details
│   │
│   ├── shared/                  # Shared components
│   │   ├── interfaces/          # TypeScript interfaces
│   │   └── notfound/            # 404 page
│   │
│   ├── app.component.*          # Root component
│   ├── app.config.ts            # App configuration
│   └── app.routes.ts            # Route definitions
│
├── assets/                      # Static assets
├── main.ts                      # Application entry
└── styles.css                   # Global styles
```

## 🏗️ Architecture Highlights
- **Standalone Components**: Modern Angular architecture with standalone components
- **Lazy Loading**: All routes are lazy-loaded for optimal performance
- **Service Layer**: Clean separation with dedicated services for data management
- **Interceptor Pattern**: Global HTTP interceptor for loading states
- **Reactive Programming**: RxJS for state management and data flow
- **Type Safety**: Full TypeScript implementation with interfaces

## 🎨 Design System
- **Color Palette**: Blue theme (`#2563eb` primary, `#1d4ed8` hover)
- **Dark Mode**: Class-based dark mode with localStorage persistence
- **Responsive**: Mobile-first design with Tailwind CSS breakpoints
- **Animations**: Smooth transitions and hover effects throughout

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🪪 License
This project is licensed under the MIT License - see the LICENSE file for details.
