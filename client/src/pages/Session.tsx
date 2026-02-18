import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function Session() {
    const { sessionId } = useParams();

    return (
        <Layout title="Active Session">
            <div className="rounded border p-4">
                <div className="text-sm text-gray-600">Session ID</div>
                <div className="font-mono">{sessionId}</div>

                <p className="mt-4 text-sm text-gray-600">
                    Placeholder. Later: runtime status, artifacts, hints, reset, and verification.
                </p>
            </div>
        </Layout>
    );
}
