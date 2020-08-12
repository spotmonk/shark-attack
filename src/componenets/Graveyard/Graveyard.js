import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students, sharkAttack } = this.props;

    const studentCards = students.map((student) => (
    <LiveStudent sharkAttack={sharkAttack} key={student.id} student={student}/>
    ));

    return (
      <div id="sharkTank">
        <h2>The Graveyard!</h2>
        { studentCards }
      </div>
    );
  }
}

export default Graveyard;
