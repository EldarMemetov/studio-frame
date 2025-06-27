import groq from 'groq';

export const postsQuery = groq`
  *[_type == "post"]{
    _id,
    title,
    slug,
    body,
    mainImage,
    customId,
    author,       
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && customId.current == $id][0]{
    _id,
    title,
    body,
    mainImage,
    customId,
    author,         
    publishedAt
  }
`;
