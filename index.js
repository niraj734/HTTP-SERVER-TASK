const http=require('http')

const server=http.createServer((req,res)=>{
    const method=req.method
    const path=req.url
    
    switch(method){
        case 'GET':{
            switch (path) {
              case "/":
                return res.writeHead(200).end("Hello from the server");
              case "/contact-us":
                return res.writeHead(200).end("my mail id:abc@gmail.com");
              case "/tweet":
                return res.writeHead(200).end("tweet1 \n tweet 2\n tweet3");


            }
            
        }
        break
        case 'POST':{
            switch(path){
                case '/tweet':
                    return res.writeHead(201).end(' your tweet was created  ')
            }
        }
    }
    return res.writeHead(404).end('you are lost man!!')
})

server.listen(8000,()=>console.log('http server is running on PORT 8000'))
