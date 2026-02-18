import { Link } from "react-router-dom";

type LayoutProps = {
    title: string;
    children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
    return (
        <div className="min-h-screen">
            <header className="border-b">
                <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
                    <Link to="/labs" className="text-sm font-semibold">
                        apiBuddy
                    </Link>
                    <nav className="flex items-center gap-4 text-sm">
                        <Link className="underline" to="/labs">
                            Labs
                        </Link>
                        <Link className="underline" to="/login">
                            Login
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-4xl p-6">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div className="mt-6">{children}</div>
            </main>
        </div>
    );
}
