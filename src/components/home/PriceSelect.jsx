export default function PriceSelect() {
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
      <option>Narx</option>
      <option>500 minggacha</option>
      <option>1 mln gacha</option>
      <option>2 mln gacha</option>
      <option>5 mln+</option>
    </select>
  );
}