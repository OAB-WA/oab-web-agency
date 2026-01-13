import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-[12rem] md:text-[16rem] font-bold text-primary-950/5 leading-none select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Page Not Found
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or never existed in the first place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <Link
              href="/"
              className="btn-primary px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              Go Back Home
            </Link>
            <Link
              href="/contact"
              className="btn-secondary px-10 py-4 text-lg font-bold shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

