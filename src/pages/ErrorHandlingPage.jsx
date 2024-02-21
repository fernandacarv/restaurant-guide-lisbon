import { Link } from "react-router-dom";

function ErrorHandlingPage() {

    return (
        <main className="grid min-h-full place-items-center bg-gray-100 px-6 py-24 sm:py-32 lg:px-8 border-4 border-gray-200 rounded-lg shadow-lg">
        <div className="text-center p-10">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to={`/`} className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent hover:border-indigo-600">Go back home</Link>
            </div>
        </div>
    </main>
    );
}

export default ErrorHandlingPage;