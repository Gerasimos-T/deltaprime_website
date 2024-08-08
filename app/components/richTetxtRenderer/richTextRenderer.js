// RichTextRenderer.js
import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const CustomButton = ({ buttonText, url }) => (
  <a href={url} className="custom-button">
    {buttonText}
  </a>
);

const RichTextRenderer = ({
  richTextDocument,
  hasTakeaways,
  blogTakeaways,
}) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="my-4">{children}</p>; // Adjust spacing with custom class
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="ml-10 list-disc list-inside">{children}</ul>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className="ml-10 list-decimal list-inside">{children}</ol>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="my-2">{children}</li>;
      },

      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="text-3xl font-bold my-4">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="text-2xl font-bold my-4">{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3 className="text-xl font-bold my-4">{children}</h3>;
      },

      [BLOCKS.TABLE]: (node, children) => (
        <table className="styled-table">
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="p-4 border">{children}</td>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        const { url, details } = file;
        const { width, height } = details.image;

        return (
          <Image
            className="inlineImage"
            src={`https:${url}`}
            alt={title || ""}
            width={width}
            height={height}
          />
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const { buttonText, url } = node.data.target.fields;
        return <CustomButton buttonText={buttonText} url={url} />;
      },

      [INLINES.HYPERLINK]: (node) => {
        return <p>Link</p>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const text = node.content[0]?.value;
        if (text.includes("{{inline_Takeaways}}") && hasTakeaways) {
          return (
            <div className="my-10 p-2 ">
              <div className="gradient-border p-3 sm:p-12">
                <div>
                  <h4 className="text-[24px] font-bold mb-10 text-[#FFBB9B]">
                    Key Takeaways
                  </h4>
                  <ul>
                    {blogTakeaways.map((takeaway, index) => (
                      <li
                        key={index}
                        className="mb-8 text-[18px] dark:text-[#F6F6F6] text-[#252948]"
                      >
                        {" "}
                        <span>•</span> {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        } else if (text.includes("{{inline_Takeaways}}") && !hasTakeaways) {
          return null;
        }

        if (text.includes("{{inline_CTA}}")) {
          return (
            <div className="mb-20">
              <UnlockPotentialContainer />
            </div>
          );
        }
        return (
          <div className="my-4 blogStyling text-[#252948] dark:text-[#F6F6F6]">
            {children}
          </div>
        );
      },
    },
  };

  return <>{documentToReactComponents(richTextDocument, options)}</>;
};

export default RichTextRenderer;
