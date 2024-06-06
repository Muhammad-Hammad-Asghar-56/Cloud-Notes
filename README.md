# Cloud-Note

Cloud-Note is a web application built using React.js and Firebase that allows users to create, store, and manage their notes on the cloud. This app provides a seamless and efficient way to access your notes from anywhere, at any time, ensuring they are safely stored and easily retrievable.

## Features

- **Create Notes:** Easily create new notes with a simple and intuitive interface.
- **Edit Notes:** Modify existing notes with ease.
- **Delete Notes:** Remove notes that are no longer needed.
- **Cloud Storage:** All notes are stored securely in the cloud using Firebase.
- **Real-time Synchronization:** Changes to notes are synchronized in real-time across all your devices.
- **User Authentication:** Secure login and registration with Firebase Authentication.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Firebase (Firestore, Authentication)
- **Styling:** CSS, Material-UI

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- Firebase project set up with Firestore and Authentication enabled

## Installation

1. Clone the repository

    ```bash
    git clone https://github.com/your-username/cloud-note.git
    ```

2. Navigate to the project directory

    ```bash
    cd cloud-note
    ```

3. Install the dependencies

    ```bash
    npm install
    ```

4. Set up Firebase

    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project (or use an existing one).
    - Enable Firestore Database.
    - Enable Authentication (Email/Password or any other provider you prefer).
    - Copy your Firebase config object and replace the dummy config in `src/firebase.js`.

    ```javascript
    // src/firebase.js

    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import 'firebase/auth';

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    const auth = firebase.auth();

    export { db, auth };
    ```

5. Run the application

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Register/Login:** Create an account or log in using an existing account.
2. **Create Note:** Click on the "Add Note" button to create a new note.
3. **Edit Note:** Click on a note to edit its content.
4. **Delete Note:** Click the delete button on a note to remove it.

## Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## Contact

Your Name - [hammadasgharm@gmail.com](mailto:hammadasgharm@gmail.com)

Project Link: [https://github.com/Muhammad-Hammad-Asghar-56/cloud-notes](https://github.com/Muhammad-Hammad-Asghar-56/cloud-notes)
