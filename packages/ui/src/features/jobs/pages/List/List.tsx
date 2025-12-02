import type { FC } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { useJobs } from "../../hooks/useJobs";
import styles from "./List.module.css";
import Sort from "./Sort/Sort";
import InputSearch from "../../components/InputSearch";
import { Link } from "react-router";

const JobList: FC = () => {
  const { jobs, setJobs, error, setSortBy, setSortOrder, sortBy, sortOrder, searchItem, setSearchItem, searchResult, setSearchResult } = useJobs();

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>⚠️ {error}</div>}
      <InputSearch
        jobs={jobs}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        setJobs={setJobs}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      {(searchItem ? searchResult : jobs) && (
        <>
          <Sort
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
          {(searchItem ? searchResult : jobs).map((job) => <Link to={`/set-job/${job.uuid}`} key={job.uuid}>
            <JobCard job={job}  />
          </Link>)}
        </>
      )}
      {jobs.length === 0 && (
        <div className={styles.noResults}>
          Aucune annonce ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
};

export default JobList;
