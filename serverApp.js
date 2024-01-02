import fs from 'fs';
import http from 'http';
import mainUrl from 'url';
import replaceHtml from './Modules/replacedHtml.js';
import newUser from "./Modules/users.js"


const html = fs.readFileSync("./public/index.html", 'utf-8');
let productListHtml = fs.readFileSync("./public/product-list.html", 'utf-8');
let productdetailsHtml = fs.readFileSync("./public/product-details.html", 'utf-8');
let products = JSON.parse(fs.readFileSync("./data/products.json", 'utf-8'))


const server = http.createServer((request, response) => {
    let { query, pathname: path } = mainUrl.parse(request.url, true)


    if (path === "/" || path.toLocaleLowerCase() === "/home") {
        response.writeHead(200)
        response.end(html.replace('{{%MainText%}}', 'You are in Home page'))
    }

    else if (path.toLocaleLowerCase() === "/about") {
        response.writeHead(200)
        response.end(html.replace('{{%MainText%}}', 'You are in Home page'))
    }
    else if (path.toLocaleLowerCase() === "/contact") {
        response.writeHead(200)
        response.end(html.replace('{{%MainText%}}', 'You are in Contact page'))
    }
    else if (path.toLocaleLowerCase() === "/products") {
        if (!query.id) {
            let productHtmlArray = products.map((prod) => {
                return replaceHtml(productListHtml, prod)
            })
            let productResp = html.replace("{{%MainText%}}", productHtmlArray.join(' '))
            response.writeHead(200)
            response.end(productResp)

        } else {
            let prod = products[query.id]
            let productDetailResponseHtml = replaceHtml(productdetailsHtml, prod)
            response.end(html.replace("{{%MainText%}}", productDetailResponseHtml))
        }



    }
    else {
        response.writeHead(404)
        response.end(html.replace('{{%MainText%}}', 'Error 404: Page not found!'))
    }



})

server.listen(8000, '127.0.0.1', () => {
    console.log("Server has started!");
})

const eventData = new newUser

eventData.on("userData", (id, name) => {
    console.log(`A new user ${name} with ID ${id} has joined to the Server...`);
})

eventData.emit("userData", 101, "Irakli")


