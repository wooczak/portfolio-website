export type TOpinionProps = {
  text: string;
  author: string;
  scrollType: 'snap-start' | 'snap-center' | 'snap-end';
}

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Opinion({ text, author, scrollType }: TOpinionProps) {
  return (
    <div className={`${scrollType} shrink-0 w-full flex flex-col`}>
      <FaQuoteLeft />
      <blockquote className="my-8">
        {text}
      </blockquote>
      <FaQuoteRight className="self-end"/>
      <p className="self-end mt-8">= {author}</p>
    </div>
  )
}

export default Opinion