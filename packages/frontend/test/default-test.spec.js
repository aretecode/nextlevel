import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

// import App from 'src/App'
class App extends React.Component {
  render() {
    return (<div>Welcome to React</div>)
  }
}

describe('App component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<App/>, node, () => {
      expect(node.textContent).toContain('Welcome to React')
    })
  })
})
