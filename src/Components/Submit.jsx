import React from 'react';

function Submit() {
  const buttonStyle = {
    padding: '10px 20px',
    background: 'rgb(10, 179, 156)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
     // Smooth transition for hover effect
  };

  const hoverStyle = {
    background: 'rgb(5, 120, 105)', // Dark green color on hover
  };

  const handleMouseOver = (e) => {
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  return (
    <div style={{marginLeft:"1000px",marginTop:"20px" }}>
      <button
        style={buttonStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default Submit;
