import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";

export default class NotesList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({
      notes: res.data,
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.notes.map((note) => (
          <div className="col-md-4 p-2" key={note._id}>
            <div className="card">
              <div className="card-header">
                <h5>{note.title}</h5>
              </div>
              <div className="card-body">
                <p>{note.content}</p>
              </div>
              <div className="card-body">
                <p>
                  <span>{note.author}</span> - <span>{format(note.date)}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
