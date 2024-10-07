// Write your code here
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="notFound_page_card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="notFound_image"
      />
      <h1 className="error-message">Lost your way</h1>
      <p className="error-message-description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page.
      </p>
    </div>
  </div>
)

export default NotFound
