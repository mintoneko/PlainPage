const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
  : import.meta.env.BASE_URL;

export const generateURL = (path: string, base?: string | URL) => {
  const pathname = `${BASE_URL}${path.startsWith("/") ? path : "/" + path}`;
  if (base) {
    return new URL(pathname, base);
  }
  return pathname;
};
