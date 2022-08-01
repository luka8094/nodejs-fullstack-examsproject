<script>
    import {useNavigate} from "svelte-navigator"
    import Footer from "../components/Footer.svelte"

    let isActive = false
    let underlineEffect = "none"
    const navigate = useNavigate()

</script>

<section id="form-container-section">
    <div id="form-box">
        <div id="inner-form-box" class="{isActive === true ? "rotate" : ""}">
            <div class="front-card">
                <form id="login-form" method="POST" action ="/api/login">
                    <label for="useremail">
                        email:   
                    </label>
                    <input id="useremail" type="email" name="useremail"/>
                    <label for="password">
                        password:
                    </label>
                    <input id="password" type="text" name="password"/>
                    <button>
                        login
                    </button>
                </form>
                <button class="toggle" on:click|preventDefault="{() => isActive = true}">
                    No account? sign up!
                </button>
            </div>
            <div class="back-card">
                <form id="register-form" method="POST" action="/api/register-user">
                    <label for="username">
                        username:   
                    </label>
                    <input id="username" type="text" name="username">
                    <label for="useremail">
                        email:   
                    </label>
                    <input id="useremail" type="email" name="useremail"/>
                    <label for="password">
                        password:
                    </label>
                    <input id="password" type="text" name="password"/>
                    <button>
                        sign up
                    </button>
                </form>
                <button class="toggle" on:click|preventDefault="{() => isActive = false}">
                    back to login?
                </button>
            </div>
        </div>
    </div>
</section>
<Footer/>

<style>
    #form-container-section{
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    #form-box{
        height: 320px;
        width: 370px;
        margin: auto;
        perspective: 1000px;
        transition: height 1s;
    }

    #inner-form-box{
        display: flex;
        position: relative;
        height: 100%;
        width: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .front-card, 
    .back-card{
        display: flex;
        flex-direction: column;
        position: absolute;
        height: fit-content;
        width: 100%;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    .front-card{
        background: rgba(50,50,50,.5);
    }

    .back-card{
        background: rgba(100,100,100,.5);
        transform: rotateY(180deg);
    }

    form{
        display: flex;
        flex-direction: column;
        width: calc(100% - 50px);
    }
    
    label{
        margin: 10px 0;
    }

    .rotate{
        transform: rotateY(180deg);
    }

    .toggle{
        text-align: center;
        background: transparent;
        margin: 20px 0;
        border: none;
    }
</style>