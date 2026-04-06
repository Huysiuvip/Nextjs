export async function GET() {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain",
  );
  const data = await res.text();

  return Response.json({ number: data.trim() });
}