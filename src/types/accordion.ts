export interface AccordionProps {
    sections: {
        title: string;
        content: string;
    }[];
}

export interface AccordionSectionProps {
    section: {
        title: string;
        content: string;
    };
    isActiveSection: boolean;
    setActiveIndex: (index: number | null) => void;
    sectionIndex: number;
}