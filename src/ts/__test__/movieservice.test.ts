//*****************************************************************************************
//------------------------------ Imports and global stuffs---------------------------------
//*****************************************************************************************

import { getData } from '../services/movieservice';
import { IMovie } from '../models/Movie';
import { moviesTestData } from '../services/__mocks__/movieservice';

//*****************************************************************************************
//-------------------------------------- mock axios ---------------------------------------
//*****************************************************************************************

jest.mock('axios', () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
            if(url.endsWith('error')) {
                reject({ data: [], status: 500 });
            } else {
                resolve({ data: { Search: moviesTestData }, status: 200 })
            }
        });
    }
}));

//*****************************************************************************************
//---------------------------------------- getData ----------------------------------------
//*****************************************************************************************

test('Should get data correctly', async () => {
    let data = await getData('any data');

    expect(data.length).toBe(3)
    expect(data[1].Title).toBe('Movie2')
});

test('Should get error getting data', async () => {
    let data = await getData('error');
    
    expect(data.length).toBe(0)
});