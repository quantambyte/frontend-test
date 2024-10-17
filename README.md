# 🌟 Project Overview

Welcome to `frontend-test`, a cutting-edge **Next.js 14** application crafted with a suite of modern technologies like **MUI**, **Tanstack React Table**, and **Next-Auth**. This app is designed to impress with its robust features:

- 🔒 **Secure Authentication**: Enjoy peace of mind with cookie-based security.
- 📊 **Dynamic Product Listings**: Experience seamless server-side pagination and sorting.
- 🛍️ **Detailed Product Pages**: Each page is enriched with SEO-friendly dynamic meta tags for better visibility.
- 🚧 **Resilient Error Handling**: Error boundaries and skeletons ensure smooth loading states.

# 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - The backbone framework of our application, providing robust features and performance.
- **UI Library**: [Material-UI (MUI)](https://mui.com/) - Used for creating a sleek, responsive, and visually appealing user interface.
- **State Management**: Utilizing React's built-in state hooks for efficient state management.
- **Form Handling**: [react-hook-form](https://react-hook-form.com/) - Simplifies form management with minimal re-renders.
- **Validation**: [zod](https://zod.dev/) - Provides strong data validation to ensure data integrity.
- **Authentication**: [Next-Auth](https://next-auth.js.org/) - Offers secure and seamless user authentication.
- **Data Fetching**: Implements real-time server-side data fetching from [dummyjson.com](https://dummyjson.com/).
- **Routing**: Utilizes `Next.js App Router` for dynamic routing and smooth navigation.
- **Table Handling**: [Tanstack React Table](https://tanstack.com/table) - Efficiently manages complex table data with ease.
- **Testing**: Comprehensive testing using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to ensure code reliability and performance.

# 🚀 Deployment

Our application is seamlessly deployed using **Vercel**, ensuring high performance and scalability. You can access the live version of the app at [frontend-test-amber-nine.vercel.app](https://frontend-test-amber-nine.vercel.app).

- **Platform**: [Vercel](https://vercel.com/) - A cloud platform for static sites and Serverless Functions that fits perfectly with our Next.js application.
- **URL**: [frontend-test-amber-nine.vercel.app](https://frontend-test-amber-nine.vercel.app) - Visit our live application to explore its features and functionality.

# 🧪 Testing

Our application is thoroughly tested using **Jest** and **React Testing Library**. Each component and page has a corresponding test file located in the `__tests__` directory within the same folder.

- **Run all tests**:

  ```bash
  npm run test
  ```

- **Run tests for a specific file**:

  ```bash
  npm run test filename
  ```

- **Watch mode for a specific file**:
  ```bash
  npm run test:watch filename
  ```

# 🔍 Modules

## 1. Authentication (Auth)

- **Purpose**: Handles user authentication securely using `next-auth`.
- **Technologies Used**:
  - **Validation**: Zod for input validation.
  - **Form Handling**: React Hook Form for streamlined form creation.

**Components**:

- `login.tsx`: Handles user login using Next-Auth.
- `SessionProvider.tsx`: Ensures session persistence and provides authentication context.

**API**:

- **`/api/auth/[...nextauth]`**: Next-Auth API route that manages sign-in, sign-out, and session handling.

---

## 2. Products

- **Purpose**: Displays the list of products with server-side pagination and sorting.
- **Components**:
  - `ProductTable`: Displays product list with pagination and sorting.
  - `ProductDetail`: Shows detailed product info.
  - `Skeletons & Error Boundaries`: Handles loading and error states for products.

**API**:

- **Product List**:

  - Fetches product data from [dummyjson.com](https://dummyjson.com/).
  - Provides server-side pagination and sorting features.

  **Routes**:

  - **Products Listing**: `/products`
  - **Product Detail**: `/products/[id]` (Dynamic route for individual products)

# Key Features

## 1. Product Listing

- **File**: `ProductTable.tsx`
- **Tech Stack**:

  - **Tanstack React Table**: Table management, pagination, sorting.
  - **MUI**: Material UI components for UI design.

- **Features**:

  - 🔄 **Sorting**: Enabled on all columns for easy data organization.
  - 📄 **Pagination**: Configurable for 5, 10, or 15 rows per page to suit your viewing preference.
  - 🔗 **Dynamic Links**: Click on a product's name to seamlessly navigate to the product details page.

## 2. Product Detail

- **File**: `/app/products/[id]/page.tsx`
- **Features**:
  - Displays in-depth product information (image, price, description, stock, reviews).
  - **SEO**: Dynamic meta tags per product for better visibility.
  - **Skeleton & Error Boundaries**: Graceful fallback UI during loading and error states.

# Installation and Setup

1. 🚀 Get started by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/quantambyte/frontend-test
   cd frontend-test
   ```

2. 📦 Install the necessary dependencies:

   ```bash
   npm install
   ```

3. 🛠️ Run the development server:

   ```bash
   npm run dev
   ```

4. 🏗️ Build the application for production:

   ```bash
   npm run build
   ```

5. 🚀 Start the production server:
   ```bash
   npm run start
   ```

Now you're all set to explore the wonders of `frontend-test`!

# Folder Structure Breakdown

### `/app`

- **`/api`**: Contains API routes for handling authentication.
- **`/products`**: Components for product listing and product detail pages.
- **`/[id]`**: Dynamic route handler for individual product detail pages.

### `/lib`

- **`/components`**: Reusable UI components such as buttons, inputs, and loaders.
- **`/hooks`**: Custom hooks like `useProductsTable`.
- **`/services`**: API service handlers for products and authentication.
- **`/types`**: TypeScript definitions for types used throughout the app.

```
/app (Frontend & Pages)
├── /api: Contains API routes for handling authentication (nextauth).
├── /products: Contains components for listing and displaying product details.
└── /[id]: Dynamic route handler for each product's detail page.

/lib (Business Logic)
├── /components: Reusable UI components such as buttons, inputs, and loaders.
├── /hooks: Custom hooks like useProductsTable to abstract business logic.
├── /services: Contains API service handlers for products and authentication.
└── /types: TypeScript definitions for strict typing of components and API responses.
```

# 🚀 Code Quality and Best Practices

- **TypeScript**: Full TypeScript support ensures code safety and maintainability.
- **Separation of Concerns**: Business logic is abstracted into hooks and services, ensuring modular and reusable code.
- **Error Boundaries**: Handles runtime errors gracefully, displaying user-friendly error messages.
- **Skeleton Components**: Skeleton screens ensure that users are never left staring at empty screens during data fetching.
- **Responsive Design**: Built with responsiveness in mind, offering a seamless experience across devices.
