import React from 'react';
import Axios from 'axios';
import Details from './Details.jsx';
import Descriptions from './Descriptions.jsx';
import Footer from './Footer.jsx';
import MovieWheel from './MovieWheel.jsx'
import Controller from './Controller.jsx'


class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        moviePosters: [], 
        descriptions: [],
        id: 284053,
      }

    }
    

    async componentDidMount() {
      console.log('mounted');


      await Axios.get('http://localhost:3003/api/descriptions', {
        params:{
        id: `${this.state.id}`
      }
    })
      .then(results => {
        // console.log(results.data.results)
          return results
      })
      .then(info => {
          this.setState({
              descriptions: info.data.results
              
          })
      })
      .catch(err => {
          console.log(err);
      });


      await Axios.get('http://localhost:3003/api/similars')
      .then(results => {
        return results
      })
      .then(posters => {
        this.setState({
          moviePosters: posters.data.results
        })
      })
      .catch( err => {
        console.log(err);
        })
      
    }



    render() {
   
      return (
        <div>
          <main className="mainHeader" >Customers who watched this item also watched</main>
            <div className="wrapper" >
              <MovieWheel className="movieWheel" moviePosters={this.state.moviePosters} />
              <div className="moreDetailsHeader">More details</div>
              <Details className="details"/>
              <Descriptions className="description" info={this.state.descriptions}/>
              <Footer className="footer" />
            </div>
        </div>
      )
    }  
};





export default App;