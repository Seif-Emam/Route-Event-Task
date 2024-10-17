MyStore Angular E-commerce Project
A modern e-commerce web application built with Angular, featuring a responsive design and integration with the Fake Store API.
Features

🛍️ Product listing with grid view
🔍 Product details page
📱 Responsive design for all devices
🎨 Modern UI with Tailwind CSS
⚡ Loading states and animations
🌐 Integration with Fake Store API

Technologies Used

Angular 17+
Tailwind CSS
Font Awesome Icons
RxJS
TypeScript

Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Angular CLI (npm install -g @angular/cli)

Project Structure
Copysrc/
├── app/
│   ├── components/
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── product-list/
│   │   ├── product-detail/
│   │   └── not-found/
│   ├── shared/
│   │   ├── services/
│   │   │   └── productserv.service.ts
│   │   └── interfaces/
│   │       ├── product.ts
│   │       └── allproductsres.ts
│   └── app.component.ts
Setup and Installation

Clone the repository:

bashCopygit clone <repository-url>
cd mystore-angular

Install dependencies:

bashCopynpm install

Start the development server:

bashCopyng serve

Open your browser and navigate to http://localhost:4200

API Integration
The project uses the Fake Store API for product data. The following endpoints are utilized:

GET /products - Fetch all products
GET /products/:id - Fetch single product details

Available Components
Navbar

Responsive navigation with mobile menu
Brand logo
Navigation links (Home, Products)

Product List

Grid layout with responsive design
Product cards with hover effects
Loading states
Error handling

Product Detail

Detailed product information
Product image gallery
Price and rating display
Add to cart functionality
Loading states

Footer

Company information
Quick links
Contact details
Newsletter subscription
Social media links

Styling
The project uses Tailwind CSS for styling with a custom color scheme:

Primary color: #35BF44
Hover state: #2aa837

Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.
