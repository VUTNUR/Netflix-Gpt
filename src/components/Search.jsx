import React from 'react'
import { useSelector } from 'react-redux'
import { multiLanguages } from '../utils/constant'

const Search = () => {
    const showLanguage = useSelector((store)=>store.profile.showLanguage)
  return (
    <div className="flex justify-center">
    <div className='flex items-center justify-center bg-black w-[40%] h-[10%] p-4 rounded-md mt-4'>
        <input type='text' placeholder={multiLanguages[showLanguage]?.placeholder} className='py-2 px-2 mr-2 rounded-md border border-white bg-white flex-1'/>
        <button className='py-2 px-4 bg-red-800 text-white rounded-md cursor-pointer'>{multiLanguages[showLanguage].search}</button>
    </div>
    </div>
  )
}

export default Search