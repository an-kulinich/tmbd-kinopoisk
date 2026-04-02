import { Header } from "@/common/components/header/Header.tsx";
import { Routing } from "@/common/routing/Routing.tsx";
import { Footer } from "@/common/components/footer/Footer.tsx";
import s from "./App.module.css";

export const App = () => {
    return (
        <div className={s.app_container}>
            <Header />
            <main className={s.main_content}>
                <Routing />
            </main>
            <Footer />
        </div>
    );
};