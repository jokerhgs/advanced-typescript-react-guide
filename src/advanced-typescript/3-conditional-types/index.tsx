// 1. Define the utility type
type WithLoading<T> =
  | { loading: true; data: null }
  | { loading: false; data: T };

// 2. Define a sample data type
type User = {
  name: string;
  email: string;
};

// 3. Create a component using the utility type
function UserCard(props: WithLoading<User>) {
  if (props.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: 6 }}>
      <h2>{props.data.name}</h2>
      <p>{props.data.email}</p>
    </div>
  );
}

// 4. Use the component in a parent
export default function ConditionalTypePage() {
  const isLoading = false;

  return (
    <div>
      <h1>User Info</h1>

      <UserCard loading={true} data={null} />

      <UserCard
        loading={isLoading}
        data={{ name: "Alice Johnson", email: "alice@example.com" }}
      />
    </div>
  );
}
