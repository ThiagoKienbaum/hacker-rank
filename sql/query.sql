/*
    Revising the Select Query I
    Query all columns for all American cities in the CITY
    table with populations larger than 100000. The CountryCode for America is USA.
*/

SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000;

/*
    Revising the Select Query II
    Query the NAME field for all American cities in the CITY 
    table with populations larger than 120000. The CountryCode for America is USA.
*/

SELECT NAME FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000;

/*
    Select All
    Query all columns (attributes) for every row in the CITY table.
    The CITY table is described as follows:
*/

SELECT * FROM CITY;

/*
    Select By ID
    Query all columns for a city in CITY with the ID 1661.
*/

SELECT * FROM CITY WHERE ID = 1661;

/*
    Japanese Cities' Attributes
    Query all attributes of every Japanese city in the CITY table. 
    The COUNTRYCODE for Japan is JPN.
*/

SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN';

/*
    Japanese Cities' Names
    Query the names of all the Japanese cities in the CITY table. 
    The COUNTRYCODE for Japan is JPN.
*/

SELECT NAME FROM CITY WHERE COUNTRYCODE = 'JPN';

/*
    Weather Observation Station 1
    Query a list of CITY and STATE from the STATION table.
*/

SELECT CITY, STATE FROM STATION;

/*
    Weather Observation Station 3
    Query a list of CITY names from STATION for cities that have an even ID number. 
    Print the results in any order, but exclude duplicates from the answer.
*/

SELECT DISTINCT CITY FROM STATION WHERE ID % 2 == 0;

-- ANOTHER SOLUTION

SELECT CITY FROM STATION WHERE ID % 2 = 0 GROUP BY CITY;
