import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='http://localhost:5000/auth/google'>Login with google</a>
          </li>
        );
      default:
        return [
          <li key='1'><Payments /></li>,
          <li key='2'>
            <a href='http://localhost:5000/api/logout'>Logout</a>
          </li>
          ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo">Emaily</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
};

export default connect(mapStateToProps) (Header);
