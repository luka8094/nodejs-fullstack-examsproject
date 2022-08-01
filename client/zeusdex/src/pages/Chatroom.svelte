<script>
    import io from "socket.io-client"

    const socket = io()

    let messages = []
    messages.push("something")
    messages.push("a comment")
    messages.push("lol what's up?")

    socket.on("display", ({data,check}) =>{
        console.log(check)
        messages.push(data)
        messages = messages
    })

    function sendMessage(event){
        console.log(event)
        let message = document.getElementById("text-input").value
        document.getElementById("text-input").value = ""
        socket.emit("sent", {data: message})
    }
</script>

<section>
    <aside class="chat-display">
        <div id="chatlog">
            {#each messages as message}
                <p>user: {message}</p>
            {/each}
        </div>
        <div id="chat-message">
            <input type="text" id="text-input"/>
            <button on:click|preventDefault={sendMessage}>
                send comment
            </button>
        </div>
    </aside>
    <aside class="index-display">
        <div>
            <h1>Name of currency</h1>
            <div class="currency-graph">

            </div>
            <div class="currency-data">

            </div>
        </div>
    </aside>
</section>

<style>
    section{
        display: flex;
        height: 100vh;
        width: 100%;
    }

    .chat-display{
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: fit-content;
        background: rgba(100, 10, 20, .5);
    }

    #chatlog{
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 500px;
        overflow: hidden;
        overflow-y: scroll;
    }

    p{
        display: flex;
        width: 100%;
        height: max-content;
        background-color: rgba(50,50,50,.5);
        padding: 10px 20px 10px 50px;
        border: dashed 1px black;
        margin: 0;
    }

    #chat-message{
        display: flex;
        width: 100%;
        justify-content: center;
    }

    input[type=text] {
        width: calc(100% - 150px);
    }

    .index-display{
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        background: rgb(100, 100, 10, .5);
    }

    .currency-graph{
        display: flex;
        height: 300px;
        width: calc(100% - 20px);
        background: rgba(0,100,150, .5);
        margin: auto;
        margin-bottom: 10px;
    }

    .currency-data{
        display: flex;
        height: 200px;
        width: calc(100% - 20px);
        background: rgba(0,150,150, .5);
        margin: auto;
    }
</style>