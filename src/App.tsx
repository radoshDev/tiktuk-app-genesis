import { Route, Routes } from "react-router"
import { Container } from "styles/Common"
import Nav from "components/Nav"
import User from "components/User"
import Trends from "components/Trends"
import Test from "test/Test"

function App() {
	return (
		<div className="App">
			<Nav />
			<Container id="main">
				<Routes>
					<Route path="/" element={<Trends />} />
					<Route path="/account/:id" element={<User />} />
					<Route path="/test" element={<Test />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
