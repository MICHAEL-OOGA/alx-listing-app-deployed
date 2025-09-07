const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold">🏡 MyStay</div>
      <input
        type="text"
        placeholder="Search destinations"
        className="mt-2 md:mt-0 md:mx-4 p-2 border rounded w-full md:w-1/2"
      />
      <div className="mt-2 md:mt-0 flex gap-4">
        <button className="text-sm">Sign In</button>
        <button className="text-sm font-bold">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
