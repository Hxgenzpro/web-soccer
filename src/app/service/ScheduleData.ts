import { Schedule } from "src/interface/schedule";
import { Team } from "src/interface/team";

export const SEASON_SCHEDULE:Schedule [] = [
    {id: 1, Playingdate: new Date(2021,8,10),HomeTeam: 'Manchester United FC',
    AwayTeam: 'Liverpool',HomeScore:2, AwayScore:1,
    RefName:'Riot Games',notes:'Pertandingan overtime'},
    {id: 2, Playingdate: new Date(2021,8,11),HomeTeam: 'Arsenal FC',
    AwayTeam: 'Chelsea FC',HomeScore:0 , AwayScore:2,
    RefName: 'Riot Games',notes:'Pertandingan melelahkan'},
    {id: 3, Playingdate: new Date(2021,8,12),HomeTeam: 'Juventus',
    AwayTeam: 'Milan',HomeScore:2 , AwayScore:1,
    RefName: 'Riot Games',notes:'Pertandingannya agak aneh'},
    {id: 4, Playingdate: new Date(2021,8,13),HomeTeam: 'Bayern Munich',
    AwayTeam: 'Persija',HomeScore:2 , AwayScore:0,
    RefName: 'Riot Games',notes:'Pertandingan dimenangkan persipon'},
    {id: 5, Playingdate: new Date(2021,8,14),HomeTeam: 'Barcelona',
    AwayTeam: 'Real Madrid',HomeScore:0 , AwayScore:2,
    RefName: 'Riot Games',notes:'Pertandingan overtime'},
]

export const TEAMS: Team [] = [
    {id:1, name:'Liverpool', type: 'Over 30'},
    {id:2, name:'Arsenal FC', type: 'Over 30'},
    {id:3, name:'Chelsea FC', type: 'Over 30'},
    {id:4, name:'Bayern Munich', type: 'Over 30'},
    {id:5, name:'Real Madrid', type: 'Over 30'},
]
