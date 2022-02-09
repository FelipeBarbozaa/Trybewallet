import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">Despesa Total: R$: 0</span>
        <span data-testid="header-currency-field">BRL</span>
      </>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { email } = state.user;
  return {
    email,
  };
};

export default connect(mapStateToProps, null)(Header);
