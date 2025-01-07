const App = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto max-w-[600px] my-10 shadow-lg ">
        <div>
          <h1 className="text-center text-3xl font-bold text-teal-700">
            TODO LIST
          </h1>
          <div className="border-2 w-[400px]">
            <div>
              <input
                type="text"
                className="outline-1 bg-gray-300 ml-2 mr-4"
                placeholder="Add todo..."
              />
              <button className="bg-black text-white px-4 py-2 rounded-md">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
