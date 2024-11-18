import React from 'react'

const Education = () => {
  return (
    <div className="w-full ">
      <div className=" px-2 w-fit h-8 border-l-2 text-center flex justify-center border-[#eb3b5a] items-center">
        <h1 className="text-2xl font-semibold md:text-left text-center text-[#343a40]">
          Education
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
      <div className="w-full p-5  flex  flex-col md:text-left text-center border-2 border-[#ecf0f1] rounded-md  ">
      <div className="px-2 py-0.5 text-xs mb-2 text-white md:mx-0 mx-auto  w-fit bg-[#eb3b5a]   ">
          July 2019 - July 2023
        </div>
        <h1 className="text-[#343a40] text-lg  font-semibold">
        Bachelor of Computer Science ( Software )
        </h1>
        <p className="text-sm text-[#eb3b5a] font-semibold mb-2"> Abdul Wali Khan University (AWKU)</p>
        <p className="text-sm text-gray-500 font-semibold ">
        Mardan, Pakistan
        </p>
      </div>
      <div className="w-full p-5  flex  flex-col sm:text-left text-center  border-2 border-[#ecf0f1] rounded-md  ">
      <div className="px-2 py-0.5 text-xs mb-2 text-white md:mx-0 mx-auto  w-fit bg-[#eb3b5a]   ">
          Aug 2017 - May 2019
        </div>
        <h1 className="text-[#343a40] text-lg  font-semibold md:text-left text-center">
        Intermediate ( Pre-Engineering )
        </h1>
        <p className="text-sm text-[#eb3b5a] font-semibold mb-2 md:text-left text-center"> Malakand Public School and College (MPSC)</p>
        <p className="text-sm text-gray-500 font-semibold md:text-left text-center ">
        Dargai, Pakistan
        </p>
      </div>
      </div>

      </div>
  )
}

export default Education