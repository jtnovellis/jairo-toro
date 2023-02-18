const contentSecurityPolicy = `
    default-src 'none'; 
    connect-src 'self'; 
    font-src 'self'; 
    img-src 'self' https://fresh.deno.dev; 
    script-src 'self' 'unsafe-inline'; 
    style-src 'unsafe-inline' 
`;

const SecurityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

export default SecurityHeaders;
