const tags = [
  "Termiz",
  "Denov",
  "Sherobod",
  "Boysun",
  "Jarqo'rg'on",
];

export default function PopularTags() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">

      {tags.map((tag) => (
        <button
          key={tag}
          className="
          rounded-full
          bg-white/20
          px-5
          py-2
          text-white
          backdrop-blur
          hover:bg-blue-600
          transition
        "
        >
          {tag}
        </button>
      ))}

    </div>
  );
}