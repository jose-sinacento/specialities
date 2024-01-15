const express = require('express');
const app = express();

const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

const usersString = JSON.stringify(usersData);

app.get('/', (req, res) => {
  res.send(
    `<h1>Estás es la página principal</h1><a href="/">Home</a> <a href="/marketing">Marketing</a> <a href="/developers">Developers</a> <a href="/qas">QAs</a> <a href="/ventas">Ventas</a> 

    <main>${usersString}</main>`
  );
});

app.get('/marketing', (req, res) => {
  const specialty = 'marketing';
  const filteredUsers = filterUsersBySpecialty(specialty);

  res.send(
    `<h1>Estás en Marketing</h1><a href="/">Home</a> <a href="/marketing">Marketing</a> <a href="/developers">Developers</a> <a href="/qas">QAs</a> <a href="/ventas">Ventas</a>  <p>Número de personas: ${
      filteredUsers.length
    }</p>
    <main>${JSON.stringify(filteredUsers)}</main>`
  );
});

app.get('/developers', (req, res) => {
  const specialty = 'developers';
  const filteredUsers = filterUsersBySpecialty(specialty);
  res.send(
    `<h1>Estás en Developers</h1><a href="/">Home</a> <a href="/marketing">Marketing</a> <a href="/developers">Developers</a> <a href="/qas">QAs</a> <a href="/ventas">Ventas</a> <p>Número de personas: ${
      filteredUsers.length
    }</p>
    <main>${JSON.stringify(filteredUsers)}</main>`
  );
});

app.get('/qas', (req, res) => {
  const specialty = 'QAs';
  const filteredUsers = filterUsersBySpecialty(specialty);
  res.send(
    `<h1>Estás en QAs</h1><a href="/">Home</a> <a href="/marketing">Marketing</a> <a href="/developers">Developers</a> <a href="/qas">QAs</a> <a href="/ventas">Ventas</a> <p>Número de personas: ${
      filteredUsers.length
    }</p>
    <main>${JSON.stringify(filteredUsers)}</main>`
  );
});

app.get('/ventas', (req, res) => {
  const specialty = 'ventas';
  const filteredUsers = filterUsersBySpecialty(specialty);
  res.send(
    `<h1>Estás en Ventas</h1><a href="/">Home</a> <a href="/marketing">Marketing</a> <a href="/developers">Developers</a> <a href="/qas">QAs</a> <a href="/ventas">Ventas</a> <p>Número de personas: ${
      filteredUsers.length
    }</p>
    <main>${JSON.stringify(filteredUsers)}</main>`
  );
});

app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1><a href="/">home</a>');
});

app.listen(3000, () => {
  console.log('Node.js está escuchando el puerto 3000');
});

function filterUsersBySpecialty(specialty) {
  return usersData.filter((user) => user.specialty === specialty);
}