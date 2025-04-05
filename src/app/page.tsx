import { redirect } from "next/navigation";

export default function HomePage() {
  // In a real app, check auth status
  const isLoggedIn = false; // Replace with actual auth check

  if (isLoggedIn) {
    redirect("/dashboard");
  } else {
    redirect("/login"); // Default to login page
  }

  // Or, you could render a landing page here instead of redirecting
  // return <LandingPage />;
}
