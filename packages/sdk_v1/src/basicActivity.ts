export type UserProps = {
  email?: string;
  name?: string;
  [key: string]: any;
};

export class ActivitySDK {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string, apiUrl = "https://my-render-api.com") {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  trackUserSignup(userId: string, userProps?: UserProps) {
    this.sendEvent("user_signup", {
      userId,
      userProps,
    });
  }

  private async sendEvent(eventType: string, payload: object) {
    await fetch(`${this.apiUrl}/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        eventType,
        timestamp: new Date().toISOString(),
        ...payload,
      }),
    });
  }
}
