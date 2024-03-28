import { Link } from 'react-router-dom';
/**
 * Nav 컴포넌트
 * @returns
 */
const Header = () => {
  return (
    <header className="mx-auto justify-center lg:px-24 px-6 relative w-full h-24 lg:mb-0 mb-8 lg:grid grid-cols-1 lg:grid-cols-12">
      <div className="text-gray-400 font-medium flex col-span-2 lg:justify-start justify-center items-center mx-auto mt-6 hover:text-black cursor-pointer dark:hover:text-white">
        <a href="/webtoon">Home</a>
      </div>
      <div className="col-span-8 space-x-8 lg:mt-0 mt-4 justify-center flex items-center text-center mx-auto">
        <div className="relative text-gray-400 font-medium transition-all duration-200 hover:text-black cursor-pointer dark:hover:text-white ">
          <Link to="/">Week</Link>
        </div>
        <div className="relative text-gray-400 font-medium transition-all duration-200 hover:text-black cursor-pointer dark:hover:text-white ">
          <Link to="/search">Search</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
