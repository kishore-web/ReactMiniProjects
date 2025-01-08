// import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const App = () => {
  // const [todo, setTodo] = useState("");

  return (
    <div>
      <div className="flex  justify-center mx-auto max-w-[600px] my-10 shadow-lg">
        <div className="w-full p-4 bg-white">
          <h1 className="text-center text-3xl font-bold text-teal-700">
            TODO LIST
          </h1>
          <div className="border-2">
            <div>
              <form className="flex p-2">
                <input
                  type="text"
                  className="flex-1 outline-1 p-2 w-full outline-none text-xl border-gray-500  bg-gray-100 mr-4"
                  placeholder="Add todo..."
                />
                <button className="bg-black text-white px-6 py-3 rounded-md">
                  ADD
                </button>
              </form>
            </div>
            {/* Todo hardcode on page */}
            <div className="flex items-center justify-between gap-3 p-2">
              <p>Learning React Basics</p>
              <div className="flex items-center gap-2 cursor-pointer">
                <FaEdit className="text-xl text-teal-500 hover:shadow-md" />
                <MdDelete className="text-xl text-teal-500 hover:shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
