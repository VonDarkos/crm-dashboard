
import type { ReactNode } from "react";
import Header from "./Header";

type MainLayoutProps = {
    children: ReactNode   
}

export default function MainLayout({children}:MainLayoutProps) {
  return (
    <div className="app-layout">
        <Header/>
        <main className="app-main">
            {children}
        </main>

    </div>
  )
}
