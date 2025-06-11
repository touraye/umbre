import React from 'react'

const CTA = ({title, arrow}: {title: string, arrow?: string}) => {
  return (
    <button className="flex items-center justify-center gap-2 bg-[#FF6900] text-white font-bold py-2 px-4 rounded hover:bg-[#ff6a00cb] transition-colors duration-300">
      <span>{title}</span>
      {arrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"   
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h6.793L9.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L11.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
              </svg>
          )}
    </button>
  )
}

export default CTA
