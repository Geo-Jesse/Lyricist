import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import SearchReturn from './components/SearchReturn';
import Lyrics from './components/Lyrics';

class App extends Component {
  render() {
    return (
      <div className="container">
      <SearchBar />

          {/* <!-- Jumbotron Header --> */}
          <header className="jumbotron hero-spacer col-lg-12">
            <div className="lyricsContainer col-lg-9">
              <Lyrics />
            </div>

          </header>

          <hr />

          {/* <!-- Title --> */}
          <div className="row">
              <div className="col-lg-12">
                  <h3>Latest Features</h3>
              </div>
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- Page Features --> */}
          <div className="row text-center">

              <div className="col-md-3 col-sm-6 hero-feature">
                  <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                          <h3>Feature Label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a>
                               <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 hero-feature">
                  <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                          <h3>Feature Label</h3>
                          <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a>
                              <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 hero-feature">
                  <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                          <h3>Feature Label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a> <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 hero-feature">
                  <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                          <h3>Feature Label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a>
                              <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

          </div>
          {/* <!-- /.row --> */}

          <hr />

          {/* <!-- Footer --> */}
          <footer>
              <div className="row">
                  <div className="col-lg-12">
                      <p>Copyright &copy; Your Website 2014</p>
                  </div>
              </div>
          </footer>

      </div>
    );
  }
}

export default App;
