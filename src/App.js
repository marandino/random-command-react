import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function PlaceholderReturnButton() {
  return (
    <>
      <p>This section is still in progress</p>
      <a href="/">
        <button className="primary">Return</button>
      </a>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <PlaceholderReturnButton />,
  },
  {
    path: "/rules",
    element: <PlaceholderReturnButton />,
  },
  {
    path: "/contribute",
    element: <PlaceholderReturnButton />,
  },
]);

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="navbar">
          <a href="/about">
            <li>about</li>
          </a>
          <a href="/contribute">
            <li>contribute</li>
          </a>
          <a href="/rules">
            <li>rules</li>
          </a>
        </ul>
      </nav>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
