import './App.css'
import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import picture from '../public/tech.png'
const App = () => {
  return (
<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: picture
    },
    largeImage: {
        src: picture,
        width: 1200,
        height: 1800
    }
}} />

  )
}

export default App