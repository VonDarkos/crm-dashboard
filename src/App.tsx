import MainLayout from "./components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import OrdersPage from "./pages/OrdersPage";
import NotFoundPage from "./pages/NotFoundPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";

export default function App() {
  return (
     <MainLayout>
      <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/customers" element={<CustomersPage/>} />
          <Route path="/customers/:id" element={<CustomerDetailPage/>}/>
          <Route path="/orders" element={<OrdersPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      
     </MainLayout>
  )
}
