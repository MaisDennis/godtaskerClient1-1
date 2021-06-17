import React, { useState } from 'react';
import { Input } from './styles'
// -----------------------------------------------------------------------------
function Searchbar({
  input: keyword, onChange: setKeyword, placeholder: keyPlaceHolder
}) {
  // ---------------------------------------------------------------------------
  return (
    <Input
      className="search-input"
      key="random1"
      value={keyword}
      placeholder={keyPlaceHolder}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default Searchbar
