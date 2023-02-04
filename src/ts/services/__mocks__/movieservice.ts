import { IMovie } from "../../models/Movie";

export let moviesTestData: IMovie[] = [
    {
        Title: 'Movie1',
        imdbID: '123',
        Type: 'MovieType1',
        Poster: 'url',
        Year: '2000',
    },
    {
        Title: 'Movie2',
        imdbID: '234',
        Type: 'MovieType2',
        Poster: 'url',
        Year: '2001',
    },
    {
        Title: 'Movie3',
        imdbID: '345',
        Type: 'MovieType3',
        Poster: 'url',
        Year: '2002',
    }
];

export async function getData(searchText: string): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
        if (searchText === '') {
            resolve([]);
        } 
        if (searchText !== 'error') {
            resolve(moviesTestData);
        } else {
            reject([]);
        }
    });
};