import './Content.css';
import React from 'react';
import { Dropdown, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Selection = ({
    expanded,
    handleSearch,
    searchQuery,
    handleSeasonSelect,
    handleLeagueSelect,
    filteredLeagues,
    handleTime,
    time,
    league,
    season,
}) => {
    return (
        <div className="row selection">
            {expanded ? (
                <>
                    <div className="col-1">
                        <Button
                            className="w-100 h-100"
                            variant={time === 'current' ? 'success' : 'light'}
                            onClick={() => handleTime('current')}
                        >
                            Today
                        </Button>
                    </div>

                    <div className="col-2">
                        <Button
                            className="w-100 h-100"
                            variant={time === 'scheduled' ? 'success' : 'light'}
                            onClick={() => handleTime('scheduled')}
                            checked={time === 'scheduled'}
                        >
                            Upcoming
                        </Button>
                    </div>

                    <div className="col-1 ">
                        <Button
                            className="w-100 h-100"
                            variant={time === 'past' ? 'success' : 'light'}
                            onClick={() => handleTime('past')}
                            checked={time === 'scheduled'}
                        >
                            Past
                        </Button>
                    </div>
                </>
            ) : (
                <> </>
            )}

            <div className="col-2">
                <Dropdown size="sm">
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="w-100"
                    >
                        {season}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2024')}
                        >
                            2024
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2023')}
                        >
                            2023
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2022')}
                        >
                            2022
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2021')}
                        >
                            2021
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2020')}
                        >
                            2020
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2019')}
                        >
                            2019
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2018')}
                        >
                            2018
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2017')}
                        >
                            2017
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2016')}
                        >
                            2016
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2015')}
                        >
                            2015
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2014')}
                        >
                            2014
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2013')}
                        >
                            2013
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2012')}
                        >
                            2012
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleSeasonSelect('2011')}
                        >
                            2011
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="col dropdown-form">
                <Dropdown className="white" size="sm">
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="w-100"
                    >
                        {league.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                        <FormControl
                            autoFocus
                            placeholder="Search for a league"
                            onChange={handleSearch}
                            value={searchQuery}
                        />
                        {filteredLeagues.map((league) => (
                            <Dropdown.Item
                                key={league.id}
                                onClick={() => handleLeagueSelect(league)}
                            >
                                {league.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

Selection.propTypes = {
    expanded: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    handleSeasonSelect: PropTypes.func.isRequired,
    handleLeagueSelect: PropTypes.func.isRequired,
    filteredLeagues: PropTypes.array.isRequired,
    handleTime: PropTypes.func.isRequired,
    time: PropTypes.string.isRequired,
    league: PropTypes.object.isRequired,
    season: PropTypes.string.isRequired,
};

export default Selection;
