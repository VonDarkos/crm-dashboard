
import "./Header.css"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <header className="header">
  <Link to="/" className="header-brand">
    <img
      src="/icons/logo-dashboard.jpg"
      alt="CRM Dashboard logo"
      className="header-logo"
    />
  </Link>

  <nav className="header-nav">
    <Link to="/">Dashboard</Link>
    <Link to="/customers">Customers</Link>
    <Link to="/orders">Orders</Link>
  </nav>
</header>
  )
}
