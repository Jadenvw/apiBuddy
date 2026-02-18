import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function LabOverview() {
    const { labId } = useParams();

    return (
        <Layout title="Lab Overview">
            <div className="rounded border p-4">
                <div className="text-sm text-gray-600">Lab ID</div>
                <div className="font-mono">{labId}</div>

                <div className="mt-4 text-sm text-gray-600">Description</div>
                <p className="mt-1">
                    Placeholder. Later: context, objectives, constraints, and expected behavior.
                </p>

                <div className="mt-6 flex items-center gap-4">
                    <Link className="text-sm underline" to="/labs">
                        Back to catalog
                    </Link>
                    <Link
                        className="inline-block rounded bg-black px-4 py-2 text-sm text-white"
                        to={`/session/demo-session-for-${labId}`}
                    >
                        Start (placeholder)
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
