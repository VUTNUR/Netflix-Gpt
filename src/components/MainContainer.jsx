import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import OverlapText from './OverlapText'

const MainContainer = ({trailerMovie}) => {
  return (
    <div className='relative'>
        <BackgroundVideo trailerMovie={trailerMovie}/>
        <OverlapText trailerMovie={trailerMovie}/>
    </div>
  )
}

export default MainContainer