import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "4ybkkhny",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-27",
});

export default client;
