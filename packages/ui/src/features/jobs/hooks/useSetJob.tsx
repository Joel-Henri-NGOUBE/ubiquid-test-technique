import { useEffect, useState } from "react";

export const useSetJob = (uuid: string | undefined) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSucces] = useState(false);

  const setJob: ({
    title,
    category,
    salary,
    type,
  }: {
    title: string;
    category: string;
    salary: number;
    type: string;
  }) => void = (e) => {
    setError(null);
    setSucces(false);

    fetch(`http://localhost:3000/jobs/set/${uuid}`, {
      method: "put",
      body: JSON.stringify(e),
      headers: {
        "Authorization": "ubiquid",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        response.json().then((r) => setError(r.message));
      } else {
        response.json().then(() => setSucces(true));
      }
    });
  };

  return { setJob, error, success };
};
