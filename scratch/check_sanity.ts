import { client } from './src/sanity/lib/client';

async function test() {
  const allProjects = await client.fetch(`*[_type == "project"]{title, category}`);
  console.log('Projects in Sanity:', JSON.stringify(allProjects, null, 2));
}

test();
