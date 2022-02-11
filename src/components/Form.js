import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, getExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    const { currencies } = this.props;
    currencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    const { dispatchClick } = this.props;
    dispatchClick(this.state).then(() => this.teste());
  }

  teste() {
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    const { currency } = this.props;
    const teste = (
      currency.map((e) => (
        <option
          key={ e }
          data-testid={ e }
          value={ e }
        >
          {e}
        </option>
      ))
    );

    return (
      <form>
        <label htmlFor="value">
          Value:
          <input
            onChange={ this.handleChange }
            data-testid="value-input"
            type="number"
            name="value"
            id="value"
            value={ value }
          />
        </label>

        <label htmlFor="currency">
          moeda
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            {currency.length > 0 ? teste : null }
          </select>
        </label>

        <label htmlFor="method">
          Method:
          <select
            onChange={ this.handleChange }
            data-testid="method-input"
            name="method"
            id="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select
            onChange={ this.handleChange }
            data-testid="tag-input"
            name="tag"
            id="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Description:
          <input
            onChange={ this.handleChange }
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
          />
        </label>

        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.func.isRequired,
  dispatchClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currencies: (value) => dispatch(getCurrencies(value)),
  dispatchClick: (value) => dispatch(getExpenses(value)),
});

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
