import { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&><])(?=.{8,})/;

    if (!user.email || !user.password) {
      setStatus("Email dan Password tidak boleh kosong.");
      return;
    }

    if (!emailRe.test(user.email)) {
      setStatus("Email tidak valid");
      return;
    }

    if (!pwdRe.test(user.password)) {
      setStatus(
        "Password harus mengandung huruf besar, huruf kecil, simbol, dan minimal 8 karakter"
      );
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    setStatus("Registrasi berhasil! Silakan login.");
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
        <section className="flex items-center justify-between mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
              1
            </div>
            <div className="text-sm mt-2 font-medium text-gray-700">
              Fill Form
            </div>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold">
              2
            </div>
            <div className="text-sm mt-2 font-medium text-gray-500">
              Activate
            </div>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold">
              3
            </div>
            <div className="text-sm mt-2 font-medium text-gray-500">Done</div>
          </div>
        </section>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
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
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="checkbox" className="text-sm text-gray-600">
              I agree to terms & conditions
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Join For Free Now
            </button>
          </div>

          {status && (
            <p className="text-sm text-center mt-2 text-blue-600">{status}</p>
          )}

          <div className="text-center text-sm text-gray-600">
            <span>Already have an account? </span>
            <a href="./sign-in.html" className="text-blue-600 hover:underline">
              Log in
            </a>
          </div>
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
