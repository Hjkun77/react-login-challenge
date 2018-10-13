import React, {Component} from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css';

const email = "test@gmail.com";
const password = "1234567890";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }




  onLogin = () => {
    const { onRouteChange } = this.props;
    const { signInEmail, signInPassword } = this.state;
    if (signInEmail === email && signInPassword === password ) {
      onRouteChange('congrats');
    } else {
      alert('Try Again! You inputted the wrong email or password')
    }

    console.log(this.state);
  }

  render() {
    return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Log In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email Address</label>
              <input
                onChange={this.onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                onChange={this.onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onLogin}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"/>
            </div>
          </div>
        </main>
      </article>
    );
  }
}



export default Login;
