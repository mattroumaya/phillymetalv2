import MailerLite from "@galaco/react-mailerlite-form";

export default function Newsletter() {
  <MailerLite
    code={846152}
    trackerId="v53b4f9cde81a6500b42e78775969826b"
    header={<div>Some Instructions</div>}
    submitButtonContent="Submit"
    submittingButtonContent="Submitting..."
    submissionComplete={<div>Success!</div>}
    emailPlaceholder="Enter your email..."
  />;
}
