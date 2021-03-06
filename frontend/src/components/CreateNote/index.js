import React, { Component } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

import "react-datepicker/dist/react-datepicker.css";

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    _id: "",
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data.map((user) => user.username),
      userSelected: res.data[0].username,
    });

    if (this.props.match.params.id) {
      const res = await axios.get(
        "http://localhost:4000/api/notes/" + this.props.match.params.id
      );
      this.setState({
        editing: true,
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        author: res.data.userSelected,
        _id: this.props.match.params.id,
      });
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };

    if (this.state.editing) {
      await axios.put(
        "http://localhost:4000/api/notes/" + this.state._id,
        newNote
      );
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }

    window.location.href = "/";
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
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Create a note</h4>

            {/** SELECT USER */}
            <div className="form-group">
              <select
                name="userSelected"
                className="form-control"
                onChange={this.onInputChange}
                value={this.state.userSelected}
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
                value={this.state.title}
                required
              />
            </div>

            {/** SET NOTE TEXT */}
            <div className="form-group">
              <textarea
                name="content"
                className="form-control"
                placeholder="Content"
                value={this.state.content}
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
      </motion.div>
    );
  }
}
