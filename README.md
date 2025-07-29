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
- **Angular 17+**
- **Tailwind CSS** (utility-first styling)
- **Font Awesome** (icons)
- **RxJS** (reactive programming)
- **TypeScript**
- **Fake Store API** (product data)

## 🚀 Features
- Product listing with grid view and creative card design
- Product details page with image, price, and rating
- Responsive navigation bar and footer
- Search bar and dropdown filters (price, rating, name)
- Loading states and error handling
- Newsletter subscription and social links in footer

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

## 📁 Project Structure (Simplified)
```
src/
  app/
    navbar/
    footer/
    product-list/
    product-detail/
    shared/
      services/
      interfaces/
```

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🪪 License
This project is licensed under the MIT License - see the LICENSE file for details.
