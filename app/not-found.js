import Link from "next/link";

export const metadata = {
  title: "we are building this page",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-2xl font-bold text-red-500 mb-4">404</h2>
      <p className="text-xl mb-4">we are building this page</p>
      <p className="mb-6">Could not find the requested page</p>
      <Link
        href="/"
        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Return to Home
      </Link>
    </div>
  );
}
