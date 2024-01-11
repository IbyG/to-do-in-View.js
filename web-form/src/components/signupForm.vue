<template>
  <form>
    <label>Email: </label>
    <input type="email" required v-model="email">

    <label>Password: </label>
    <input type="password" required v-model="password">

    <label>Role:</label>
    <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label >skills (seperate by comma)</label>
    <input type="text" v-model="tempskill" @keyup="addskill">

    <div v-for="skill in skills" v-bind:key="skill" class="pill" @click="removeskill(skill)">
        {{ skill }}
    </div>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label> Accept terms and conditions </label>
    </div>

    <div>
        <input type="checkbox" value="shaun" v-model="name">
        <label>Shaun</label>
    </div>
    <div>
        <input type="checkbox" value="ibrahim" v-model="name">
        <label>Ibrahim</label>
    </div>
    <div>
        <input type="checkbox" value="triston" v-model="name">
        <label>Triston</label>
    </div>
    <p>Names: {{ name }}</p>
    <p>temp Skills: {{skills }}</p>



  </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            name: [],
            tempskill: '',
            skills: []
        }
    },
    methods: {
        addskill (e) {
            console.log(e)
            if (e.key === ',' && this.tempskill){
                //checking of duplicate entry and if it is unique that is put in the array
                if (!this.skills.includes(this.tempskill)){
                    this.skills.push(this.tempskill.replace(/,/g, ''))
                }
                this.tempskill = ''
                

            }
        },
        removeskill(skill){
            this.skills = this.skills.filter(item => item !== skill)
        }

    }

}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}


</style>