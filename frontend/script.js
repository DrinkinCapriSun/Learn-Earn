// Fetch all feedback on page load
async function getFeedback() {
    const response = await fetch("http://localhost:5000/api/feedback");
    const feedback = await response.json();
  
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = ""; // Clear the list first
  
    feedback.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name}: ${item.message}`;
      feedbackList.appendChild(listItem);
    });
  }
  
  // Submit new feedback
  async function submitFeedback(event) {
    event.preventDefault(); // Prevent page reload
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const response = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
  
    if (response.ok) {
      alert("Feedback submitted!");
      getFeedback(); // Refresh the list
    } else {
      alert("Failed to submit feedback.");
    }
  }
  
  // Attach the submit event
  document.getElementById("feedback-form").addEventListener("submit", submitFeedback);
  
  // Load feedback on page load
  getFeedback();
  