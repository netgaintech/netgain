# Netgain Studio - Official Website

This is the official website for **Netgain Studio**, a modern digital solutions provider. This project serves as a professional, animated, and responsive showcase of the company's brand, services, and vision.

The site is built as a hybrid single-page and multi-page application. The main landing page is a seamless, single-page experience with smooth-scrolling sections, while secondary content like "Future Services" is hosted on its own dedicated page.

---

## ✨ Key Features

-   **Floating "Island" Navbar:** A sleek, pill-shaped navigation bar that starts transparent and transitions to a frosted glass effect on scroll.
-   **Hybrid Navigation:** Intelligently combines single-page smooth scrolling with standard multi-page routing. The main navigation links scroll elegantly on the landing page, while the "Future Services" link navigates to its own page.
-   **Dynamic Hero Section:** The main headline animates through a series of rotating verbs ("Organizing," "Developing," etc.) for a dynamic and engaging user experience.
-   **Animated Logo & Buttons:** The "Netgain Studio" logo and "Contact Us" buttons feature vibrant gradients and interactive animations (glow, pulse, hover effects) to capture user attention.
-   **Fully Responsive Design:** A mobile-first approach ensures the site looks and functions perfectly on all devices, featuring a polished full-screen overlay menu for mobile users.
-   **Modern Tech Stack:** Built with the latest front-end technologies for a fast, efficient, and maintainable codebase.

---

## 🛠️ Tech Stack

-   **Framework:** [React](https://reactjs.org/) (with TypeScript)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Routing:** [React Router DOM](https://reactrouter.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)

---

## ⚙️ Getting Started

Follow these instructions to set up and run a local copy of the project for development or testing purposes.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system. This will provide the `npm` package manager.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/netgaintech/Netgainstudio.git
    ```

2.  **Navigate into the project directory:**
    ```sh
    cd Netgainstudio
    ```

3.  **Install the necessary dependencies:**
    ```sh
    npm install
    ```
    *(You can also use `yarn install` or `bun install` if you prefer.)*

### Running the Development Server

1.  **Start the local Vite server:**
    ```sh
    npm run dev
    ```

2.  Open your web browser and go to `http://localhost:5173` (or the address shown in your terminal). You should now see the website running. The site will automatically reload as you make changes to the code.

---

## 📦 Building for Production

When you are ready to deploy the website, you need to create an optimized, static build.

1.  **Run the build command:**
    ```sh
    npm run build
    ```

2.  This command generates a `dist` folder in the project root. This folder contains all the minified HTML, CSS, and JavaScript files needed for deployment.

3.  You can upload the contents of the `dist` folder to any static web hosting service (like Vercel, Netlify, or GitHub Pages).

---

