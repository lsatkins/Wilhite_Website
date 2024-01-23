import React from 'react'
import Header from './Header'

const BaseLayout = ({children}) => {
    const containerStyle = {
        backgroundColor: 'white', // Set the desired background color
      };
      const innerDivStyle = {
        height: '60px', // Set the height to 60 pixels
        // Add any other styles as needed
      };
  return (
    <>
        <div style={containerStyle}>
        <Header />
        
            <div style={innerDivStyle}>

            </div>

            {children}
        </div>
      
    </>
  )
}

export default BaseLayout