<script>
import Footer from "../components/Footer.svelte";

    
</script>

<section id="splash-section">
    <div class="welcome">
        <aside>
            <p>WELCOME TO ZEUS</p>
        </aside>
    </div>
</section>
<section id="news-section">

</section>
<Footer/>

<style>
    #splash-section{
        display: flex;
        height: 100vh;
        width: 100%;
        background: rgba(50,0,0,.5);
    }

    #news-section{
        display: flex;
        height: 100vh;
        width: 100%;
        background: rgba(50,50,0,.5);
    }

    .welcome{
        display: flex;
        height: 600px;
        width: calc(100% - 100px);
        background: rgba(0,100,0,.5);
        border-radius: 5px;
        margin: auto;
    }

    .welcome aside{
        display: flex;
        height: 500px;
        width: 500px;
        background: lightyellow;
        border: dashed 1px black;
        margin: auto auto auto 0;
    }

    .welcome aside p{
        display: flex;
        height: fit-content;
        font-size: 6em;
        text-decoration: underline;
        margin-bottom: auto;
    }
</style>