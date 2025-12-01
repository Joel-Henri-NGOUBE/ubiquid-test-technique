import type { FC } from "react";
import JobForm from "../../components/JobForm/JobForm";
import { useSetJob } from "../../hooks/useSetJob";
import { useParams } from "react-router";

const SetJob: FC = () => {
  const { id } = useParams()
  const { setJob, error, success } = useSetJob(id);

  return (
    <div>
      {error && <div>{error}</div>}
      {success && <div>YEAH !</div>}
      <JobForm onSubmit={(e) => setJob({ ...e, salary: +e.salary })} uuid={id}/>
    </div>
  );
};

export default SetJob;
