import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    function CardTrunfo(cardTrunfo) {
      if (!cardTrunfo) {
        return null;
      }
      return (<p data-testid="trunfo-card">Super Trunfo</p>);
    }
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section>
        <h5 value={ cardName } data-testid="name-card">{ cardName }</h5>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul className="listCard">
          <li data-testid="attr1-card">{cardAttr1}</li>
          <li data-testid="attr2-card">{cardAttr2}</li>
          <li data-testid="attr3-card">{cardAttr3}</li>
        </ul>
        <p data-testid="rare-card">{cardRare}</p>
        <div>
          { CardTrunfo(cardTrunfo) }
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
