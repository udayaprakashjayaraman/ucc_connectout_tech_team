<template>

  <h1>JobPost DataBase</h1>

  <table border="1px">
    <thead>
      <tr>
        <th>Name</th>
      
        <th>Company</th>
  
      
        <th>Emp id</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in jobs"  v-bind:key="item.id">
        <td>{{ item.name }}</td>
    
        <td>{{ item.company }}</td>
      
      
        <td>{{ item.empID}}</td>

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
    axios.get('http://localhost:3000/postjob')
    .then((resp) => {
                console.log("resp");
                this.jobs = resp.data;
            })
  }
}
</script>