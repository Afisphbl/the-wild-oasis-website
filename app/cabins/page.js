export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const usersData = await res.json();

  return (
    <div>
      <h1>Cabins</h1>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
