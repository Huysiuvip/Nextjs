import { faker } from "@faker-js/faker";

export async function GET() {
  const randomName = faker.person.fullName();

  return Response.json({
    name: randomName,
  });
}