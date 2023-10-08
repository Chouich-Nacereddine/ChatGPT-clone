import { useState } from "react";

function App() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-[#202123]">
          <ul className="space-y-2 ">
            <li>
              <span className="pb-4 font-bold flex justify-center items-center w-full text-white border-b-2 border-[#343541]">
                <span>AI Chat</span>
                <i class="bx bx-chat"></i>
              </span>
            </li>
            <li className="px-3 pt-2">
              <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group border border-white">
                <span className="flex ml-3 justify-between items-center w-full">
                  <span>Chat</span>
                  <i class="bx bx-plus border border-white p-1 rounded-3xl"></i>
                </span>
              </span>
            </li>
            {/* <li className="px-3">
              <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
              </span>
            </li> */}
          </ul>
        </div>
      </aside>
      <div className="p-6 sm:ml-64 bg-[#343541] h-screen overflow-y-auto">
        <div className="flex justify-center">
          <center>
            <div className="text-white flex justify-between items-center h-full w-52 bg-[#202123] p-1 rounded-2xl">
              <span className="w-[55%] bg-[#40414f] p-2 rounded-xl">
                ChatGPT
              </span>
              <span className=" w-[55%] p-2">Clone</span>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default App;
