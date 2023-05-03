<template>
  <div>
  <form>
    <input type="text" v-model="form.title" placeholder="title"><br>
    <input type="text" v-model="form.company" placeholder="company"><br>
    <input type="text"  v-model="form.location" placeholder="location"><br>
    <input type="text" v-model="form.description" placeholder="description"><br>
    <input type="text" v-model="form.salary" placeholder="salary">

  </form>
</div>
  
  <h1>JobPost DataBase</h1>

  <table border="1px">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Company</th>
        <th>Location</th>
        <th>Description</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in jobs"  v-bind:key="item.id">
        <td>{{ item._id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.company }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.salary }}</td>

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
      jobs:[],
      form:{
        title:'',
        company:'',
        location:'',
        description:'',
        salary:''

      }
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