import React from 'react';

function PaginationBar(buttonList) {
  return (
    <>
      {buttonList.map((value, index) => (
        <button>{index + 1}</button>
      ))}
    </>
  );
}

export default PaginationBar;
