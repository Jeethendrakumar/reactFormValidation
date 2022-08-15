import React from 'react'
import Card, { CardItem } from './common/card'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }
    if (typeof fields["phone"] !== "undefined") {
      if (!/^\d+$/.test(fields['phone'])) {
        formIsValid = false;
        errors["phone"] = "Enter only numbers";
      }
    }
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "Cannot be empty";
    }
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "Cannot be empty";
    }
    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "Cannot be empty";
    }
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }
    

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <>
        <CardItem item='body'>
          <div className='d-flex justify-content-center'>

            <Card>
              <form
                className='justify-center'
                onSubmit={this.contactSubmit.bind(this)}
              >
                <CardItem item={'header'}>
                  <CardItem item={'title'}><strong>Registration form</strong></CardItem>
                </CardItem>
                <CardItem item={'body'}>
                  <CardItem item={'text'}>
                    <div className="form-group">
                      <label
                        className="text-right"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className='form-control col-sm-12'
                        ref="name"
                        type="text"
                        size="30"
                        placeholder="Name"
                        onChange={this.handleChange.bind(this, "name")}
                        value={this.state.fields["name"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                      <br />
                      <label
                        className="text-right"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        refs="email"
                        type="text"
                        size="30"
                        placeholder="Email"
                        className='form-control col-sm-12'
                        onChange={this.handleChange.bind(this, "email")}
                        value={this.state.fields["email"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                      <br />
                      <label
                        className="text-right"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        refs="phone"
                        type="text"
                        size="30"
                        className='form-control col-sm-12'
                        placeholder="Phone"
                        onChange={this.handleChange.bind(this, "phone")}
                        value={this.state.fields["phone"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                      <br />
                      <label
                        className="text-right"
                        htmlFor="country"
                      >
                        County
                      </label>
                      <input
                        refs="country"
                        type="text"
                        size="30"
                        className='form-control col-sm-12'
                        placeholder="country"
                        onChange={this.handleChange.bind(this, "country")}
                        value={this.state.fields["country"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["country"]}</span>
                      <br />
                      <label
                        className="text-right"
                        htmlFor="state"
                      >
                        State
                      </label>
                      <input
                        refs="state"
                        type="text"
                        size="30"
                        className='form-control col-sm-12'
                        placeholder="state"
                        onChange={this.handleChange.bind(this, "state")}
                        value={this.state.fields["state"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["state"]}</span>
                      <br />
                      <label
                        className="text-right"
                        htmlFor="city"
                      >
                        City
                      </label>
                      <input
                        refs="city"
                        type="text"
                        size="30"
                        className='form-control col-sm-12'
                        placeholder="city"
                        onChange={this.handleChange.bind(this, "city")}
                        value={this.state.fields["city"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["city"]}</span>
                      <br />
                      <label
                        className="text-right"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <input
                        refs="message"
                        type="text"
                        size="30"
                        className='form-control col-sm-12'
                        placeholder="message"
                        onChange={this.handleChange.bind(this, "message")}
                        value={this.state.fields["message"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["message"]}</span>
                    </div>
                    <button className='btn btn-primary col-sm-5' onClick={this.handleValidation.bind(this)}>Submit</button>
                  </CardItem>
                </CardItem>
              </form>
            </Card>
          </div>
        </CardItem>
      </>
    );
  }
}

export default App
