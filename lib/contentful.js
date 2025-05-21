// lib/contentful.js
import { createClient } from 'contentful';

console.log("SPACE_ID:", process.env.CONTENTFUL_SPACE_ID);
console.log("ACCESS_TOKEN:", process.env.CONTENTFUL_ACCESS_TOKEN);

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: process.env.CONTENT_TYPE,
  });
  return entries.items;
}

export async function getPostBySlug(slug) {
  const decodedSlug = decodeURIComponent(slug);
  console.log("Decoded Slug:", decodedSlug);
  console.log("Content Type:", process.env.CONTENT_TYPE);
  const entries = await client.getEntries({
    content_type: process.env.CONTENT_TYPE,
    'fields.slug': decodedSlug,
  });

  console.log("Entries:", entries);
  return entries.items[0];
}
