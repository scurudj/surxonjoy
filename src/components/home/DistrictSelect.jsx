const districts = [
  "Termiz",
  "Denov",
  "Sherobod",
  "Boysun",
];

export default function DistrictSelect() {
  return (
    <select
      className="
      rounded-xl
      border
      p-4
      outline-none
      focus:border-blue-600
    "
    >
      <option>Tuman</option>

      {districts.map((district) => (
        <option key={district}>{district}</option>
      ))}
    </select>
  );
}