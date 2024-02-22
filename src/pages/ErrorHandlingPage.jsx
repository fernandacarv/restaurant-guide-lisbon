import { Link } from "react-router-dom";


function ErrorHandlingPage() {

    return (
        <main className="grid min-h-full place-items-center px-6 my-30 sm:py-32 lg:px-8 rounded-lg">
        <div className="text-center p-10">
            <p className="text-base font-semibold text-gray-300">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-orange-500 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to={`/`} className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-md hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent hover:border-indigo-600">Go back home</Link>
            </div>
        </div>
    </main>
    );
}

export default ErrorHandlingPage;
