import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
      const { page, user } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p>Привет: {user.name}</p>
          <p>У тебя фоток: {page.photos.length} за {page.year} год</p>
      </div>
    )
  }
}

const mapStateToProps = store => {
    return {
        ...store
    }
};



export default connect(mapStateToProps)(App)
