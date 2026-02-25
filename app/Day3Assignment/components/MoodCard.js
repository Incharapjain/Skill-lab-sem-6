export default function MoodCard({ date, mood, description }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '10px'
      }}
    >
      <h2>{mood}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
    </div>
  );
}