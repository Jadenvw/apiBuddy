const PLATFORM_BASE_URL =
    import.meta.env.VITE_PLATFORM_BASE_URL ?? "http://localhost:3001";

export async function fetchHealth() {
    const res = await fetch(`${PLATFORM_BASE_URL}/health`, {
        method: "GET",
    });

    if (!res.ok) {
        throw new Error(`Health check failed: ${res.status}`);
    }

    return (await res.json()) as { ok: boolean };
}
