import string from "./NewsletterContent.js";

export default function Newsletter() {
  return <div dangerouslySetInnerHTML={{ __html: string }} />;
}
