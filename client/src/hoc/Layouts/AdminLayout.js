import React from 'react'
import LineLoader from "../../components/LineLoader"
import useFetch from "../../hooks/useFetch"

const ArminLayout = () => {
  const [{response, error, loading}, doFetch] = useFetch('/category')
  const handleClick = () => {
    doFetch({
      method: 'GET'
    })
  }
  console.log('response',response);
  console.log('error',error);
  console.log('loading',loading);
  return (
    <div>
      {loading && <LineLoader/>}
      <button onClick={handleClick}>test</button>
      <h1>Admin Layout</h1>
    </div>
  )
}

export default ArminLayout