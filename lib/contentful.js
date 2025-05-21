// lib/contentful.js
import { createClient } from 'contentful';

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
  const entries = await client.getEntries({
    content_type: process.env.CONTENT_TYPE,
    'fields.slug': decodedSlug,
  });

  return entries.items[0];
}
