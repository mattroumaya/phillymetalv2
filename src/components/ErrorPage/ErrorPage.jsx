import { useRouteError } from "react-router-dom";
import metalcat from "../../assets/metalcat.jpeg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>OOPS.</h1>
      <p>Sorry, something went wrong.</p>
      <img alt="metal cat with guitar" src={metalcat} className="metal-cat" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
