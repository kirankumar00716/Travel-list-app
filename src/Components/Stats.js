export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding some items to yout packing list 🚀</em>
      </p>
    );
  const numItems = item.length;
  const numPacked = item.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `
        💼 You have ${numItems} items on your list,and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
