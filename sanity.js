import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "tqxjg7u9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-10-05",
});
const builder = imageBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
