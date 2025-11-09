import type { Subscription } from "../../data/mock-data";
import "./SubscriptionCard.css";

type Props = {
    subscription: Subscription;
    onCancel: (id: string) => void;
};

function formatPrice(value: number, currency: string) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 2,
    }).format(value);
}

function formatDate(iso: string) {
    const date = new Date(iso);
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    }).format(date);
}

export default function SubscriptionCard({ subscription, onCancel }: Props) {
    const { offerTitle, status, price, currency, nextPaymentDate, id } = subscription;
    const isCancelled = status === "cancelled";

    return (
        <div className="card" aria-labelledby={`title-${id}`}>
            <header className="card__header">
                <h2 id={`title-${id}`} className="card__title">
                    {offerTitle}
                </h2>
                <span
                    className={`badge ${isCancelled ? "badge--cancelled" : "badge--active"}`}
                >
                    {isCancelled ? "Cancelled" : "Active"}
                </span>
            </header>

            <div className="card__row">
                <span className="label">Price</span>
                <span className="value">{formatPrice(price, currency)}</span>
            </div>

            <div className="card__row">
                <span className="label">Next payment</span>
                <span className="value">{formatDate(nextPaymentDate)}</span>
            </div>

            <button
                className="cancel-btn"
                disabled={isCancelled}
                onClick={() => onCancel(id)}
            >
                {isCancelled ? "Cancelled" : "Cancel subscription"}
            </button>
        </div>
    );
}
