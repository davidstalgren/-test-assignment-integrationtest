//*****************************************************************************************
//------------------------------ Imports and global stuffs---------------------------------
//*****************************************************************************************

import { movieSort } from '../functions';
import { IMovie } from '../models/Movie';
import { moviesTestData } from '../services/__mocks__/movieservice';

//*****************************************************************************************
//--------------------------------------- movieSort ---------------------------------------
//*****************************************************************************************

describe("movieSort", () => {
    test("Should sort movies descending if desc is true", () => {
        //Arrange

        //Act
        let result = movieSort(moviesTestData, true)
        //Assert
        expect(result[0].Title).toBe('Movie1');
        expect(result[1].Title).toBe('Movie2');
        expect(result[2].Title).toBe('Movie3');
    });

    test("Should sort movies ascending if desc is false", () => {
        //Arrange

        //Act
        let result = movieSort(moviesTestData, false)
        //Assert
        expect(result[0].Title).toBe('Movie3');
        expect(result[1].Title).toBe('Movie2');
        expect(result[2].Title).toBe('Movie1');
    });
});
