/**
 * @jest-environment jsdom
 */

//*****************************************************************************************
//------------------------------ Imports and global stuffs---------------------------------
//*****************************************************************************************

import { IMovie } from '../models/Movie';
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

describe("handleSubmit", () => {
  test("Should call function createHtml properly", async () => {
    //Arrange
    document.body.innerHTML = `
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;

    let spyOnCreateHtml = jest.spyOn(movieApp, 'createHtml').mockReturnValue();
    (document.querySelector("#searchText") as HTMLInputElement).value = 'Movie1';
    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

    //Act
    await movieApp.handleSubmit()
      
    //Assert
    expect(spyOnCreateHtml).toHaveBeenCalledTimes(1);
    spyOnCreateHtml.mockRestore();
  });

  test("Should call function displayNoResult in else properly", async () => {
    //Arrange
    document.body.innerHTML = `
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;

    let spyOnDisplayNoResult = jest.spyOn(movieApp, 'displayNoResult').mockReturnValue();
    (document.querySelector("#searchText") as HTMLInputElement).value = '';
    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

    //Act
    await movieApp.handleSubmit()
      
    //Assert
    expect(spyOnDisplayNoResult).toHaveBeenCalledTimes(1);
    spyOnDisplayNoResult.mockRestore();
  });

  test("Should call function displayNoResult in catch properly", async () => {
    //Arrange
    document.body.innerHTML = `
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;

    let spyOnDisplayNoResult = jest.spyOn(movieApp, 'displayNoResult').mockReturnValue();
    (document.querySelector("#searchText") as HTMLInputElement).value = 'error';
    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

    //Act
    await movieApp.handleSubmit()
      
    //Assert
    expect(spyOnDisplayNoResult).toHaveBeenCalledTimes(1);
    spyOnDisplayNoResult.mockRestore();
  });
});

//*****************************************************************************************
//-------------------------------------- createHtml ---------------------------------------
//*****************************************************************************************

describe("createHtml", () => {
    test("Should create HTML with movies", () => {
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