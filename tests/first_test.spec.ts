import {test,expect} from "@playwright/test";

// test("title",({fixture})=>{

// //step1
// //step2
// //step3


// })


test ("open & verify page", async ({page})=>{
    
    await page.goto("http://www.automationpractice.pl/index.php");

    let title:string=await page.title();
        console.log("Title:",title);

    await expect(page).toHaveTitle("My Shop");

});

test ("open & verify url", async ({page})=>{
    
    await page.goto("http://www.automationpractice.pl/index.php");

    let url:string=await page.url();
        console.log("URL:",url);

    await expect(page).toHaveURL(/automation/);

});