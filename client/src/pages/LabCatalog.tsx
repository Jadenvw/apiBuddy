import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "../components/Layout";
import { fetchHealth } from "../api/platform";

const MOCK_LABS = [
    { id: "lab-001", title: "Broken REST Contract", estMinutes: 20 },
    { id: "lab-002", title: "Validation Missing", estMinutes: 25 },
];

export default function LabCatalog() {
    const [health, setHealth] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    async function handleHealthCheck() {
        setLoading(true);
        setError("");
        setHealth("");

        try {
            const result = await fetchHealth();
            setHealth(result.ok ? "Server OK ✅" : "Server NOT OK ❌");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Unknown error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Layout title="Lab Catalog">
            <div className="mb-6 rounded border p-4">
                <div className="flex items-center gap-3">
                    <button
                        className="rounded bg-black px-3 py-2 text-sm text-white disabled:opacity-60"
                        onClick={handleHealthCheck}
                        disabled={loading}
                    >
                        {loading ? "Checking..." : "Health Check"}
                    </button>

                    {health ? <span className="text-sm">{health}</span> : null}
                    {error ? <span className="text-sm text-red-600">{error}</span> : null}
                </div>

                <p className="mt-2 text-sm text-gray-600">
                    This verifies the client can call the Platform Server.
                </p>
            </div>

            <ul className="space-y-3">
                {MOCK_LABS.map((lab) => (
                    <li key={lab.id} className="rounded border p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium">{lab.title}</div>
                                <div className="text-sm text-gray-600">
                                    Estimated time: {lab.estMinutes} minutes
                                </div>
                            </div>
                            <Link className="text-sm underline" to={`/labs/${lab.id}`}>
                                View
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
