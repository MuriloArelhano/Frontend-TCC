import React, { useRef, useState } from 'react';
// styles
import { AccordionContainer, AccordionHeader, AccordionBody } from './styles';

function Accordion({ title }) {
    const [accordionExpanded, setAccordionExpanded] = useState(false);
    const [accordionMaxHeight, setAccordionMaxHeight] = useState(false);
    const accordionRef = useRef(null);

    const toogleAccordion = () => {
        const expanded = !accordionExpanded;
        setAccordionExpanded(expanded);

        if (accordionRef.current) {
            setAccordionMaxHeight(expanded ? `${accordionRef.current.scrollHeight}px` : '0px');
        }
    }

    return (
        <AccordionContainer>
            <AccordionHeader onClick={toogleAccordion}>{title}</AccordionHeader>
            <AccordionBody ref={accordionRef} maxHeight={accordionMaxHeight}>
                <div className="content">
                    dasdsa
                </div>
            </AccordionBody>
        </AccordionContainer>
    );
}

export default Accordion;