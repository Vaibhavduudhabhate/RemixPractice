import React from 'react'

const blog = () => {
  return (
    <div className="container mt-5 mx-auto">
      <div className="card  border mx-auto">
        <div className="card-body m-5">
          <h5 className="card-title text-[25px]">Blog page</h5>
          <p className="card-text">This is a simple blog page</p>
          <a href="/about" className="btn bg-blue-400 p-3 mt-8 inline-block text-white">
            Go to home
          </a>
        </div>
      </div>
    </div>
  )
}

export default blog