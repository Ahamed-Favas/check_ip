import { NextResponse } from "next/server";
import axios from "axios"
export async function GET(){
    try {
        // // console.log(url)
        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();

      
        // // Navigate the page to a URL
        // await page.goto(url);
      
        // // Set screen size
        // await page.setViewport({width: 1080, height: 1024});
      
        // const response = await page.content()
        const response = await axios.get("https://api.ipify.org/?format=json")
        const {ip} = response.data
        
        return NextResponse.json({ip:ip})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error})
    }
}