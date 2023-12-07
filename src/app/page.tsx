export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("https://api.github.com/users/GuilhermeFRocha");
  const todo = await response.json();

  return <pre>{JSON.stringify(todo, null, 2)}</pre>;
}
