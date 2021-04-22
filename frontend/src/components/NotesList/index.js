import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default class NotesList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    this.getNotes();
  }

  getNotes = async () => {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({
      notes: res.data,
    });
  };

  deleteNote = async (id) => {
    await axios.delete("http://localhost:4000/api/notes/" + id);
    this.getNotes();
  };

  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <div className="row">
          {this.state.notes.map((note) => (
            <div className="col-md-4 p-2" key={note._id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5>{note.title}</h5>
                  <Link
                    className="btn btn-secondary btn-sm"
                    to={"/edit/" + note._id}
                  >
                    Edit
                  </Link>
                </div>
                <div className="card-body">
                  <p>{note.content}</p>
                  <p>
                    <span>{note.author}</span> -{" "}
                    <span>{format(note.date)}</span>
                  </p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteNote(note._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }
}
