import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import { db, auth } from "../Firebase/firebase";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔥 Fetch only OPEN tasks in real-time
  useEffect(() => {
    const q = query(
      collection(db, "tasks"),
      where("status", "==", "open")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTasks(taskArray);
    });

    return () => unsubscribe();
  }, []);

  // ✅ FIXED Accept Task Logic
  const handleAccept = async (taskId) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("Please login first");
        return;
      }

      const taskRef = doc(db, "tasks", taskId);

      await updateDoc(taskRef, {
        status: "accepted",
        acceptedBy: {
          uid: user.uid,
          email: user.email,
        },
        acceptedAt: serverTimestamp(),
      });

    } catch (error) {
      console.error("Accept error:", error);
      alert("Error accepting task");
    }
  };

  // 🔍 Search filter
  const filteredTasks = tasks.filter((task) =>
    task.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tasks-page">
      <h2>Available Tasks</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* 📋 Task List */}
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onAccept={handleAccept}
            />
          ))
        )}
      </div>

      {/* ➕ Floating Button */}
      <button
        className="floating-btn"
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {/* 🪟 Add Task Modal */}
      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Tasks;
