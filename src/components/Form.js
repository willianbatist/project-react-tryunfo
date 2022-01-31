/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    function superTrunfoRender(param) {
      if (param) {
        return (<p>Você já tem um Super Trunfo em seu baralho</p>);
      } return (
        <label htmlFor="cardTrunfo1">
          Super Trunfo:
          <input
            id="cardTrunfo1"
            checked={ cardTrunfo }
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>);
    }

    return (
      <form className="formApp">
        <label htmlFor="cartName1">
          Name
          <input
            id="cartName1"
            value={ cardName }
            name="cardName"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descriçãoCart1">
          Description
          <textarea
            id="descriçãoCart1"
            value={ cardDescription }
            name="cardDescription"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr11">
          Attribute1
          <input
            id="cardAttr11"
            value={ cardAttr1 }
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr21">
          Attribute2
          <input
            id="cardAttr21"
            value={ cardAttr2 }
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr31">
          Attribute3
          <input
            id="cardAttr31"
            value={ cardAttr3 }
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage1">
          Imagem
          <input
            id="cardImage1"
            value={ cardImage }
            name="cardImage"
            type="text"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardRare1">
          Raridade
          <select
            id="cardRare1"
            value={ cardRare }
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option defaultValue="normal" value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Muito Raro">Muito Raro</option>
          </select>
        </label>
        { superTrunfoRender(hasTrunfo) }
        <button
          disabled={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
