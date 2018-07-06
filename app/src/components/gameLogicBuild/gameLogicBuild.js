import React, { Component } from 'react';
import MatchCards from '../matchCards';
import paintings from "../../paintings.json";
import "./gameLogicBuild.css";

class GameLogicBuild extends Component {
	state = {
		paintings,
		message: "Click one of the logos to begin!",
		score: 0,
		topScore: 0
	};
	
	handleClick = (id, clicked) => {

		const paintingsArray = this.state.paintings;

		if (clicked) {
			paintingsArray.forEach((painting, index) => {
				paintingsArray[index].clicked = false;
			});
			return this.setState({
				painting: paintingsArray.sort(() => Math.random() - 0.5),
				message: "You Guessed Incorrectly!",
				score: 0
			})
		}
		else {
			paintingsArray.forEach((painting, index) => {
				if (id === painting.id) {
					paintingsArray[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				painting: paintingsArray.sort(() => Math.random() - 0.5),
				message: "You Guessed Correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.paintings.map(painting => (
						<MatchCards
							key={painting.id}
							id={painting.id}
							name={painting.name}
							clicked={painting.clicked}
							painting={painting.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
					
				</div>
			</div>
		);
	}
};

export default GameLogicBuild
