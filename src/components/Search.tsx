import React from 'react'

export const Search = () => {
	return (
	  <form className="flex bg-gray-50  rounded-3xl justify-end w-1/4">
          <input
            type="search"
            id="default-search"
            className="    focus:ring-blue-500 focus:border-blue-500 outline-none  rounded-3xl"
            placeholder="Search actors"
            required
          />
          <button
            type="submit"
            className="text-white  bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl text-sm px-4 py-2 "
          >
            Search
          </button>
        </form>
	)
}
