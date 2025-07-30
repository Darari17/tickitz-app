import { useState } from "react";

export const Login = () => {
  const [form, setForm] = useState([]);
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setStatus("Belum ada akun yang terdaftar.");
      return;
    }

    if (
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      setStatus("Login berhasil!");
    } else {
      setStatus("Email atau password salah.");
    }
  };
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative px-4"
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('./bg-auth.svg')
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        src="./tickitz-white-logo.svg"
        alt="Tickitz"
        className="w-[276px] mb-5 mt-6"
      />

      <div className="bg-white rounded-lg shadow-lg w-full max-w-[400px] px-8 py-10 z-10">
        <section className="mb-6 text-start">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome Back<span className="inline-block ml-1">👋</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Sign in with your data that you entered during your registration
          </p>
        </section>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="pwd" className="text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="pwd"
              placeholder="Enter your password"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>

          {status && (
            <p className="text-sm text-center mt-2 text-blue-600">{status}</p>
          )}
        </form>

        <section className="mt-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span>or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md w-full justify-center hover:bg-gray-100 transition">
              <img src="./google-icon.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm text-gray-700">Google</span>
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md w-full justify-center hover:bg-gray-100 transition">
              <img
                src="./facebook-icon.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">Facebook</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
