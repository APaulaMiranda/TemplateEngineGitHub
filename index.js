const inquirer = require("inquirer")
const axios = require("axios")

const html = require("./generateHTML")

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["red", "blue", "green", "pink"]
    }
];

function init() {

    inquirer.prompt(questions).then(
        answers => {

            console.log("Searching GitHub...")
            axios.get("https://api.github.com/users/" + answers.github).then(
                async response => {
                    const userProfile = {
                        ...answers,
                        name: response.data.name,
                        imgUrl: response.data.avatar_url,
                        //COMPLETE THIS!!!!!!!!!!!!!!
                    }
                    const html = html(userProfile)
                    const browser = await puppeteer.launch({ headless: true });
                    const page = await browser.newPage();
                    await page.setContent(htmlContent);
                    const buffer = await page.pdf({
                        path: `./${userProfile.name}.pdf`,
                        format: "A4",
                        printBackground: true,
                        margin: {
                            left: "0px",
                            top: "0px",
                            right: "0px",
                            bottom: "0px"
                        }
                    });

                    await browser.close();
                    Collapse


                }

            )




        }
    )


}

init()