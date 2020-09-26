import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledObjective = styled.li`
  color: blue;
`;

const StyledKeyResult = styled.li`
  color: green;
  padding: 10px;
`;

const Objective = ({ title, keyResults }) => {
  return (
    <StyledObjective>
      <React.Fragment>
        {title}
        <ol type="a">
          {keyResults.map((keyResult) => {
            return <StyledKeyResult key={keyResult.id}>{keyResult.title}</StyledKeyResult>;
          })}
        </ol>
      </React.Fragment>
    </StyledObjective>
  );
};

Objective.propTypes = {
  title: PropTypes.string.isRequired,
  keyResults: PropTypes.array.isRequired,
};

export default Objective;
