import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex h-full items-center bg-gray-50 p-16 dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-9xl font-extrabold text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mb-8 mt-4 text-gray-600 dark:text-gray-400">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <a
              href="/"
              className="rounded bg-blue-600 px-8 py-3 font-semibold text-gray-50 transition hover:bg-blue-700"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
