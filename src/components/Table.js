import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dellExpenses } from '../actions';

class Table extends React.Component {
  handleClick = ({ target }) => {
    const row = target.parentNode.parentNode;
    const rowIndice = parseInt(row.className, 0);
    const { dispatchClick } = this.props;
    dispatchClick(rowIndice);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          }) => (
            <tr
              key={ id }
              className={ id }
            >
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ parseFloat(value).toFixed(2) }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>
                {(parseFloat(value) * parseFloat(exchangeRates[currency].ask)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ this.handleClick }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  dispatchClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchClick: (value) => dispatch(dellExpenses(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
