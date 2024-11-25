import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


const Title = () => (
  <div>
    <h1>This is Title</h1>
  </div>
)

const subHeading = (
 <>
   <p>Groceries</p>
 </>

)

const Heading = () => {
  return <div className="headerMain">
      <h1>Shop Online</h1>
      {subHeading}
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
