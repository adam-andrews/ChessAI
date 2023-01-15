import Head from 'next/head';
import Image from 'next/image';
import ChessGame from '../components/ChessGame';

export default function Home() {
	return (
		<div className="">
			<ChessGame />
		</div>
	);
}
