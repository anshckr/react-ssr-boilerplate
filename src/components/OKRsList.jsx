import React from 'react';

import Objective from './Objective';

import fetchOKRs from '../utils/fetchOKRs';

const OKRsList = () => {
  const [okrs, setOkrs] = React.useState([]);

  React.useEffect(() => {
    fetchOKRs().then((res) => {
      setOkrs(res.data);
    });
  }, [setOkrs]);

  const objectives = okrs.filter((okr) => okr.parent_objective_id === '');

  const getKeyResults = (objective) => {
    return okrs.filter((okr) => okr.parent_objective_id === objective.id);
  };

  return (
    <ol type="1">
      {objectives.map((objective) => {
        return <Objective key={objective.id} title={objective.title} keyResults={getKeyResults(objective)} />;
      })}
    </ol>
  );
};

export default OKRsList;
