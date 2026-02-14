<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

#TASKMINT 🎯

## Basic Details

### Team Name: [HackHive]

### Team Members
- Member 1: AADITHYA P- GOVERNMENT ENGINEERING COLLEGE,THRISSUR
- Member 2: DEVIKA S - GOVERNMENT ENGINEERING COLLEGE,THRISSUR

### Hosted Project Link
[mention your project hosted link here]

### Project Description
This is a React + Firebase task management web application where users can post, browse, and accept tasks. The app uses Firebase Authentication for secure login and Cloud Firestore to store user-specific task data. It is built as an auth-protected Single Page Application with real-time UI updates.

### The Problem statement
College students have valuable skills and time to offer, but there is no structured system within campuses to convert small tasks into fair earning opportunities.

Tasks like assignment help, note sharing, tech support, event coordination, and errands are handled informally through chats, without clear reward commitment, accountability, or structured compensation.

As a result, students are often underpaid or unpaid, agreements fail, and a hidden campus micro-economy remains unorganized and undervalued.

### The Solution
The Solution
CampusTask provides:
A centralized task posting system
Verified login via Firebase Authentication
Secure task ownership
Accept/reject workflow
Activity tracking for posted and accepted tasks
It creates a trusted and transparent campus gig ecosystem.

## Technical Details
Frontend:
    Built using React (Vite)
    Uses functional components and React Hooks (useState, useEffect)
    CSS used for styling and layout
    Conditional rendering based on authentication state
Backend (Using Firebase)
    Instead of building a separate backend server, the app uses Firebase:
    Firebase Authentication
    Handles user signup, login, and session management.
    Firebase Firestore
    Stores all task data in a NoSQL database.

Data Structure
   Tasks are stored in a Firestore collection called tasks.
   Each task contains:
   Title
   Description
   Reward
   Due Date
   Status (open / accepted)
   CreatedBy (user ID)
   AcceptedBy (user ID)

Security
  Only logged-in users can access the app.
  Each task is linked to the creator’s user ID.
  Only the task owner can delete their task (enforced by Firestore rules).


### Technologies/Components Used
Technologies/Components Used
For Software:
  Languages used:
     JavaScript
Frameworks used:
    React (Vite setup)
Libraries used:
    Firebase Authentication
    Firebase Firestore
    React Hooks (useState, useEffect)
Tools used:
    VS Code
    Git & GitHub
    Firebase Console
    Chrome DevTools
    

**For Software:**
- Languages used: JavaScript (ES6+)
- Frameworks used:  React
- Libraries used:Firebase Authentication (User login & signup)
            Firebase Firestore (Database for storing tasks)
            React Hooks (useState, useEffect)
- Tools used:VS Code
             Chrome Developer Tools
             Git & GitHub
             Firebase Console
  

## Features
1,Secure User Authentication:
Students can sign up and log in using Firebase Authentication to ensure verified participation within the campus ecosystem.
2,Reward-Based Task Posting:
Users can post micro-tasks with a specified reward amount, deadline, and description — converting small campus needs into structured earning opportunities.
3Task Acceptance & Status Tracking:
Students can browse available tasks and accept them. Task status updates dynamically (open → accepted), ensuring transparency and accountability.
4,Activity Dashboard:
Users can view:
Tasks they have posted
Tasks they have accepted
This provides clear tracking of both earning and responsibility.
5,Ownership-Based Deletion:
Only the original task creator can delete their task, enforced through both UI logic and Firestore security rules.
6,Secure Firestore Access Rules:
Backend-level protection ensures only authenticated users can create, update, or delete tasks according to ownership rules.
---


## Implementation
### For Software:

  #### Installation
  # Clone the repository
  git clone https://github.com/your-username/your-repo-name.git
  # Navigate into the project folder
  cd your-repo-name
  # Install dependencies
  npm install
  #### Run
   # Start development server
   npm run dev

## Project Documentation

This project is a React-based task management web application integrated with Firebase Authentication and Cloud Firestore. It allows users to securely log in, create tasks, browse available tasks, accept tasks, and manage their activity. The application is built as a Single Page Application (SPA) with dynamic UI updates and authentication-based access control.

#### Screenshots 
1️⃣ Profile Page
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/2a644d75-2920-4d25-b5ce-ac584aab9f41" />
This screen shows the authenticated user’s profile information fetched from Firebase Authentication. It displays the user’s email, unique user ID (UID), account creation date, last login time, and provides a logout button. The app is auth-protected, meaning only logged-in users can access this page.

2️⃣ Add New Task Modal
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/01df184a-684b-4fa1-9d07-6bdf8aa0210d" />
This modal allows users to create a new task. It includes fields for task title, description, reward, and due date. When submitted, the task data is stored in Firebase Firestore along with metadata like the user’s UID and timestamp.

3️⃣ Available Tasks Page
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/19ab2a04-80be-4ed5-b738-aa7b27109828" />
This page displays all available tasks stored in Firestore. Users can search tasks using the search bar. Each task card shows the title, description, reward, due date, and posting information. Tasks created by the logged-in user are visually indicated.

Activity Page (Posted & Accepted Tasks)
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/ae88e085-c318-4c98-9032-893a6481ea83" />
The Activity page displays tasks posted by the logged-in user and tasks accepted by them. It dynamically fetches data from Firestore and updates the UI based on task status (open/accepted). Users can delete their own tasks if they are still open
#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
🏗 System Architecture
The application follows a Frontend + Backend-as-a-Service (BaaS) architecture.
Frontend: React (Vite) handles UI and state management.
Authentication: Firebase Authentication manages login, logout, and session persistence.
Database: Cloud Firestore stores task data.
API Layer: Firebase SDK connects React to Firebase services.

🔄 Data Flow
User Action → React Component → Firebase SDK → Firestore → State Update → UI Re-render
The app is auth-gated, meaning users must log in to access tasks and activity pages.

**Application Workflow:**
App loads → Firebase checks authentication.
If logged in → Dashboard opens.
User can create, view, accept, or delete tasks.
All task changes are stored in Firestore.
Logout → Session ends and user returns to login screen.

#### Build Photos

![Team](Add photo of your team here)

##COMPONENTS
App.jsx – Root component controlling navigation and auth state
Tasks.jsx – Displays available tasks
Activity.jsx – Shows posted and accepted tasks
Profile.jsx – Displays user information
AddTaskModal.jsx – Task creation form
TaskCard.jsx – Reusable task display component
BottomNav.jsx – Navigation between pages
firebase.js – Firebase configuration

![Build](Add photos of build process here)

 build steps*
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/77364070-8089-497d-a018-334f9a5584ce" />

The final product is a fully functional React + Firebase task management web application with secure authentication and real-time database integration.
 Key Features:
 Secure login and logout using Firebase Authentication
 Create, view, search, and delete tasks
 Accept tasks and track activity
 User-specific task management using Firestore
 Dynamic UI updates without page reload (Single Page Application)
 The application is auth-protected, scalable, and responsive, demonstrating complete frontend–backend integration using a   Backend-as-a-Service architecture.

## Additional Documentation
Backend Type:
Backend-as-a-Service (BaaS) using Firebase
Services Used:
Firebase Authentication
Cloud Firestore
Firebase SDK

#### API Documentation
Authentication is handled using Firebase’s built-in API methods.
Login
Method Used:
signInWithEmailAndPassword(auth, email, password)
Purpose:
Authenticates existing users and creates a session.
Register
createUserWithEmailAndPassword(auth, email, password)
Purpose:
Registers new users in Firebase Authentication.
Logout
signOut(auth)
Purpose:
Ends the user session and redirects to login.
Firestore Database Operations
Create Task
addDoc(collection(db, "tasks"), taskData)
Description:
Stores new task data in Firestore.
Fetch Tasks
getDocs(collection(db, "tasks"))
Description:
Retrieves all tasks from the database.
Update Task (Accept Task)
updateDoc(doc(db, "tasks", taskId), updatedData)
Description:
Updates task status (e.g., open → accepted).
Delete Task
deleteDoc(doc(db, "tasks", taskId))
Description:
Removes a task from Firestore.


#### Installation Guide
Prerequisites
Node.js (v16 or higher recommended)
npm (comes with Node)
Firebase project configured
Clone the Repository
git clone https://github.com/your-username/your-project.git
cd your-project
 Install Dependencies
npm install
Configure Firebase
Go to Firebase Console
Create a project
Enable Authentication (Email/Password)
Enable Firestore Database
Copy your Firebase config
Paste it inside firebase.js
 Run Development Server
npm run dev
Open in browser:
[://localhost:5173](http://localhost:5173
 Build for Production
npm run build
Production files will be generated inside the dist/ folder.



**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---



**Final Assembly:**
![Final Build](images/final-build.jpg)
The final build is a production-ready React application located in the dist folder.
It can be deployed to:
Firebase Hosting
Vercel
Netlify
GitHub Pages

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)
AI Tools Used (Optional – For Transparency Bonus)
Tool Used: ChatGPT
Purpose:
Guidance for integrating React with Firebase Authentication
Assistance with Firestore CRUD operations (addDoc, getDocs, updateDoc, deleteDoc)
Debugging async behavior and state updates in React
Structuring components and improving code readability
Writing project documentation and architecture explanations
Clarifying concepts related to authentication flow and data modeling

KEY PROMPTS USED:
 How to fetch and display Firestore documents in React using useEffect?”
“How to update a Firestore document when a task is accepted?”
“Why is my Firebase async function not updating state correctly?”
“How to implement a search filter in React?”
“How to structure a React app with multiple pages without React Router?”
“Help me debug this Firebase permission error.”

AI was used mainly for:
Approximately 25–35%
Understanding Firebase integration
Debugging errors
Structuring components
Improving code clarity
Writing documentation

 Human Contributions
Designed overall system architecture (React + Firebase)
Implemented core business logic (post, accept, update tasks)
Integrated Firebase Authentication and Firestore
Tested multi-user flows and real-time updates
Designed UI layout and user experience decisions

AI Usage Transparency
AI was used for code refinement, debugging, styling improvements, and documentation support.
All architecture decisions, core logic, and integrations were implemented and validated manually.

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
