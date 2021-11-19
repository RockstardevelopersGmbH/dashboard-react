export function Device({ name, status }) {
  return (
    <div className="device">
      <h2>{name}</h2>

      <div>
        {status.map((status) => (
          <div key={status.attribute.key}>
            <h3>{status.attribute.key}</h3>

            <span>{status.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
