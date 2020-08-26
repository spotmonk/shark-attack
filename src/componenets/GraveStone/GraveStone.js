import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/studentShape';
import './GraveStone.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    goat: studentShape.studentShape,
    sharkAttack: PropTypes.func,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="gravestone-container m-4">
      <div className="tombstone">
      <div className="upperTombstone"></div>
        <div className="lowerTombstone">
          <div className="name">
            <p>{student.firstName} {student.lastName}</p>
            <p>2020 - 2020</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default LiveStudent;
