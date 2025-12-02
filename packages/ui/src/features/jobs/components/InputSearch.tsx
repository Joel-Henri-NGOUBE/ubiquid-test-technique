import type { ChangeEvent, Dispatch, SetStateAction } from "react"
import type { Job } from "../hooks/useJobs"

interface InputSearchProp{
    jobs: Job[],
    setJobs: Dispatch<SetStateAction<Job[]>>,
    searchItem: string,
    setSearchItem: Dispatch<SetStateAction<string>>,
    searchResult: Job[],
    setSearchResult: Dispatch<SetStateAction<Job[]>>,
}
export default function InputSearch({jobs, searchItem ,setSearchItem, setSearchResult}: InputSearchProp){
    function handleSearchItem(e: ChangeEvent<HTMLInputElement>, jobs: Job[]){
        const targetValue = e?.target?.value
        console.log(targetValue)
        setSearchItem(targetValue)
        setSearchResult(jobs.filter(
                j => j.title.toLowerCase().includes(targetValue) ||
                     j.category.toLowerCase().includes(targetValue) || 
                     j.type.toLowerCase().includes(targetValue)
            )
        )
    }
    return <div className="inputSearch">
        <label htmlFor="search"></label>
        <input type="text" name="search" id="search" placeholder="HR Manager, IT, CDI..." value={searchItem} onChange={(e) => handleSearchItem(e, jobs)}/>
    </div>
}