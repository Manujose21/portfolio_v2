export const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="flex items-center justify-center">
                <p>My portfolio © { new Date().getFullYear() } </p>
            </div>
        </footer>
    );
};