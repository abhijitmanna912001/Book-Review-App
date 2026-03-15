# 📚 Book Review App

A full-stack **mobile book recommendation platform** built with **React Native (Expo)** and **Node.js**. Share, discover, and manage book reviews across a community of readers.

Users can create posts with book cover images, rate titles using a 5-star system, and explore a real-time feed of recommendations.

---

## 🚀 Features

### 🔐 Authentication

* **Secure Access:** User Signup & Login with JWT-based authentication.
* **Session Management:** Persistent login sessions and secure logout functionality.

### 📱 Cross-Platform Support

* **Android & iOS:** Full mobile compatibility via Expo.
* **Web:** Runs directly in the browser.

### 📊 Comprehensive UI

* **Home Feed:** Infinite scroll with pull-to-refresh.
* **Create Review:** Easy-to-use form with image uploading.
* **Profile:** Manage your own posts and view personal stats.
* **Polished UX:** Smooth loading indicators and custom splash screens.

### 🛠 Tech Stack

### 📱 Frontend (Mobile App)

* **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 50+)
* **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand) (Lightweight & Fast)
* **Image Handling:** [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/) & [Image Picker](https://docs.expo.dev/versions/latest/sdk/image-picker/)
* **Styling:** NativeWind / Standard StyleSheet

### ⚙️ Backend (Server)

* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) (ODM)
* **Authentication:** [JWT](https://jwt.io/) (JSON Web Tokens) & [bcryptjs](https://www.npmjs.com/package/bcryptjs)

### ☁️ Cloud Services & Infrastructure

* **Image Storage:** [Cloudinary](https://cloudinary.com/) (API-based media management)
* **Deployment:** Render (Backend) & Expo EAS (Mobile)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/abhijitmanna912001/book-review-app.git
cd book-review-app

```

### 2️⃣ Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install

```

Create a `.env` file in the `backend` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

```

Start the server:

```bash
npm run dev

```

### 3️⃣ Mobile App Setup

Navigate to the mobile folder and install dependencies:

```bash
cd mobile
npm install

```

Start the Expo development server:

```bash
npx expo start

```

*Scan the QR code with the **Expo Go** app on your phone or press **'a'** for Android / **'i'** for iOS.*

---

## 🌐 API Endpoints

### Authentication

* `POST /api/auth/signup` - Register a new user
* `POST /api/auth/login` - Authenticate user

### Books

* `GET /api/books` - Fetch all reviews (paginated)
* `GET /api/books/user` - Fetch reviews by logged-in user
* `POST /api/books` - Create a new review
* `DELETE /api/books/:id` - Remove a review

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**.

## 👨‍💻 Author

Abhijit Manna

* GitHub: [@abhijitmanna912001](https://github.com/abhijitmanna912001)

---

*If you found this project helpful, please give it a ⭐ on GitHub!*
