declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_TOKEN: string;
      NEXT_PUBLIC_CONTACT_ENDPOINT: string;
      NEXT_PUBLIC_FULLSTORY_ORG_ID: string;
      NEXT_PUBLIC_LAST_UPDATED: string;
    }
  }
}

export {};
