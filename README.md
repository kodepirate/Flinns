# Flinns NFT 🌊

A premium, highly interactive, deep-sea themed single-page web application for the Flinns NFT collection. 
The site is designed to immerse users in a "diving experience" utilizing advanced CSS styling and fluid 3D animations.

![Flinns Preview](public/vite.svg) 

## 🌟 Key Features

*   **Seamless Deep-Sea Descent:** Perfectly blended vertical gradients across all sections, creating an uninterrupted visual journey from the ocean surface down to the trench floor.
*   **3D Interactive Hover Physics:** Custom glassmorphic cards and elements that track mouse movement in 3D space, tilting and glowing dynamically.
*   **High Performance:** Aggressively optimized for speed. Utilizes React `Suspense` and `lazy` loading for code-splitting, offloading secondary visual components to reduce initial main-thread blocking. Layout recalculation loops (forced reflows) have been eliminated through bounding-box caching.
*   **Scroll-Driven Animations:** A central roadmap timeline that organically "fills" and animates as the user scrolls down the page.
*   **Fully Responsive:** Thoughtfully adapted for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

*   **Framework:** React + Vite
*   **Styling:** Tailwind CSS (v3) + Vanilla CSS (for complex dynamic gradients)
*   **Animations:** Framer Motion (for physics, scroll monitoring, and complex state transitions)
*   **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kodepirate/Flinns.git
    cd Flinns
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173` to see the site in action.

### Production Build

To test the highly-optimized production build (for measuring true Lighthouse performance scores):

1.  **Build the project:**
    ```bash
    npm run build
    ```

2.  **Preview the production build:**
    ```bash
    npm run preview
    ```
    
## 📝 License
This project is for the Flinns NFT collection.

---
*Created by [aniket0fficial](https://github.com/aniket0fficial)*
