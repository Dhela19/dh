$("#terminal").terminal(async function (command, terminal) {
    try {
        const prompt = `you are a helpful, knowledge sharing chatbot. I say: ${command}. You reply:`
        const response = await fetch(
            `https://api.openai.com/v1/completions`,
            {
                body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 256}),
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${process.env.APIKEY}`,
                },
                    }
        ).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    terminal.echo(json.choices[0].text.trim());
                });
            }
        });
      
        console.log("Completed!");
    } catch (err) { console.error(`Error: ${err}`) }
},
    {
        greetings: 'Hi there, how may i help you',
        name: 'DH',
        
        
        prompt: '>> '
    });
//the temperature value is used to set the randomness of the output 
