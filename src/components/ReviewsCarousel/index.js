import {Component} from 'react'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  onLeftArrow = () => {
    this.setState(prevState => {
      if (prevState.currentIndex > 0) {
        return {currentIndex: prevState.currentIndex - 1}
      }
      return null
    })
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    this.setState(prevState => {
      if (prevState.currentIndex < reviewsList.length - 1) {
        return {currentIndex: prevState.currentIndex + 1}
      }
      return null
    })
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    const currentReview = reviewsList[currentIndex]
    return (
      <div className="carousel-container">
        <h1 className="carousel-heading">Review</h1>
        <div className="review-card">
          <img
            src={currentReview.imgUrl}
            alt={currentReview.username}
            className="avatar"
          />

          <div className="arrow-container">
            <button
              type="submit"
              onClick={this.onLeftArrow}
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <p className="username">{currentReview.username}</p>
            <button
              type="submit"
              onClick={this.onRightArrow}
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>

          <p className="company">{currentReview.companyName}</p>
          <p className="description">{currentReview.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
