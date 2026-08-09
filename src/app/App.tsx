import { Header } from "@/common/components/header/Header.tsx";
import { Routing } from "@/common/routing/Routing.tsx";
import { Footer } from "@/common/components/footer/Footer.tsx";
import s from "./app.module.css";

export const App = () => {
    return (
        <div className={s.app}>
            <Header />
            <main className={s.main}>
                <Routing />
            </main>
            <Footer />
        </div>
    );
};
