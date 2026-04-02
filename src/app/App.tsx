import { Header } from "@/common/components/header/Header.tsx";
import { Routing } from "@/common/routing/Routing.tsx";
import { Footer } from "@/common/components/footer/Footer.tsx";

export const App = () => {
    return (
        <>
            <Header />
            <Routing />
            <Footer />
        </>
    );
};