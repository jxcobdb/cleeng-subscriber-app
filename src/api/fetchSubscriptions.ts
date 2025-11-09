import { mockSubscriptions } from "../data/mock-data";
import type { Subscription } from "../data/mock-data";

export async function fetchSubscriptions(): Promise<Subscription[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(mockSubscriptions);
      } catch (error) {
        reject(
          new Error(error instanceof Error ? error.message : "Unknown error")
        );
      }
    }, 1000);
  });
}
