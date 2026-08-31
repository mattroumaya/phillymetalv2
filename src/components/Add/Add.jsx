import { useState } from "react";
import "../Add/Add.scss";

export default function Add() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submitAShow(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const show = {
      venue: form.elements.venue.value.trim(),
      show_date: form.elements.date.value,
      description: form.elements.bands.value.trim(),
      url: form.elements.href.value.trim() || null,
    };

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/add-show", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(show),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit show");
      }

      form.reset();

      const thanks = document.querySelector(".submit-thanks");
      thanks.classList.add("show");

      setTimeout(() => {
        thanks.classList.remove("show");
      }, 5000);
    } catch (error) {
      console.error("Show submission failed:", error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <p className="add-text">
        Thank you for submitting a show! <br />
        Your data will be sent to the server and posted after review.
      </p>

      <form id="submit-form" onSubmit={submitAShow}>
        <label htmlFor="date" className="add-label">
          Date:
        </label>
        <br />
        <input
          type="date"
          id="date"
          name="date"
          className="add-input"
          required
        />
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
          required
        />
        <br />

        <label htmlFor="venue" className="add-label">
          Venue:
        </label>
        <br />
        <input
          type="text"
          id="venue"
          name="venue"
          className="add-input"
          required
        />
        <br />

        <label htmlFor="href" className="add-label">
          URL:
        </label>
        <br />
        <input type="url" id="href" name="href" className="add-input" />
        <br />

        <button
          type="submit"
          className="add-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting…" : "Submit"}
        </button>
      </form>

      {error && <p className="submit-error">{error}</p>}

      <p className="submit-thanks">SUCCESS! SHOW SUBMITTED! THANK YOU!</p>
    </>
  );
}
