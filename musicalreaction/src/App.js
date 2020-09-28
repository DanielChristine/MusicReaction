import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Table } from "semantic-ui-react";
import data from './data.js';




class App extends Component {
  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Album</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Genre</Table.HeaderCell>
            <Table.HeaderCell>Release</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {music.map((el) => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>{el.title}</Table.Cell>
                <Table.Cell>{el.album}</Table.Cell>
                <Table.Cell>{el.artist}</Table.Cell>
                <Table.Cell>{el.genre}</Table.Cell>
                <Table.Cell>{el.release}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default App;
