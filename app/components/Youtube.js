import React, {Component} from 'react';

const API = 'AIzaSyDZOZjelGwA5AVXp62NFfhM6JXKDlzk-7A'
const q = 'javascript'
const q2 = 'tutorial%20react'
const q3 = 'angular%20tutorial'
const result = 5;
const category = 'javascript'
// const startIndex = 6;


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${q}&category=${category}&part=snippet,id&order=date&maxResults=${result}&source=en&lr=en&format=5`

var finalURL2 = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${q2}&part=snippet,id&order=date&maxResults=${result}&source=en&lr=en&format=5`

var finalURL3 = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${q3}&part=snippet,id&order=date&maxResults=${result}&source=en&lr=en&format=5`

const styles = {
  youtube: {
    border: 10,
    marginTop: 20,
    backgroundColor: '#337AB7'
  },

  h2Text: {
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 20
  },

  btnDark: {
    borderRadius: 10,
    padding: 10,
    borderStyle: 'none',
    color: '#fff',
    backgroundColor: '#34495e',
    margin: 10

  },
  text: {
    fontSize: 20,
    marginBottom: 30,
    marginTop: 20

  }
}
class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
    this.clicked2 = this.clicked2.bind(this);
    this.clicked3 = this.clicked3.bind(this);
    
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}

clicked2(){
  fetch(finalURL2)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}

clicked3(){
  fetch(finalURL3)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}




  render(){
    // console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      <div>
          <h2 style={styles.h2Text}>Tutorials</h2>
          <p style={styles.text}>Select tutorials from a series of languages.</p>
          <button style={styles.btnDark} onClick={this.clicked}>Javascript</button>
          <button style={styles.btnDark} onClick={this.clicked2}>React</button>
          <button style={styles.btnDark} onClick={this.clicked3}>Angular</button>
            {
              this.state.resultyt.map((link, i) => {
                console.log(link);
                var frame = <div key={i} style={styles.youtube}><iframe  width="420" height="215" src={link} frameBorder="0" allowFullScreen></iframe></div>
                return frame;
              })
            }
            {this.frame}
      </div>
    );
  }
}

export default Youtube;