import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginForm from "./pages/auth/login";
import { AuthProvider } from "./components/AuthContext";
import RegisterForm from "./pages/auth/Register";
import Footer from "./components/Footer";
import { Services } from "./pages/Services";
import BookDetails from "./pages/BookDetails";
import Contactus from "./pages/Contactus";
import PublisherDashboard from "./pages/PublisherDashboard";
import BookUploadForm from "./components/BookUploadForm";
import NotificationPage from "./components/Notification";
import ViewMyBooks from "./components/ViewMyBooks";
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/AboutUs";
import Search from "./pages/Search";
import PdfReview from "./components/PdfReview";
import ReviewerDashboard from "./pages/ReviewerDashboard";
import ViewMyReview from "./components/ViewMyReview";
import TranslaterDashboard from "./pages/TranslaterDashboard";
import ViewMyTranslation from "./components/ViewMyTranslation";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/publisherdashboard" element={<PublisherDashboard />} />
          <Route path="/publish-book" element={<BookUploadForm />} />
          <Route path="/view-my-books" element={<ViewMyBooks />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/bookdetials/:id" element={<BookDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/review-book" element={<PdfReview />} />

          <Route path="/reviewerdashboard" element={<ReviewerDashboard />} />
          <Route path="/view-my-reviews" element={<ViewMyReview />} />

          <Route path="/translatorsdashboard" element={<TranslaterDashboard />} />
          <Route path="/my-translations" element={<ViewMyTranslation />} />
          <Route path="/translation-book" element={<PdfReview />} />

        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
