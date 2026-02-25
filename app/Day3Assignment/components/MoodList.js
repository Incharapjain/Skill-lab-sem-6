import MoodCard from './MoodCard';

export default function MoodList({ moods }) {
  return (
    <div>
      {moods.map((item, index) => (
        <MoodCard
          key={index}
          date={item.date}
          mood={item.mood}
          description={item.description}
        />
      ))}
    </div>
  );
}