/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.nflxext.com',
                port: '', // Deixe vazio para usar a porta padrão
                pathname: '/**', // Permite todas as rotas neste domínio
            },
            ],
        },
        };

export default nextConfig;
