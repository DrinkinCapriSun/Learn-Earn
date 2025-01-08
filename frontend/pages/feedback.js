import { useEffect, useState } from "react";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state

  // Fetch feedback from the backend
  const fetchFeedback = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`);
      const data = await response.json();
      setFeedback(data); // Replace the state with the latest data
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // Submit feedback to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable submit button

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setName(""); // Clear the form
        setEmail("");
        setMessage("");
        await fetchFeedback(); // Refresh feedback list
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false); // Re-enable submit button
    }
  };

  // Load feedback when the page loads
  useEffect(() => {
    fetchFeedback(); // Fetch feedback on page load
  }, []);

  return (
    <div>
      <h1>Feedback Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      <h2>Feedback Received</h2>
      <ul>
        {feedback.map((fb) => (
          <li key={fb.id}>
            <strong>{fb.name}:</strong> {fb.message} ({fb.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
