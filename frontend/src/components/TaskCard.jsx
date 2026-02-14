import React from "react";
import { auth } from "../Firebase/firebase";

function TaskCard({ task, onAccept }) {
  const currentUser = auth.currentUser;

  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.toDate) return "N/A";
    return timestamp.toDate().toLocaleDateString();
  };

  // 🔥 FIXED: postedBy is stored as UID string
  const isOwnTask = task.postedBy === currentUser?.uid;

  return (
    <div className="task-card">

      <div className="task-row">
        <span className="label">Title:</span>
        <span className="value">{task.title || "No Title"}</span>
      </div>

      <div className="task-row">
        <span className="label">Description:</span>
        <span className="value">
          {task.description || "No description"}
        </span>
      </div>

      <div className="task-divider"></div>

      <div className="task-row">
        <span className="label">Reward:</span>
        {/* 🔥 Reward is string now */}
        <span className="value">{task.reward || "N/A"}</span>
      </div>

      <div className="task-row">
        <span className="label">Due Date:</span>
        <span className="value">{formatDate(task.dueDate)}</span>
      </div>

      <div className="task-row">
        <span className="label">Posted On:</span>
        <span className="value">{formatDate(task.createdAt)}</span>
      </div>

      {/* Show who accepted */}
      {task.acceptedBy && (
        <div className="task-row">
          <span className="label">Accepted By:</span>
          <span className="value">
            {task.acceptedBy.email || "Unknown"}
          </span>
        </div>
      )}

      <div className="task-footer">

        {/* Accept button (only if NOT own task AND still open) */}
        {!isOwnTask &&
          task.status === "open" &&
          onAccept && (
            <button
              className="accept-btn"
              onClick={() => onAccept(task.id)}
            >
              Accept
            </button>
          )}

        {/* If own task */}
        {isOwnTask && (
          <span className="own-task-label">
            You posted this task
          </span>
        )}

        {/* Status indicator */}
        {task.status === "accepted" && (
          <span className="status">
            Accepted
          </span>
        )}

      </div>

    </div>
  );
}

export default TaskCard;
