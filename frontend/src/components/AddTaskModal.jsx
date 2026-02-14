import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../Firebase/firebase";

function AddTaskModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reward, setReward] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    if (!reward.trim()) {
      setError("Reward is required.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        setError("You must be logged in.");
        return;
      }

      await addDoc(collection(db, "tasks"), {
        title: title.trim(),
        description: description.trim(),
        reward: reward.trim(),   // ✅ store as string
        dueDate: dueDate ? new Date(dueDate) : null,
        status: "open",
        postedBy: user.uid,
        createdAt: serverTimestamp(),
      });

      // Reset
      setTitle("");
      setDescription("");
      setReward("");
      setDueDate("");
      setError("");

      onClose();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <h3>Add New Task</h3>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">

          {error && <div className="form-error">{error}</div>}

          <div className="form-group">
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Describe the task in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              type="text"   // ✅ changed from number to text
              placeholder="Reward"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
            />

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
