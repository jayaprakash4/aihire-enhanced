import { PageFade } from "../App";
import FeatureCard from "../components/FeatureCard";
import { Briefcase, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <PageFade>
      <header className="sticky top-0 bg-white/80 backdrop-blur z-30 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-indigo-600">AI</span>Hire
          </Link>
          <nav className="hidden md:flex gap-6 text-slate-600">
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <Link to="/practice" className="hover:text-indigo-600">
              AI Practice Interview
            </Link>
          </nav>
          <div className="space-x-2">
            <Link to="/login" className="text-slate-600 hover:text-indigo-600">
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          The Future of Hiring is Here.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
          Leverage our AI-powered video interview platform to identify top talent
          faster, reduce bias, and streamline your recruitment process.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/signup"
            className="transform rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-indigo-700"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Why <span className="text-indigo-600">AI</span>Hire?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-600">
            Our platform is designed to solve the biggest challenges in modern
            recruiting.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Video className="h-8 w-8 text-indigo-500" />}
              title="AI-Powered Analysis"
              description="Beyond the résumé. We analyze video responses for
                communication clarity, sentiment, and competencies."
            />
            <FeatureCard
              icon={<Briefcase className="h-8 w-8 text-indigo-500" />}
              title="Integrated ATS"
              description="Track candidates from application to offer in one
                streamlined workspace."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-indigo-500" />}
              title="Collaborative Hiring"
              description="Share interviews, leave comments, and make data-driven
                decisions together."
            />
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-center text-white">
        <p>&copy; 2025 AIHire. All rights reserved.</p>
      </footer>
    </PageFade>
  );
}
