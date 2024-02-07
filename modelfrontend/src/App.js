import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ChatSection from "./components/ChatSection";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<ChatSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
