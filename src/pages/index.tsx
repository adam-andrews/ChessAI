import Head from 'next/head';
import Image from 'next/image';
import Chessboard from '../components/Chessboard';

export default function Home() {
	return (
		<div className="">
			<Chessboard />
		</div>
	);
}
