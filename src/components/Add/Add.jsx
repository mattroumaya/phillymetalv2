import { createClient } from "@supabase/supabase-js";
import "../Add/Add.scss";

export default function Add() {
  const submitAShow = (e) => {
    // initialize client
    const supabase = createClient(
      "https://itvifawsdgiynkldcfnv.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dmlmYXdzZGdpeW5rbGRjZm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0MDMyNzcsImV4cCI6MTk4MDk3OTI3N30.YvPD_C5yy5ELMJw-jt28uMTfwOoY7WPDeBOUy4JL0_0"
    );

    // get form values when button is cliekd
    e.preventDefault();
    const form = document.getElementById("submit-form");

    // insert form data
    async function addDataFromAnonymousMetalFan() {
      const { data, error } = await supabase.from("main").insert([
        {
          venue: form.elements["venue"].value,
          show_date: form.elements["date"].value,
          description: form.elements["bands"].value,
          url: form.elements["href"].value,
          validated: "false",
        },
      ]);
      return data;
    }

    addDataFromAnonymousMetalFan();

    // reset form
    [...form].forEach((el) => (el.value = ""));

    const thanks = document.querySelector(".submit-thanks");

    thanks.classList.add("show");
    setTimeout(function () {
      thanks.classList.remove("show");
    }, 5000);
  };

  return (
    <>
      <p className="add-text">
        Thank you for submitting a show! <br />
        Your data will be sent to the server and posted after review.
      </p>
      <form id="submit-form">
        <label htmlFor="date" className="add-label">
          Date:
        </label>
        <br />
        <input type="date" id="date" name="date" className="add-input" />
        <br />
        <label htmlFor="bands" className="add-label">
          Bands:
        </label>
        <br />
        <input
          type="text"
          id="bands"
          name="bands"
          placeholder="Band 1 // Band 2 // Band 3"
          className="add-input"
        />
        <br />
        <label htmlFor="venue" className="add-label">
          Venue:
        </label>
        <br />
        <input type="text" id="venue" name="venue" className="add-input" />
        <br />
        <label htmlFor="href" className="add-label">
          URL:
        </label>
        <br />
        <input type="text" id="href" name="href" className="add-input" />
        <br />
        <button id="submit" className="add-submit-btn" onClick={submitAShow}>
          Submit
        </button>
      </form>
      <p className="submit-thanks">SUCCESS! SHOW SUBMITTED! THANK YOU!</p>
    </>
  );
}
