/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // Add the hostname of your Supabase URL here
            // For example, if your URL is https://xyz.supabase.co, the hostname is 'xyz.supabase.co'
            {
                protocol: 'https',
                hostname: 'rhhcfxbilcmhjgoljcwm.supabase.co', // IMPORTANT: Replace with your Supabase project hostname
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            }
        ],
    },
};

export default nextConfig;