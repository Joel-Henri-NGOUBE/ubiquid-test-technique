import type { ChangeEvent, Dispatch, SetStateAction } from "react"
import type { Job } from "../hooks/useJobs"

interface InputSearchProp{
    setJobs: Dispatch<SetStateAction<Job[]>>,
    searchItem: string,
    setSearchItem: Dispatch<SetStateAction<string>>,
}
export default function InputSearch({setJobs, searchItem ,setSearchItem}: InputSearchProp){
    function handleSearchItem(e: ChangeEvent<HTMLInputElement>){
        const targetValue = e?.target?.value
        console.log(targetValue)
        setSearchItem(targetValue)
        setJobs(
            (jobs) => jobs.filter(
                j => j.title.toLowerCase().includes(targetValue) ||
                     j.category.toLowerCase().includes(targetValue) || 
                     j.type.toLowerCase().includes(targetValue)
            )
        )
    }
    return <div className="inputSearch">
        <label htmlFor="search"></label>
        <input type="text" name="search" id="search" placeholder="HR Manager, IT, CDI..." value={searchItem} onChange={(e) => handleSearchItem(e)}/>
    </div>
}