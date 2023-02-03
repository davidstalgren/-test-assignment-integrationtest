/**
 * @jest-environment jsdom
 */

//*****************************************************************************************
//------------------------------ Imports and global stuffs---------------------------------
//*****************************************************************************************

import { IMovie } from '../models/Movie';
import { getData } from '../services/movieservice';
import * as movieApp from '../movieApp';

beforeEach(() => {
	document.body.innerHTML = '';
})

jest.mock('../services/movieservice');

//*****************************************************************************************
//----------------------------------------- init -----------------------------------------
//*****************************************************************************************

describe("init", () => {
    test("Should call function handleSubmit properly if submitevent is triggered", () => {
      //Arrange
      document.body.innerHTML = `
      <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form>
      `;
      let spyOnHandleSubmit = jest.spyOn(movieApp, "handleSubmit")
            .mockReturnValue(new Promise<void>((resolve)=> {
                resolve();
            })
        );  
  
      //Act
      movieApp.init();
      (document.getElementById('searchForm') as HTMLFormElement).submit();
  
      //Assert
      expect(spyOnHandleSubmit).toHaveBeenCalledTimes(1);
      spyOnHandleSubmit.mockRestore();
    });
  });

//*****************************************************************************************
//------------------------------------- handleSubmit --------------------------------------
//*****************************************************************************************

//*****************************************************************************************
//-------------------------------------- createHtml ---------------------------------------
//*****************************************************************************************

describe("createHtml", () => {
    test("Should call function handleSubmit properly if submitevent is triggered", () => {
      //Arrange
      document.body.innerHTML = `
      <div id="movie-container"></div>
      `;
      let movies: IMovie[] = [
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
        }
      ];

      let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;
  
      //Act
      movieApp.createHtml(movies, container)
        
      //Assert
      expect(movies[0].Title).toBe('Movie1');
      expect(movies[1].Year).toBe('2001');
    });
  });

//*****************************************************************************************
//----------------------------------- displayNoResult -------------------------------------
//*****************************************************************************************

test("Should generate an error message", () => {
    //Arrange
    document.body.innerHTML = `
    <div id="movie-container"></div>
    `;
    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

    //Act
    movieApp.displayNoResult(container)

    //Assert
    let paragraph: HTMLParagraphElement = document.querySelector('p') as HTMLParagraphElement;
    expect(paragraph.innerHTML).toMatch('Inga sökresultat att visa')
});