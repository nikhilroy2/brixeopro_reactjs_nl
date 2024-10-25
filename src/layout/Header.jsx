import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

export function Header() {
  const header_objects = [
    {
      id: 1,
      name: "Categories",
      link: "/",
    },
    {
      id: 2,
      name: "Game Changer",
      link: "/",
    },
    {
      id: 3,
      name: "Beneficial",
      link: "/",
    },
    {
      id: 4,
      name: "How it works",
      link: "/",
    },
    {
      id: 5,
      name: "Blogs",
      link: "/",
    },
  ];
  return (
    <header className="shadow-lg">
      <div className="container mx-auto my-3 flex items-center justify-between">
        <img
          className="h-[57px]"
          src="https://brixeopro.com/images/color-logo.svg"
          alt=""
        />
        <ul className="flex items-center gap-2">
          {header_objects.map((value) => (
            <li key={value.id}>
              <Link
                className="text-lg font-bold hover:text-[#EF4444] p-3"
                to={value.link}
              >
                {value.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="user_content flex items-center gap-2">
          <button
            type="button"
            className="font-medium rounded-full w-[40px] h-[40px] text-[#B91C1C] inline-flex justify-center items-center text-sm  me-2 mb-2 bg-[#fde3e3] hover:bg-[#FBCDCD] text-white "
          >
            <FaRegUser />
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-7 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Signup
          </button>
        </div>
      </div>
    </header>
  );
}
