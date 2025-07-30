export const Navbar = () => {
  const isLogin = JSON.parse(localStorage.getItem("user"));
  return (
    <header>
      <nav className="flex items-center justify-between h-[80px] border-b border-gray-200 bg-white px-6 md:px-24 shadow-sm">
        <div className="flex-1">
          <img src={"./logo.svg"} alt="" />
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-normal- text-[#0F172A]">
          <a href="/" className="hover:text-[#0F172A]">
            Home
          </a>
          <a href="/" className="hover:text-[#0F172A]">
            Movie
          </a>
          <a href="/" className="hover:text-[#0F172A]">
            Buy Ticket
          </a>
        </div>

        {isLogin ? (
          <div className="hidden md:flex flex-1 justify-end items-center gap-4">
            <div className="relative group cursor-pointer">
              <img
                src="/assets/img/ava.svg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="hidden group-hover:flex absolute top-12 right-0 bg-white border border-gray-300 rounded shadow-lg px-4 py-2 z-10">
                <button className="text-sm text-red-600 hover:underline">
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            <button className="text-sm text-blue-600 border border-blue-600 px-5 py-1.5 rounded hover:bg-blue-50 transition">
              Sign In
            </button>
            <button className="text-sm text-white bg-blue-600 px-5 py-1.5 rounded hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
        )}

        <div className="block md:hidden text-2xl cursor-pointer">☰</div>
      </nav>
    </header>
  );
};
