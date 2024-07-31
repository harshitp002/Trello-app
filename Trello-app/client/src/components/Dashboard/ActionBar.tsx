import { MagnifyingGlassIcon, CalendarIcon, SparklesIcon, FunnelIcon, ShareIcon, PlusIcon } from '@heroicons/react/24/outline'

const ActionBar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="relative">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search"
          className="pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
        />
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-400 hover:text-gray-600 flex flex-row space-x-2 p-2 border border-gray-300 rounded-lg border-transparent bg-gray-200">
          <p>Calender view</p>
          <CalendarIcon className="w-5 h-5 " />
        </button>
        <button className="text-gray-400 hover:text-gray-600 flex flex-row space-x-2 p-2 border border-gray-300 rounded-lg border-transparent bg-gray-200">
          <p>Automation</p>
          <SparklesIcon className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600 flex flex-row space-x-2 p-2 border border-gray-300 rounded-lg border-transparent bg-gray-200">
          <p>Filter</p>
          <FunnelIcon className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600 flex flex-row space-x-2 p-2 border border-gray-300 rounded-lg border-transparent bg-gray-200">
          <p>Share</p>
          <ShareIcon className="w-5 h-5" />
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center">
          <p>Create new</p>
          <PlusIcon className="text-purple-600 w-5 h-5 ml-2 bg-white border rounded-xl border-transparent " />
        </button>
      </div>
    </div>
  )
}

export default ActionBar