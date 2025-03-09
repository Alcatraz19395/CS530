import React from 'react'

export default function About() {
  return (
    <div className='about-container'>
      <h1 className='about-title'>
        About Drexel Marketplace
      </h1>
      
      <p className='about-paragraph'>
        The Drexel Marketplace is a secure, user-friendly online platform designed to connect Drexel students, faculty, and staff. It provides a convenient way for users to buy, sell, and trade items, from textbooks and electronics to clothing and furniture.
      </p>
      
      <p className='about-paragraph'>
        Our goal is to create a trusted community where Drexel affiliates can easily exchange goods and services in a safe, reliable environment. The platform offers features such as advanced search, secure authentication, multiple image uploads, and filtering options to enhance the user experience.
      </p>
      
      <p className='about-paragraph'>
        The Drexel Marketplace is continually evolving, with a dedicated team working on adding new features and improving the overall user experience. Whether you're looking for a new textbook, some extra furniture for your dorm, or even a way to sell your old items, the marketplace has something for everyone.
      </p>

      <div className='about-features'>
        <h2 className='features-title'>
          Key Features of Drexel Marketplace
        </h2>
        <ul className='features-list'>
          <li>Secure User Authentication</li>
          <li>Advanced Search and Filtering</li>
          <li>Multiple Image Uploads for Listings</li>
          <li>Safe and Trusted Community</li>
        </ul>
      </div>

      <div className='about-action'>
        <h2 className='action-title'>
          Marketplace in Action
        </h2>
        <p className='about-paragraph'>
          The Drexel Marketplace is constantly updated with new listings. Whether you’re buying or selling, the marketplace is designed to make the process seamless and intuitive. Get started today and experience the convenience of connecting with your fellow Drexel community members!
        </p>
      </div>

      <style>
        {`
        /* General container styles */
        .about-container {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Title Styles */
        .about-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2D3748;
          margin-bottom: 2rem;
          text-align: center;
        }

        /* Paragraph Styles */
        .about-paragraph {
          font-size: 1.125rem;
          color: #4A5568;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        /* Features Section Styles */
        .about-features {
          margin-top: 3rem;
        }

        .features-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 1rem;
        }

        .features-list {
          list-style-type: disc;
          padding-left: 2rem;
          font-size: 1.125rem;
          color: #4A5568;
        }

        .features-list li {
          margin-bottom: 1rem;
        }

        /* Marketplace in Action Section Styles */
        .about-action {
          margin-top: 3rem;
        }

        .action-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 1rem;
        }
        `}
      </style>
    </div>
  )
}
