import Head from 'next/head'
import AnswerGenerator from '../components/AnswerGenerator/AnswerGenerator'

const Home = () => (
	<React.Fragment>
		<Head>
			<title>Is Sid Meier Alive?</title>
			<link rel="icon" href="/civFavicon.jpg" />
			<link href="https://fonts.googleapis.com/css2?family=Gotu&display=swap" rel="stylesheet"/>
		</Head>

		<div className="wrapper">
			<div className="container">
				<h1 className="title">
					IS SID MEIER ALIVE?
				</h1>

				<div className="description">
					<AnswerGenerator />
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Home
