// services/sanity.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'yourProjectId', // replace with your Sanity project ID
  dataset: 'production',      // or your dataset name
  useCdn: true,               // `false` if you want the freshest data
  apiVersion: '2023-01-01',   // use current date or specific version
});

export default client;
