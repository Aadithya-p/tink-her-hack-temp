import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../Firebase/firebase";

function Activity() {
  const [postedTasks, setPostedTasks] = useState([]);
  const [acceptedTasks, setAcceptedTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchTasks(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchTasks = async (currentUser) => {
    try {
      // ✅ FIXED: postedBy is STRING
      const postedQuery = query(
        collection(db, "tasks"),
        where("postedBy", "==", currentUser.uid)
      );

      const postedSnapshot = await getDocs(postedQuery);
      const myPosted = postedSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // ✅ acceptedBy is OBJECT with uid
      const acceptedQuery = query(
        collection(db, "tasks"),
        where("acceptedBy.uid", "==", currentUser.uid)
      );

      const acceptedSnapshot = await getDocs(acceptedQuery);
      const myAccepted = acceptedSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPostedTasks(myPosted);
      setAcceptedTasks(myAccepted);

    } catch (error) {
      console.error("Error fetching activity:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));

      setPostedTasks((prev) =>
        prev.filter((task) => task.id !== taskId)
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="activity-page">
      <h2 className="activity-title">My Activity</h2>

      {/* ================= POSTED TASKS ================= */}
      <section className="activity-section">
        <h3 className="section-title">Tasks I Posted</h3>

        {postedTasks.length === 0 ? (
          <p className="empty-text">No tasks posted yet.</p>
        ) : (
          postedTasks.map((task) => (
            <div key={task.id} className="activity-card">
              <div className="card-content">
                <p><span className="label">Title:</span> {task.title}</p>
                <p><span className="label">Description:</span> {task.description}</p>

                {/* 🔥 Reward fixed (string now) */}
                <p><span className="label">Reward:</span> {task.reward}</p>

                <p>
                  <span className="label">Status:</span> {task.status}
                </p>

                {/* Show who accepted */}
                {task.acceptedBy && (
                  <p>
                    <span className="label">Accepted By:</span>{" "}
                    {task.acceptedBy.email}
                  </p>
                )}
              </div>

              {/* Allow delete only if still open */}
              {task.status === "open" && (
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete Task
                </button>
              )}
            </div>
          ))
        )}
      </section>

      {/* ================= ACCEPTED TASKS ================= */}
      <section className="activity-section">
        <h3 className="section-title">Tasks I Accepted</h3>

        {acceptedTasks.length === 0 ? (
          <p className="empty-text">No tasks accepted yet.</p>
        ) : (
          acceptedTasks.map((task) => (
            <div key={task.id} className="activity-card">
              <div className="card-content">
                <p><span className="label">Title:</span> {task.title}</p>
                <p><span className="label">Description:</span> {task.description}</p>

                {/* 🔥 Reward fixed */}
                <p><span className="label">Reward:</span> {task.reward}</p>

                <p>
                  <span className="label">Status:</span> {task.status}
                </p>

                {/* Since postedBy is string UID, we cannot show email unless stored separately */}
                <p>
                  <span className="label">Posted By UID:</span>{" "}
                  {task.postedBy}
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Activity;
