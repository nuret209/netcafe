import { createContext, Dispatch, SetStateAction, } from "react";
interface SearchFiltersContext {
    city: string;
    type: string[];
    minPC: number;
    minPS: number;
    minSimulation: number;
    minVR: number;
    popular: boolean;
    setFilter: Dispatch<SetStateAction<{
        minPC: number;
        popular: boolean;
        minPS: number;
        minVR: number;
        minSimulation: number;
        city: string;
        type: string[];
    }>>
}
export const SearchFilterContext = createContext<SearchFiltersContext>({
    minPC: 0,
    minPS: 0,
    minSimulation: 0,
    minVR: 0,
    popular: false,
    city: "all",
    setFilter: () => { },
    type: ["all"],
});