import React from 'react'
import { BsX } from 'react-icons/bs'
import { TbCheckbox, TbHandStop } from 'react-icons/tb'
import { TiTick } from 'react-icons/ti'

interface DosDontsProps {
  dos: [],
  donts: []
}

const DosDonts = ({ dos, donts }: DosDontsProps) => {
  return (
    <section >
      <div className='flex flex-col gap-x-16 tablet:flex-row tablet:justify-between gap-y-8 tablet:px-8'>
          {/* Do */}
          <div className='flex-1'>
              <div className='flex items-center gap-4 mb-4 text-[1.5rem] font-semibold'>
                  <div className='bg-green-400 rounded-[8px] p-1 bg-opacity-20 '>
                      <TbCheckbox className='text-green-400'/>
                  </div>
                  <h6 className='text-gray-700'>You can</h6>
              </div>
              {
                  dos &&
                  dos.map((singleDo)=> (
                      <div key={singleDo} className='flex flex-col mb-2 gap-y-2'>
                          <div className='pl-2 flex gap-x-4'>
                              <div className='bg-green-400 mt-[6px] bg-opacity-20 w-4 h-4 rounded-full'>
                                  <TiTick className='text-green-400'/>
                              </div>
                              <p className='m-0 p-0'>{singleDo}</p>
                          </div>
                      </div>
                  ))
              }
          </div>

          {/* donts */}
          <div className='flex-1'>
              <div className='flex items-center gap-4 mb-4 text-[1.5rem] font-semibold'>
                  <div className='bg-red-400 rounded-[8px] p-1 bg-opacity-20 '>
                      <TbHandStop className='text-red-400'/>
                  </div>
                  <h6 className='text-gray-700'>{"You can't"}</h6>
              </div>
              {
                  donts &&
                  donts.map((singleDont)=> (
                      <div key={singleDont} className='flex flex-col mb-2 gap-y-2'>
                          <div className='pl-2 flex gap-x-4'>
                              <div className='bg-red-400 mt-[6px] bg-opacity-20 w-4 h-4 rounded-full'>
                                  <BsX className='text-red-400'/>
                              </div>
                              <p>{singleDont}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
      </div>
    </section>
  )
}

export default DosDonts
