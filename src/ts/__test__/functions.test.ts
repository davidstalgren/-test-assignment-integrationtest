//*****************************************************************************************
//------------------------------ Imports and global stuffs---------------------------------
//*****************************************************************************************

import { movieSort } from '../functions';
import { IMovie } from '../models/Movie';

//*****************************************************************************************
//--------------------------------------- movieSort ---------------------------------------
//*****************************************************************************************

describe("movieSort", () => {
    test("Should 'return -1' if desc is true", () => {
        //Arrange
        let moviesTestData: IMovie[] = [
            {
                Title: 'Movie_C',
                imdbID: '123',
                Type: 'MovieType_C',
                Poster: 'url',
                Year: '2000',
            },
            {
                Title: 'Movie_B',
                imdbID: '234',
                Type: 'MovieType_B',
                Poster: 'url',
                Year: '2001',
            },
            {
                Title: 'Movie_A',
                imdbID: '345',
                Type: 'MovieType_A',
                Poster: 'url',
                Year: '2002',
            }
        ];
        //Act
        let result = movieSort(moviesTestData, true)
        //Assert
        expect(result[0].Title).toBe('Movie_A');
        expect(result[1].Title).toBe('Movie_B');
        expect(result[2].Title).toBe('Movie_C');
    });

    test("Should 'return -1' if desc is true even if true is not given", () => {
        //Arrange
        let moviesTestData: IMovie[] = [
            {
                Title: 'Movie_C',
                imdbID: '123',
                Type: 'MovieType_C',
                Poster: 'url',
                Year: '2000',
            },
            {
                Title: 'Movie_B',
                imdbID: '234',
                Type: 'MovieType_B',
                Poster: 'url',
                Year: '2001',
            },
            {
                Title: 'Movie_A',
                imdbID: '345',
                Type: 'MovieType_A',
                Poster: 'url',
                Year: '2002',
            }
        ];
        //Act
        let result = movieSort(moviesTestData)
        //Assert
        expect(result[0].Title).toBe('Movie_A');
        expect(result[1].Title).toBe('Movie_B');
        expect(result[2].Title).toBe('Movie_C');
    });

    test("Should 'return 1' if desc is true", () => {
        //Arrange
        let moviesTestData: IMovie[] = [
            {
                Title: 'Movie_A',
                imdbID: '123',
                Type: 'MovieType_A',
                Poster: 'url',
                Year: '2000',
            },
            {
                Title: 'Movie_B',
                imdbID: '234',
                Type: 'MovieType_B',
                Poster: 'url',
                Year: '2001',
            },
            {
                Title: 'Movie_C',
                imdbID: '345',
                Type: 'MovieType_C',
                Poster: 'url',
                Year: '2002',
            }
        ];
        //Act
        let result = movieSort(moviesTestData, true)
        //Assert
        expect(result[0].Title).toBe('Movie_A');
        expect(result[1].Title).toBe('Movie_B');
        expect(result[2].Title).toBe('Movie_C');
    });

    test("Should 'return 0' if desc is true", () => {
        //Arrange
        let moviesTestData: IMovie[] = [
            {
                Title: 'Movie_A',
                imdbID: '123',
                Type: 'MovieType_A',
                Poster: 'url',
                Year: '2000',
            },
            {
                Title: 'Movie_A',
                imdbID: '234',
                Type: 'MovieType_B',
                Poster: 'url',
                Year: '2001',
            },
            {
                Title: 'Movie_A',
                imdbID: '345',
                Type: 'MovieType_C',
                Poster: 'url',
                Year: '2002',
            }
        ];
        //Act
        let result = movieSort(moviesTestData, true)
        //Assert
        expect(result[0].Title).toBe('Movie_A');
        expect(result[1].Title).toBe('Movie_A');
        expect(result[2].Title).toBe('Movie_A');
        expect(result[1].Type).toBe('MovieType_B');
        expect(result[2].Type).toBe('MovieType_C');
    });

    test("Should 'return -1' if desc is false", () => {
        //Arrange
        let moviesTestData: IMovie[] = [
            {
                Title: 'Movie_A',
                imdbID: '123',
                Type: 'MovieType_A',
                Poster: 'url',
                Year: '2000',
            },
            {
                Title: 'Movie_B',
                imdbID: '234',
                Type: 'MovieType_B',
                Poster: 'url',
                Year: '2001',
            },
            {
                Title: 'Movie_C',
                imdbID: '345',
                Type: 'MovieType_C',
                Poster: 'url',
                Year: '2002',
            }
        ];
        //Act
        let result = movieSort(moviesTestData, false)
        //Assert
        expect(result[0].Title).toBe('Movie_C');
        expect(result[1].Title).toBe('Movie_B');
        expect(result[2].Title).toBe('Movie_A');
    });

    test("Should 'return 1' if desc is false", () => {
        //Arrange
        let moviesTestData: IMovie[] = [
            {
                Title: 'Movie_C',
                imdbID: '123',
                Type: 'MovieType_C',
                Poster: 'url',
                Year: '2000',
            },
            {
                Title: 'Movie_B',
                imdbID: '234',
                Type: 'MovieType_B',
                Poster: 'url',
                Year: '2001',
            },
            {
                Title: 'Movie_A',
                imdbID: '345',
                Type: 'MovieType_A',
                Poster: 'url',
                Year: '2002',
            }
        ];
        //Act
        let result = movieSort(moviesTestData, false)
        //Assert
        expect(result[0].Title).toBe('Movie_C');
        expect(result[1].Title).toBe('Movie_B');
        expect(result[2].Title).toBe('Movie_A');
    });

    test("Should 'return 0' if desc is false", () => {
        //Arrange
        let moviesTestData: IMovie[] = [
            {
                Title: 'Movie_C',
                imdbID: '123',
                Type: 'MovieType_C',
                Poster: 'url',
                Year: '2000',
            },
            {
                Title: 'Movie_C',
                imdbID: '234',
                Type: 'MovieType_B',
                Poster: 'url',
                Year: '2001',
            },
            {
                Title: 'Movie_C',
                imdbID: '345',
                Type: 'MovieType_A',
                Poster: 'url',
                Year: '2002',
            }
        ];
        //Act
        let result = movieSort(moviesTestData, false)
        //Assert
        expect(result[0].Title).toBe('Movie_C');
        expect(result[1].Title).toBe('Movie_C');
        expect(result[2].Title).toBe('Movie_C');
        expect(result[1].Type).toBe('MovieType_B');
        expect(result[2].Type).toBe('MovieType_A');
    });
});
