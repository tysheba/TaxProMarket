import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class TaxPros extends Component {
  state = {
    taxpros: [],
    fname: "",
    lname: "",
    officeAddress: "",
    year: ""
  };

  componentDidMount() {
    this.loadTaxpros();
  }

  loadTaxpros = () => {
    console.log('loading...');
    API.getPros()
      .then(res =>
        this.setState({ taxpros: res.data, fname: "", lname: "", officeAddress: "", year: "" })
      )
      .catch(err => console.log(err));
  };

  updatePro = id => {
    API.updatePro(id)
      .then(res => this.loadTaxpros())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.fname && this.state.lname) {
      API.savePro({
        fname: this.state.fname,
        lname: this.state.lname,
        officeAddress: this.state.officeAddress,
        year: this.state.year
      })
        .then(res => this.loadTaxpros())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Information Below</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.fname}
                onChange={this.handleInputChange}
                name="fname"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lname}
                onChange={this.handleInputChange}
                name="lname"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.officeAddress}
                onChange={this.handleInputChange}
                name="officeAddress"
                placeholder="Office Address"
              />
              <Input
                value={this.state.year}
                onChange={this.handleInputChange}
                name="year"
                placeholder="Year started"
              />
              <FormBtn
                disabled={!(this.state.fname && this.state.lname)}
                onClick={this.handleFormSubmit}
              >
                Submit Profile
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>TaxPros in Directory</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TaxPros;
