
const Questions = ({questions}) => {
  return (
    <div className=" md:w-1/2 h-fit space-y-6 text-white">
      <h1 className="font-semibold border-b border-gray-600 py-4 text-xl md:text-md text-center md:text-start text-black">questions</h1>
      {questions.map((prop, i) => (
        <div className="bg-[#14152A] rounded-md p-6 py-4 space-y-2" key={i}>
          <div className="md:flex gap-2 items-center space-y-4 md:space-y-0">
          {prop.status == 1 ? (
              <p className="w-fit flex gap-1 items-center text-sm md:text-xs bg-[#361126] text-red-500 py-1.5 md:py-1 px-3 md:px-2 rounded-md">
               Failed
              </p>
            ) : prop.status == 2 ? (
          
              <p className="w-fit flex gap-1 items-center text-sm md:text-xs bg-[#55462f] text-yellow-500 py-1.5 md:py-1 px-3 md:px-2 rounded-md">
               Queued
              </p>
            ) : (
              <p className="w-fit flex gap-1 items-center text-sm md:text-xs bg-[#143A29] text-green-500 py-1.5 md:py-1 px-3 md:px-2 rounded-md">
               Executed
              </p>
            )}
              
              <p className="font-thin text-sm md:text-xs">{prop.timestamp}</p>
          </div>
          <h1 className="font-medium text-md">{prop.title}</h1>
          <p className="text-sm font-light truncate">{prop.descrition} </p>
        </div>
      ))}
    </div>
  )
}

export default Questions