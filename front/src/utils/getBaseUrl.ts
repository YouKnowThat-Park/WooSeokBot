const getBaseUrl = (): string =>
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_BASE_PROD!
    : process.env.NEXT_PUBLIC_API_BASE_DEV!;

export default getBaseUrl;
