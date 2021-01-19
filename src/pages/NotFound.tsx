import * as React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{
      height: '100vh',
      width:'100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: 'white',
      backgroundColor: 'black',
    }}>
      <h2>404 Not Found</h2>
    </div>
  )
}

export default NotFound;