import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ChatSection from "./components/ChatSection";
import PastConversation from "./pages/PastConversation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ChatSection />} />
        </Route>
        <Route path="/pastconversation" element={<PastConversation />} />
      </Routes>
    </BrowserRouter>
  );
}
