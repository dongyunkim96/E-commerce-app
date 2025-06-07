React E-Commerce Product Listing Application
===========================================

This project is a React-based application for showcasing and filtering products by categories. It includes three main components: `App`, `ProductList`, and `ProductItem`. Below is an explanation of each component and their respective functionalities.

-------------------------------------------
Project Overview
-------------------------------------------
Features:
- Dynamic Product Display: Displays a list of products with their details (name, price, description, and image).
- Category Filtering: Allows users to filter products based on categories (e.g., Genesis, Tesla, Volvo, Mercedes-Benz).
- Component-based Architecture: Efficient code structure using reusable components.

-------------------------------------------
Components and Files
-------------------------------------------

1. App Component
   - Location: `src/components/App.js`
   - Purpose: Acts as the main entry point for the application, managing the state and rendering the product list.
   - Key Features:
     - Initializes the list of products.
     - Manages state for the selected category using the `useState` hook.
     - Filters the products based on the selected category.
     - Provides a dropdown menu for category selection.
   - Key State Variables:
     - `products`: Holds an array of product data, including `id`, `name`, `price`, `image`, `description`, and `category`.
     - `selectedCategory`: Tracks the current category filter.

2. ProductList Component
   - Location: `src/components/ProductList.js`
   - Purpose: Displays a list of products based on the filtered data received as props.
   - Key Features:
     - Iterates through the `products` array and renders each product using the `ProductItem` component.
     - Ensures separation of concerns by delegating the display logic to the `ProductItem` component.
   - Props:
     - `products`: An array of filtered products to display.

3. ProductItem Component
   - Location: `src/components/ProductItem.js`
   - Purpose: Represents an individual product with its image, name, price, and description.
   - Key Features:
     - Renders product details in a styled card format.
     - Accepts a `product` object as props and dynamically displays its information.
   - Props:
     - `product`: A single product object containing its details (`id`, `name`, `price`, `image`, `description`, `category`).

-------------------------------------------
Directory Structure
-------------------------------------------
src/
│
├── components/
│ ├── App.js
│ ├── ProductList.js
│ ├── ProductItem.js
│
├── CSS/
│ ├── App.css
│ ├── ProductList.css
│ ├── ProductItem.css

-------------------------------------------
How to Run the Project
-------------------------------------------
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

-------------------------------------------
Styling (CSS Files)
-------------------------------------------
- App.css: Styles the overall layout of the app and the filter dropdown.
- ProductList.css: Styles the product list container.
- ProductItem.css: Styles individual product cards, including image sizes and text alignment.

-------------------------------------------
Example Product Data
-------------------------------------------
Here is a sample product data structure:

id: 1
name: "G80"
price: "MSRP* $57,100"
image: "https://example.com/image.jpg"
description: "2025 Genesis G80 Luxury Midsize Sedan || Genesis USA"
category: "Genesis"

-------------------------------------------
