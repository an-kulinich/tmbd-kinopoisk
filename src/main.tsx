import { createRoot } from 'react-dom/client'
import { App } from './app/App.tsx'
import {BrowserRouter} from "react-router"
import {Provider} from "react-redux"
import {store} from "./app/store.ts"
import { AppThemeProvider } from "@/app/AppThemeProvider.tsx"

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename="/">
        <Provider store={store}>
            <AppThemeProvider>
                <App />
            </AppThemeProvider>
        </Provider>
    </BrowserRouter>,
)
