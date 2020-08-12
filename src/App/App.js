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

  sharkAttack = (e) => {
    e.preventDefault();
    const sharkBait = studentsData.livingStudents();
    if (sharkBait.length > 0) {
      const randomIndex = Math.floor(Math.random() * sharkBait.length);
      const randomStudent = sharkBait[randomIndex];
      studentsData.followTheLight(randomStudent.id);
      const livingStudents = studentsData.livingStudents();
      const deadStudents = studentsData.dearlyBeloved();
      this.setState({ livingStudents, deadStudents });
    }
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
