import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React from 'react';
import ReactDom from 'react-dom';

class ContentFeed extends React.component {
    constructor () {
      super();

      this.state = {
            'music': []
        }
    }
    componentDidMount(){
        this.getMusic();
    }

getMusic(){
    fetch('http://devcodecampmusiclibrary.com/')
    .then(results => results.json())
    .then(results => this.setState({'music': results}));
   }
render(){
    return (
      <ul>
        {this.state.music.map(function(music, index) {
          return (
            <div key={id+index}>
              <h1>{music.title}</h1>
              <p>{music.artist}</p>
            </div>
          )
        } )}
      </ul>
    );
    }
}
ReactDom.render(
    <ContentFeed />,
    document.getElementById('root')
);







