import "./Livescore.css";
import axios from "axios";
import React, { useEffect, useState, useContext} from 'react';
import { Dropdown, Container, FormControl,Button} from 'react-bootstrap';
import { LeagueContext } from '../../utils/leaguecontext.js';
import Selection from '../Content/Selection.js';

const Content = ({
    type,
    league,
    season,
    time,
}) => {

    const [cont, setCont] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            
            let url = '';
            let params = {};

            if(type === 'livescore'){
                url = '/api/fixtures';
                params = {
                    league: league.id,
                    season: season,
                    time: time,
                };
            } else if (type === 'standings'){
                url = '/api/standings';
                params = {
                    league: league.id,
                    season: season,
                };
            } else if (type === 'topscorers'){
                url = '/api/topscorers';
                params = {
                    league: league.id,
                    season: season,
                };
            }

            try {
                const response = await axios.get(url, {
                    params: params,
                });

                setCont(response.data);
            } catch (err) {
                console.log(err);
            }
  
        };
    });

    return (

        <div className = "fixtures-box overflow-auto">		
            <div className="header-box p-5">
                <div className="league-logo">
                    <img src={`https://media.api-sports.io/football/leagues/${league.id}.png`} alt="League Logo" />
                </div>
            </div>

            {type === 'livescore' && (
                <>
                    <div className="row p-3 fw-bold fixture-labels" align="center">
                        <div className="col-1">Home</div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1">Away</div>
                        <div className="col-2">Date</div>
                        <div className="col-2">Stadium</div>
                        <div className="col-2">Referee</div>
                        <div className="col-1">Status</div>
                        <div className="col-1">Statistics</div>
                    </div>

                    {content.map((match) => (
                        <div key={match.fixture.id} className="row p-3 fw-bold fixture-labels" align="center">
                            <div className="col-1">
                                <div className="fixture-teams">
                                    <img src={match.teams.home.logo} alt="Home Team Logo" />
                                </div>
                            </div>
                            <div className="col-1 h4">{match.goals.home}</div>
                            <div className="col-1 h4">{match.goals.away}</div>
                            <div className="col-1">
                                <div className="fixture-teams">
                                    <img src={match.teams.away.logo} alt="Away Team Logo" />
                                </div>
                            </div>
                            <div className="col-2">{match.fixture.date}</div>
                            <div className="col-2">{match.fixture.venue.name}</div>
                            <div className="col-2">{match.fixture.referee}</div>
                            <div className="col-1">{match.fixture.status.short}</div>
                            <div className="col-1">
                                <Button variant="success" size="sm">
                                    Stats
                                </Button>
                            </div>
                        </div>
                    ))}
                </>
            )}

            {type === 'standings' && (
                <div className="row p-3 fw-bold labels">
                    <div className="col-1">#</div>
                    <div className="col-1">Team</div>
                    <div className="col-1">Points</div>
                    <div className="col-1">W</div>
                    <div className="col-1">D</div>
                    <div className="col-1">L</div>
                    <div className="col-1">Goals</div>
                    <div className="col-1">Goals Conceded</div>
                    <div className="col-1">GD</div>
                    <div className="col-1">Matches Played</div>
                    <div className="col-2" align="center">Form</div>
                </div>
            )}

            {type === 'standings' && content.map((rank, index) => (
                <div key={rank.team.id} className="row p-3 entry">
                    <div className="col-1 fw-bold">{index + 1}</div>
                    <div className="col-1 team-logo picture">
                        <img src={rank.team.logo} alt={rank.team.name} />
                    </div>
                    <div className="col-1">{rank.points}</div>
                    <div className="col-1">{rank.all.win}</div>
                    <div className="col-1">{rank.all.draw}</div>
                    <div className="col-1">{rank.all.lose}</div>
                    <div className="col-1">{rank.all.goals.for}</div>
                    <div className="col-1">{rank.all.goals.against}</div>
                    <div className="col-1">{rank.goalsDiff}</div>
                    <div className="col-1">{rank.all.played}</div>
                    <div className="col-2" align="center">{rank.form}</div>
                </div>
            ))}

            {type === 'topscorers' && content.map((scorer, index) => (
                <div key={index} className="row h-25 p-3">
                    <div className="col-2">
                        <div className="picture">
                            <img src={scorer.player.photo} alt={scorer.player.name} />
                        </div>
                    </div>
                    <div className="col-2 player-name">
                        <div className="text-black fw-bold">
                            {scorer.player.name}
                        </div>
                        <pre>
                            <div className="text-black mt-4">Age: {scorer.player.age}</div>
                            <div className="text-black">Goals: {scorer.statistics[0].goals.total}</div>
                            <div className="text-black">Assists: {scorer.statistics[0].goals.assists}</div>
                        </pre>
                    </div>
                    <div className="col-2">
                        <div className="text-black fw-bold">Attributes</div>
                        <pre>
                            <div className="text-black mt-4">Position: {scorer.statistics[0].games.position}</div>
                            <div className="text-black">Height: {scorer.player.height}</div>
                            <div className="text-black">Weight: {scorer.player.weight}</div>
                        </pre>
                    </div>
                    <div className="col-2">
                        <div className="text-black fw-bold">Statistics</div>
                        <pre>
                            <div className="text-black mt-4">Appearances: {scorer.statistics[0].games.appearences}</div>
                            <div className="text-black">Minutes Played: {scorer.statistics[0].games.minutes}</div>
                            <div className="text-black">Nationality: {scorer.player.nationality}</div>
                        </pre>
                    </div>
                    <div className="col team">
                        <img src={scorer.statistics[0].team.logo} alt={scorer.statistics[0].team.name} />
                    </div>
                    <div className="col flag">
                        <img src={scorer.statistics[0].league.logo} alt={scorer.statistics[0].team.name} />
                    </div>
                </div>
            ))}

        </div>

    );

}

export default Content;