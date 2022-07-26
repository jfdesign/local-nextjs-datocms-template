
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function AccordionC({data}) {
  console.log(data)

  return (
    <>
      <Accordion allowZeroExpanded>
        {data.items.map((item, i) => (
            <AccordionItem key={i}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel dangerouslySetInnerHTML={{__html: item.details}}></AccordionItemPanel>
            </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}