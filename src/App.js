import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      listSave: [],
      hasTrunfo: false,
    };
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const saveCardList = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((preventState) => ({
      listSave: [...preventState.listSave, saveCardList],
      hasTrunfo: !preventState.hasTrunfo,
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  validatorAction = () => {
    const limitAttr = 90;
    const totalAttr = 210;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const totalAttrState = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === ''
    || Number(cardAttr1) > limitAttr
    || Number(cardAttr1) < 0
    || Number(cardAttr2) > limitAttr
    || Number(cardAttr2) < 0
    || Number(cardAttr3) > limitAttr
    || Number(cardAttr3) < 0
    || totalAttrState > totalAttr
    ) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    } return this.setState({
      isSaveButtonDisabled: false,
    });
  }

  removeCard = (card, trunfoCard) => {
    const { listSave } = this.state;
    this.setState((storage) => ({
      listSave: listSave.filter((name) => name.cardName !== card),
      hasTrunfo: trunfoCard === true ? false : storage.hasTrunfo,
    }));
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const getValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: getValue }, () => this.validatorAction());
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      listSave,
    } = this.state;
    return (
      <div className="sectionAddCart">
        <div className="formComponent">
          <h2>Add New Card</h2>
          <Form
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div className="cardComponent">
          <h2>Preview</h2>
          <div className="cardItem">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div className="cardList">
          {
            listSave.map((cards) => (
              <div key={ cards.cardName }>
                <Card { ...cards } />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(cards.cardName, cards.cardTrunfo) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
