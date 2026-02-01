import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Target the main scrollable container in the Layout
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.scrollTo(0, 0);
        }
        // Also reset window just in case
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
