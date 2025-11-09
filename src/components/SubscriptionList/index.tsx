import { useEffect, useState } from "react";
import { fetchSubscriptions } from "../../api/fetchSubscriptions";
import type { Subscription } from "../../data/mock-data";
import SubscriptionCard from "./../SubscriptionCard";
import "./SubscriptionList.css";

export default function SubscriptionsList() {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        async function load() {
            try {
                setLoading(true);
                const data = await fetchSubscriptions();
                if (mounted) setSubscriptions(data);
            } catch (err) {
                if (mounted) setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                if (mounted) setLoading(false);
            }
        }

        let mounted = true;
        load();
        return () => {
            mounted = false;
        };

    }, []);

    const handleCancel = (id: string) => {
        setSubscriptions((prev) =>
            prev.map((sub) =>
                sub.id === id ? { ...sub, status: "cancelled" } : sub
            )
        );
    };

    if (loading) return <p className="state state-loading">Loading...</p>;
    if (error) return <p className="state state-error">{error}</p>;
    if (!subscriptions.length) return <p className="state">No subscriptions found.</p>;

    return (
        <section className="grid">
            {subscriptions.map((sub) => (
                <SubscriptionCard
                    key={sub.id}
                    subscription={sub}
                    onCancel={handleCancel}
                />
            ))}
        </section>
    );
}
