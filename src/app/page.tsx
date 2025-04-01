"use client";

import { auth, provider, signInWithPopup } from "../utils/firebase";

export default function Home() {
  const handleLoginWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);

    const idToken = await result.user.getIdToken();

    try {
      // Make a request to your Django backend with the Firebase token
      const response = await fetch(
        "https://coach-trusted.unklab.id/auth/login/google/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: idToken }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Store the JWT token from your backend in localStorage or use it as needed
      localStorage.setItem("authToken", data.token);

      // Redirect user or update UI as needed
      console.log("Login successful", data);
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Brutalist Google Login Button */}
      <button
        className="w-full sm:w-auto bg-white border-4 border-black text-black font-bold py-3 px-6 
                  transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
                  active:translate-y-0 active:shadow-none transition-all 
                  flex items-center justify-center gap-3 uppercase tracking-wider font-mono"
        onClick={handleLoginWithGoogle}
      >
        <div className="bg-white p-1 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>
        Login with Google
      </button>
    </div>
  );
}
