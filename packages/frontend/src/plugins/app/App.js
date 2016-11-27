import React from 'react'

class App extends React.Component {
  render() {
    const children = this.props.children || undefined
    return <div className="App">App {children}</div>
  }
}

export default App
