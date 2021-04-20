import React, { Component } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data.map((user) => user.username) });
  }

  onSubmit = (e) => {
    console.log(this.state.title, this.state.content);
    e.preventDefault();
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeDate = (date) => {
    this.setState({
      date,
    });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a note</h4>

          {/** SELECT USER */}
          <div className="form-group">
            <select
              name="userSelected"
              className="form-control"
              onChange={this.onInputChange}
            >
              {this.state.users.map((user) => (
                <option key={user}>{user}</option>
              ))}
            </select>
          </div>

          {/** SET TITLE */}
          <div className="form-group">
            <input
              name="title"
              className="form-control"
              type="text"
              placeholder="Title"
              onChange={this.onInputChange}
              required
            />
          </div>

          {/** SET NOTE TEXT */}
          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Content"
              onChange={this.onInputChange}
              required
            ></textarea>
          </div>

          {/** DATE PICKER */}
          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={this.state.date}
              dateFormat="dd/MM/yyyy"
              onChange={this.onChangeDate}
            />
          </div>

          <form onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
