export default function RobotDisplay({ role, power, countdown }) {
  let bgColor = '';
  let icon = '';

  if (role === 'Medic') {
    bgColor = 'green';
    icon = '💊';
  } else if (role === 'Warrior') {
    bgColor = 'crimson';
    icon = '⚔️';
  } else if (role === 'Artist') {
    bgColor = 'purple';
    icon = '🎨';
  }

  if (power < 20) {
    icon = '⚠️';
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '250px'
      }}
    >
      <h2>{icon} {role} Robot</h2>
      <p>Power Level: {power}%</p>

      {power < 20 && <p><strong>CRITICAL BATTERY!</strong></p>}

      {countdown !== null && <p>⏳ Self-Destruct in: {countdown}</p>}
    </div>
  );
}