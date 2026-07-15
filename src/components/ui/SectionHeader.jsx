import { Link } from "react-router-dom";

export default function SectionHeader({
  title,
  subtitle,
  buttonText,
  buttonLink = "/",
}) {
  return (
    <div className="mb-12 flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 text-lg text-slate-500">
          {subtitle}
        </p>
      </div>

      {buttonText && (
        <Link
          to={buttonLink}
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          {buttonText} →
        </Link>
      )}
    </div>
  );
}