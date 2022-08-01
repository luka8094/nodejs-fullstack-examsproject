<script>
    import {Router, Link, Route} from "svelte-navigator"
    import Main from "../pages/Main.svelte"
    import Login from "../pages/Login.svelte"
    import Chatroom from "../pages/Chatroom.svelte"

    //let loggedin = true
</script>


<Router>
    <nav>
        <Link to="/">
            Home
        </Link>
        <Link to="/login">
            Login
        </Link>
        <Link to="/watch-rooms">
            Spectate
        </Link>
        <Link to="/profile">
            Account
        </Link>
    </nav>
    <div>
        <Route path="/">
            <Main/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/watch-rooms">
            <Chatroom/>
        </Route>
    </div>
</Router>

<style>
    nav{
        display: flex;
        height: 50px;
        width: 100%;
        background: grey;
    }

    p{
        display: flex;
        margin: auto 10px auto 10px;
    }
</style>