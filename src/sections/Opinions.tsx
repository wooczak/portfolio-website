import { opinions } from "../assets/constants/opinions";
import Opinion from "../components/Opinion";

function Opinions() {
  return (
    <section>
      <div className="flex snap-x snap-mandatory overflow-x-scroll gap-6">
        {opinions?.map(({ text, author, scrollType }) => (
          <Opinion author={author} text={text} scrollType={scrollType} />
        ))}
      </div>
    </section>
  );
}

export default Opinions;
