import React from 'react'

const PHBadgeDark = () => {
  return (
    <div className="w-fit -ml-2">
      <a
        href="https://www.producthunt.com/posts/starsearch?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-starsearch"
        target="_blank"
      >
        <img
          className="w-36 tablet:w-60 tablet:h-12"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=455549&theme=dark"
          alt="StarSearch - Copilot, but for git history | Product Hunt"
        />
      </a>
    </div>
  )
}

export default PHBadgeDark
