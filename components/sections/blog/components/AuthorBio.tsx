import { SanityAuthor } from "../../../../types/schema";
import GradientBorderWrapper from "../../../common/GradientBorderWrapper";

export default function AuthorBio({ author }: { author: SanityAuthor }) {
  return (
    <section className="flex flex-col gap-4 mt-12 items-center pt-8">
    <GradientBorderWrapper style={{ borderRadius: '9999px' }}>
      <img 
        src={author.portrait as unknown as string} 
        alt={`${author.name} profile picture`} 
        className="w-32 h-32 rounded-full"
      />
    </GradientBorderWrapper>
      <div className="flex flex-col gap-2 w-full max-w-3xl px-4 lg:px-8">
        <h3 className="text-2xl text-center font-bold">{author.name}</h3>
        <p className="text-gray50">{author.bio}</p>
      </div>
    </section>
  );
}
