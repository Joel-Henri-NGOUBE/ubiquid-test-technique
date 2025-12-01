import type { FC } from "react";
import { useEffect, useState } from "react";
import styles from "./JobForm.module.css";
import type { Job } from "../../hooks/useJobs";

interface JobFormProps {
  onSubmit: ({
    title,
    category,
    salary,
    type,
  }: {
    title: string;
    category: string;
    salary: string;
    type: string;
  }) => void;
  uuid: string | undefined
}

const JobForm: FC<JobFormProps> = ({ onSubmit, uuid }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("sales");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("cdi");

  useEffect(() => {
    const getJobToSet: () => void = () => {
  
      fetch(`http://localhost:3000/jobs/${uuid}`, {
        method: "GET",
        headers: {
          "Authorization": "ubiquid",
        },
      }).then((response) => {
        if (!response.ok) {
          response.json().then((r) => console.log(r.message));
        } else {
          response.json().then((r: Job[]) => {
            setTitle(r[0].title)
            setCategory(r[0].category)
            r[0].salary && setSalary(r[0].salary.toString())
            setType(r[0].type)
          });
        }
      });
    };

    getJobToSet()
  }, [])

  const handleSubmit = () => {
    onSubmit({ title, category, salary, type });
  };

  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.field}>
        <div className={styles.label}>Titre</div>
        <input
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      {/* Category */}
      <div className={styles.field}>
        <div className={styles.label}>Catégorie</div>
        <select
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
        >
          <option value={"sales"}>Sales</option>
          <option value={"it"}>IT</option>
          <option value={"managment"}>Managment</option>
        </select>
      </div>

      {/* Salary */}
      <div className={styles.field}>
        <div className={styles.label}>Salaire annuel</div>
        <input
          value={salary}
          onChange={(e) => setSalary(e.currentTarget.value)}
        />
      </div>

      {/* Type */}
      <div className={styles.field}>
        <div className={styles.label}>Type de contrat</div>
        <select value={type} onChange={(e) => setType(e.currentTarget.value)}>
          <option value={"cdi"}>CDI</option>
          <option value={"cdd"}>CDD</option>
          <option value={"internship"}>Stage</option>
        </select>
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <div className={styles.button} onClick={() => handleSubmit()}>
          Enregistrer
        </div>
      </div>
    </div>
  );
};

export default JobForm;
