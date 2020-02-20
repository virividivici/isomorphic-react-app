import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Cookie from 'js-cookie';


class LocaleButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Cookie.set('locale', this.props.locale === 'en' ? 'de' : 'en');
    window.location.reload();
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.locale === 'en' ? 'English' : 'German'}</button>
  }
}

LocaleButton.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default LocaleButton;