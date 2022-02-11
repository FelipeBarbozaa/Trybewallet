import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const expensesResult = expenses.reduce((sum, { value, currency, exchangeRates }) => {
      sum += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      return sum;
    }, 0);

    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ expensesResult.toFixed(2) }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => {
  const { email } = state.user;
  return {
    email,
    expenses: state.wallet.expenses,
  };
};

export default connect(mapStateToProps, null)(Header);
