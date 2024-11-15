export default function Project({ title, description, link }) {
  return (
    <div className="border border-gray-700 p-6 rounded-lg bg-gray-800">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
}
