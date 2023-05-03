<template>

  <h1>JobPost DataBase</h1>

  <table border="1px">
    <thead>
      <tr>

        <th>Name</th>
      
        <th>Company</th>
  
        <th>location</th>

        <th>Age</th>

        <th>Salary</th>

        <th>Employee ID</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="item in jobs"  v-bind:key="item.id">

        <td>{{ item.name }}</td>
    
        <td>{{ item.company }}</td>
      
        <td>{{ item.location}}</td>

        <td>{{ item.age }}</td>

        <td>{{ item.salary }}</td>

        <td>{{ item.employeeid }}</td>

      </tr>
    </tbody>

  </table>
</template>

<script>
import axios from 'axios'

export default{
  name:'App',
  data(){
    return{
      jobs:[]
     
    }

  },
  mounted(){
    axios.get('http://localhost:4400/postjob')
    .then((resp) => {
                console.log("resp");
                this.jobs = resp.data;
            })
  }
}
</script>