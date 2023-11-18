import React from 'react'

const PHBadge = () => {
  return (
    <div className="fixed z-50 bottom-6 right-6 tablet:bottom-8 tablet:right-9 ">
      <a href="https://www.producthunt.com/posts/opensauced?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-opensauced"
        target="_blank">
        <img
          className="w-36 tablet:w-60 tablet:h-12"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=419250&theme=light"
          alt="OpenSauced - Optimize&#0032;Your&#0032;Open&#0032;Source&#0032;Project&#0032;with&#0032;Deep&#0032;Insights | Product Hunt"
        />
      </a>
    </div>
  )
}

export default PHBadge