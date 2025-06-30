// "use client";
import "../globals.css"; // Ensure global styles are imported

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="max-w-md mx-auto text-center bg-white dark:bg-neutral-700 bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for seems to have gone on a little adventure.
          Do not worry, we will help you find your way back home.
        </p>
        <a
          href="#"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
