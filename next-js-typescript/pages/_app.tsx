import { AppProps } from 'next/app';
// import '../styles/index.css'
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
