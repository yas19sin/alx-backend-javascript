/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a new row element
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Insert the row and get the ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${JSON.stringify(row)}`);

// Update the row with an age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);