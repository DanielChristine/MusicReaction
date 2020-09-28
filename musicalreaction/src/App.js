import React, { Component } from "react";
import axios from 'axios';
import './App.css';
import {  Table } from "semantic-ui-react";

axios({
  method: 'get',
  url: 'http://devcodecampmusiclibrary.com/',
  data: {
  
  }
});

class App extends Component {

  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Genre</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contacts.map(el => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>
                  {el.firstname} {el.lastname}
                </Table.Cell>
                <Table.Cell>{el.phone}</Table.Cell>
                <Table.Cell>{el.email}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default App;