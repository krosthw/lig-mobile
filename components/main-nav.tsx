"use client";

interface MainNavProps {
  data: string[]
};


const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  return (
    <div
      className="flex items-center space-x-4 lg:space-x-6"
    >
      {data.map((route) => (
        <button 
                key={route} 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >
          {route}
        </button>
      ))}
    </div>
  )
};

export default MainNav;