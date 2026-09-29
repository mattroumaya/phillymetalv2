import string from "./NewsletterContent.js";
import { usePageTitle } from "../../usePageTitle";

export default function Newsletter() {
  usePageTitle("Newsletter · phillymetal.net");
  return <div dangerouslySetInnerHTML={{ __html: string }} />;
}
