import * as React from "react";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const parseContent = (text: string) => {
    const blocks = text.trim().split("\n\n");
    return blocks.map((block, index) => {
      if (block.startsWith("## ")) {
        const textContent = block.replace("## ", "");
        const id = textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <h2 key={index} id={id} className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">
            {textContent}
          </h2>
        );
      } else if (block.startsWith("> ")) {
        return (
          <blockquote key={index} className="border-l-4 border-primary bg-accent/5 p-6 italic text-lg text-foreground my-6 rounded-r-lg">
            {block.replace("> ", "")}
          </blockquote>
        );
      } else if (block.startsWith("- ")) {
        const items = block.split("\n").map(item => item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'));
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2 text-muted-foreground leading-relaxed">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
      } else {
        const formattedBlock = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formattedBlock }} />
        );
      }
    });
  };

  return (
    <div className="max-w-none">
      {parseContent(content)}
    </div>
  );
}
