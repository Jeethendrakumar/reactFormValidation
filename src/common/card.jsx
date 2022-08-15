import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children }) => <div className="card">{children}</div>

export const CardItem = ({ children, item }) => (
  <div className={`card-${item}`}>{children}</div>
)

export const CardProfile = ({ cardtext, institution_image, author, author_name, designation }) => {
  return <div className="card mb-3" style={{ maxWidth: '640px' }}>
    <div className="row g-0">
      <div className="col-md-8">
        <div className="row mb-1">
          <div className="col-sm-3">
            <img src="static/img/Vector.png" className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
        <p className="card-text">{cardtext}</p>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <img src={institution_image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-sm-1">
              <div className='mycontent-left'></div>
            </div>
            <div className="col-sm-7">
              <h6>{author_name}</h6>
              <p>{designation}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <img src={author} className="img-fluid rounded-start" alt="..." />
      </div>
    </div>
  </div>

}

Card.propTypes = {
  children: PropTypes.any
}

CardItem.propTypes = {
  children: PropTypes.any,
  item: PropTypes.string,
  span: PropTypes.number
}

CardProfile.propTypes = {
  cardtext: PropTypes.string,
  institution_image: PropTypes.any,
  author: PropTypes.any,
  author_name: PropTypes.string,
  designation: PropTypes.string
}

export default Card