import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/studentShape';
import GraveStone from '../GraveStone/GraveStone';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (
    <GraveStone key={student.id} student={student}/>
    ));

    return (
      <div id="Graveyard" class="d-flex row">
        <div class="col-12"><h2>The Graveyard!</h2></div>
        { studentCards }
      </div>
    );
  }
}

export default Graveyard;
