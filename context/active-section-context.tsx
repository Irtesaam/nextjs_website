'use client';
import React , {useState, createContext, useContext} from 'react'
import {links} from "@/lib/data";

type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: {children: React.ReactNode}) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); // we need to keep track of the time of the last click to prevent the active section from changing when the user clicks on a link to navigate to a different section
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>
        {children};
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }
    return context;
}
