<script>
import Footer from "../components/Footer.svelte";

    
</script>

<div>
    <form method="POST" action="/api/register-user">
        <label for="firstname">
            firstname:   
        </label>
        
        <label for="lastname">
            lastname:   
        </label>
        <label for="user-email">
            email:   
        </label>
        <input id="user-email" type="email" name="user-email"/>
        <label for="password">
            password:
        </label>
        <input id="password" type="text" name="password"/>
        <button>
            sign up!
        </button>
    </form>
</div>
<Footer/>

<style>

    div{
        display: flex;
        height: 100%;
        width: 100%;
    }

    form{
        display: flex;
        height: 300px;
        width: 150px;
        background: lightgrey;
    }
</style>