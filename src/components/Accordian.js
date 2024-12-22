import { useState } from "react";
export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordianItems = [
    {
      title: `HTML`,
      description: `The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.`,
    },
    {
      title: `CSS`,
      description: `Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.`,
    },
    {
      title: `JavaScript`,
      description: `avaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.`,
    },
  ];
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {accordianItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem(props) {
  const { title, description, isOpen, onClick } = props;

  return (
    <div>
      <div onClick={onClick}>
        {title}
        <span
          aria-hidden={true}
          className={open ? "accordion-icon" : "accordion-icon-rotated"}
        />
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
}
