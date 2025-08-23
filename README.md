# Smooth Scrolling in React using Lenis

This project is a simple React application that displays products from the [FakeStore API](https://fakestoreapi.com/).  
We use the **Lenis** library to add a smooth scrolling experience throughout the app.

---

## 📂 Project Structure

- **data.js** → Contains an array of products fetched from FakeStore API.
- **Product.jsx** → Main file where mapping of products happens.
- **ProductCard.jsx** → Card component to display individual products.

---

## 🚀 About Lenis

Lenis is a lightweight library designed to provide a **smooth and customizable scrolling experience**.  
It works for both **mouse wheel** and **touch devices**, giving your app a modern, polished feel.

✨ Key Features:
- Smooth scrolling for mouse wheel and touch devices  
- Configurable speed (`duration`) and smoothness (`lerp`)  
- Lightweight and easy to integrate  

---

## ⚙️ Installation

Inside your React project directory, install **Lenis**:

`npm install lenis`

🛠️ Setup Guide


1️⃣ __Create a Lenis Provider Component__

Create a file named ScrollSmooth.jsx or any name inside src/Components/ui/ and paste the following code:

```bash


import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext();

const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.1,        // Lower = smoother/slower scroll
        duration: 2,      // Higher = slower scroll, Lower = faster scroll
        smoothTouch: true,
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
export default LenisProvider;

```

2️⃣ __Wrap Your Root Component__

Open index.js which is the entry point of your application and wrap  your root react component <App /> inside LenisProvider 

```bash


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LenisProvider from './Components/ui/ScrollSmooth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </React.StrictMode>
);

reportWebVitals();

```

⚡ __Example Usage in This Project__

data.js → contains product details from FakeStore API

Product.jsx → maps and displays products

ProductCard.jsx → renders each product as a card

ScrollSmooth.jsx → applies smooth scrolling globally

index.js → wraps the app with LenisProvider

✅ Notes

Always export the LenisProvider so it can be imported into index.js.

You can tweak values in ScrollSmooth.jsx:

__lerp__: Controls how smooth the scroll feels (lower = smoother, higher = snappier).

__duration__: Controls scroll speed (higher = slower, lower = faster).

Works on desktop and mobile out of the box.

## Acknowledgments  

- [Lenis](https://www.npmjs.com/package/lenis) – Smooth scrolling library (installed via **npm** as the CDN version is deprecated)  
- [FakeStore API](https://fakestoreapi.com/) – Free fake API for testing and prototyping e-commerce projects  
- [React](https://react.dev/) – Frontend library used for building the UI  