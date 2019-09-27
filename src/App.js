import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './App.css';
import VConsole from 'vconsole/dist/vconsole.min.js'
let vConsole = new VConsole()
const H2 = (props) => {
  const { name, age } = props
  return <h2>{name}{age}岁</h2>
}

class App extends Component {
  static propTypes = {
    age: PropTypes.number.isRequired
  }
  static defaultProps = {
    name: 'xiaoxiao',
    age: 18
  }
  constructor(props){
    super(props)
    this.state = {
      times: 3,
      list: [
        {
          name: 'xx'
        }, {
          name: 'james'
        }, {
          name: 'tom'
        }
      ]
    }
  }
  handleClick(detail) {
    const { list, times } = this.state
    this.setState({
      list: list.concat([{ name: 'sam' }])
    }, () => {
      this.setState({
        times: times + 1
      })
    })
  }
  render() {
    const { list, times } = this.state
    const { name, age } = this.props
    return (
      <div className="app">
        <div className={'title font-' + 1}>名单{ times }</div>
        <H2 name={name} age={age} />
        {
          // 注释内容 
          list.map((item, index) => 
                    <li key={index} onClick={this.handleClick.bind(this, item)}>{ item.name }</li>
                  )
        }
      </div>
    )
  }
}

export default App;
