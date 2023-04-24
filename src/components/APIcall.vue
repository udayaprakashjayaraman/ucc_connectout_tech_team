<template> 
    <div>
      <h1>Random User List</h1>
      <table>
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.login.uuid">
            <td><img :src="user.picture.thumbnail" alt="user thumbnail"></td>
            <td>{{ user.name.first }} {{ user.name.last }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.location.city }}, {{ user.location.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      }
    },
    mounted() {
      fetch('https://randomuser.me/api/?results=9')
        .then(response => response.json())
        .then(data => {
          this.users = data.results;
        })
    }
  }
  </script>
  
  <style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    color: #444;
  }
  </style>
  