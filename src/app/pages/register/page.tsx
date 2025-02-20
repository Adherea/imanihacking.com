"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import logo from "../../../../public/images/logo.png";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // State untuk error
  const [success, setSuccess] = useState<string | null>(null); // State untuk success

  const router = useRouter();

  const handleRegister = async () => {
    // Validasi input
    if (!email || !username || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing fields",
        text: "Please fill out all fields.",
      });
      return;
    }

    try {
      const response = await fetch(`https://imani-register-service.vercel.app/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      // Check if the response is okay
      if (!response.ok) {
        const errorData = await response.json(); // Parse response to JSON
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: errorData.error || "Something went wrong. Please try again.", // Show specific error message if available
        });
        return; // Exit the function if the response is not ok
      }

      // If successful, parse the response
      const data = await response.json();
      setSuccess("Registration successful!");
      setError(null);

      localStorage.setItem("username", username);

      Swal.fire({
        icon: "success",
        title: "Registration successful",
        text: "You have been successfully registered.",
      }).then(() => {
        router.push("/");
      });

      // Reset form
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error("Error during registration:", err);
      setError("An error occurred during registration. Please try again.");
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: err instanceof Error ? err.message : "Registration failed, please fill out the form correctly!",
      });
    }
  };

  return (
    <section>
      <nav className="flex items-center text-white justify-between md:px-12 px-5 py-4 bg-[#79c9e0]">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={100} />
        </Link>
        <Link href="/" className="group relative text-center">
          Back To Home
        </Link>
      </nav>
      <div className="flex flex-col items-center mt-10 py-28">
        <h2 className="text-2xl font-bold">Register</h2>
        <div className="flex flex-col w-full max-w-sm">
          <input type="email" placeholder="Email" className="mt-4 p-2 border border-gray-300 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Username" className="mt-4 p-2 border border-gray-300 rounded" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" className="mt-4 p-2 border border-gray-300 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Register
          </button>
        </div>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login here.
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
