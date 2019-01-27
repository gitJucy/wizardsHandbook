import React from 'react';
import { spellsEnd, allClasses } from './api';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    spellsEnd();
    allClasses();
  }
  render() {
    return (
      <div>
        <h2>Hello, Nick</h2>
      </div>
    );
  }
}
export default App;
