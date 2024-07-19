import { fetchBlogs } from "@/lib/getBlogs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import Image from "next/image";
import InlineImage from "@/public/assets/img/thumbnail.png";
import LandingPage from "./landingPage";

// Utility function to format ISO date string
function formatDateString(isoString, locale = "en-GB") {
  const date = new Date(isoString);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function countWords(str) {
  // Split by space or any non-word character to correctly count words
  return str.split(/\s+/).filter((word) => word !== "").length;
}

const HomePage = async () => {
  // Here is where we get the data and we can manipulate some of it before sending it to the client
  // example the dynamic "minsToRead".

  const blogs = await fetchBlogs();

  const blogData = blogs.map((blog) => {
    const paragraphs = blog.fields.blogParagraph;
    const wordCount = countWords(paragraphs);
    const minsToRead = Math.ceil(wordCount / 210);

    // Assuming the image is stored in blog.fields.blogImage.fields.file.url
    const blogImage = `https:${blog.fields.blogImage.fields.file.url}`;

    // Get richParagraph and replace it with the inlineElement

    return {
      ...blog.fields,
      paragraphs,
      minsToRead,
      blogImage,
    };
  });

  return (
    <>
      <LandingPage blogData={blogData} />
    </>
  );
};

export default HomePage;
