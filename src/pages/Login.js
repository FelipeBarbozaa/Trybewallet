import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      button: true,
    };

    this.checkForm = this.checkForm.bind(this);
  }

  // Salva as informações no state e chama a função que vai verificar as credenciais.
  handleState = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => this.checkForm());
  }

  handleClick = () => {
    const { email } = this.state;
    const { dispatchClick, history } = this.props;
    dispatchClick(email);
    history.push('/carteira');
  }

  // Verifica as credencias e habilita ou desabilita o botão
  checkForm() {
    const PASS_LENGTH = 6;
    const { email, password } = this.state;
    if (email.includes('@')
    && email.includes('.com')
    && password.length >= PASS_LENGTH) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  }

  render() {
    const { button } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="email">
            Email:
            <input
              onChange={ this.handleState }
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              onChange={ this.handleState }
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
            />
          </label>
        </form>
        <button
          type="button"
          disabled={ button }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </main>
    );
  }
}

Login.propTypes = {
  dispatchClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchClick: (value) => dispatch(attUser(value)),
});

export default connect(null, mapDispatchToProps)(Login);
