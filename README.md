# React + Vite

Overview
This document describes the architecture, structure, and functionality of a React application built
using Vite where the UI structure, content, and styles are driven by a configuration object instead of
hardcoded components. The project demonstrates modular architecture, reusable components,
custom hooks, React Context for state management, and Tailwind CSS styling.


Technology Stack
1 React (Vite setup)
2 JavaScript
3 React Router for page navigation
4 React Context API for global state
5 Custom Hooks for reusable logic
6 Tailwind CSS for styling
7 Config driven UI architecture

Key Features
1 Config driven page rendering
2 Reusable UI components
3 Dynamic navigation based on configuration
4 Search functionality with URL query parameters
5 Product filtering by category and price
6 Sorting functionality (A → Z and Z → A)
7 Responsive design using Tailwind CSS
8 Promo cards, hero banners, and product listings
9 Profile page with user information and address cards
10 Scroll to top button
11 Newsletter subscription section

Project Folder Structure
1 src/components – UI components (Navbar, ProductCard, Hero, Profile, etc.)
2 src/components/Elements – smaller reusable UI sections
3 src/context – React Context for global data
4 src/hooks – custom hooks (useConfig, useTheme)
5 src/router – routing configuration
6 src/config – application configuration file
7 src/pages – dynamic page renderer
8 src/App.jsx – main application layout
9 src/main.jsx – application entry point

Configuration Driven UI
The application uses a central configuration object (appConfig.js) that defines: • Page routes • Page
titles • Sections rendered inside each page • Theme values Pages such as Home, Products, and
Profile are generated dynamically by reading this configuration. A SectionRenderer component
maps section types to reusable React components.

Main Components
1 Navbar – navigation bar with search and cart
2 Hero – main banner section
3 CategoryScroll – category carousel section
4 PromoCards – promotional offer cards
5 ProductCard – product listing and filtering page
6 ProfileCard – user profile dashboard
7 Newsletter – email subscription section
8 Breadcrumb – page navigation indicator
9 ScrollToTop – floating scroll button

Custom Hooks
1 useConfig – provides configuration data to components

React Context Usage
AppContext provides shared data such as product categories, promotional cards, and user profile
information. This allows components across the application to access shared state without using
external state management libraries like Redux.

