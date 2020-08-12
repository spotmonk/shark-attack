import React from 'react';
import './App.scss';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../componenets/SharkTank/SharkTank';
import Graveyard from '../componenets/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  sharkAttack = (studentId) => {
    studentsData.followTheLight(studentId);
    const livingStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    const { livingStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <button className="btn btn-danger" onClick={this.sharkAttack}>SHARK ATTACK</button>
        <SharkTank students={livingStudents}/>
        <Graveyard students={deadStudents}/>
      </div>
    );
  }
}

export default App;
