/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                // hostname: 'firebasestorage.googleapis.com',
                hostname: '**'
            },
        ],
    }
};

export default nextConfig;
