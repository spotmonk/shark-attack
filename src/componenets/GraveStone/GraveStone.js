import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    goat: studentShape.studentShape,
    sharkAttack: PropTypes.func,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="card">
       <div className="card-body">
         <h5 className="card-title">R.I.P. {student.firstName} {student.lastName}</h5>
       </div>
      </div>
    );
  }
}

export default LiveStudent;
