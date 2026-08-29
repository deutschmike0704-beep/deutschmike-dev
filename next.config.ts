import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Next.js liefert die RSC-Hydration-Payload als inline <script>self.__next_f.push(...)</script>
// ohne Nonce (statische Seite, kein Proxy) — daher 'unsafe-inline' im script-src nötig,
// siehe next/dist/docs/01-app/02-guides/content-security-policy.md ("Without Nonces").
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader.replace(/\n/g, "") },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
