import string from "./NewsletterContent";

export default function Newsletter() {
  return <div dangerouslySetInnerHTML={{ __html: string }} />;
}
