import 'should'
import puppeteer from 'puppeteer';

let page;
let browser;
const screenshotsPath = './test/screenshots/';

const [width, height] = [1200, 860];
before(async () => {
    return new Promise(async resolve => {
        browser = await puppeteer.launch({
            waitUntil: 'domcontentloaded',
            headless: false,
            slowMo: 30,
            devtools: false,
            args: [`--window-size=${width},${height}`, `--window-position=30,160`]
        });
        page = await browser.newPage();
        await page.setViewport({ width, height });
        resolve()
    })
});

const leads = [
    { name: 'Sergey', email: 'rusakk@mail.ru', phone: '+79624033427', message: 'New lead' },
    { name: 'Test', email: 'Test@mail.ru', phone: '+71111111111', message: 'New test' },
];

const getScreenshotFileName = (name) => {
    const date = new Date().toLocaleDateString();
    return `${date}-${name}`
}

getScreenshotFileName();

const URL = 'http://kodaktor.ru/g/puppetform';

leads.forEach((lead) =>
    describe(`form fill test ${lead.name}`, () => {
        it('respond with revers', async () => {
            const fileName = getScreenshotFileName(lead.name)
            await page.goto(URL);
            await page.waitForSelector('[data-test=contact-form]');
            await page.screenshot({ path: `${screenshotsPath}${fileName}-empty-form-screenshot.png` });
            await page.click('input[name=name]');
            await page.type('input[name=name]', lead.name);
            await page.click('input[name=email]');
            await page.type('input[name=email]', lead.email);
            await page.click('input[name=tel]');
            await page.type('input[name=tel]', lead.phone);
            await page.click('textarea[name=message]');
            await page.type('textarea[name=message]', lead.message);
            await page.click('input[type=checkbox]');
            await page.screenshot({ path: `${screenshotsPath}${fileName}-filled-form-screenshot.png` });
            await page.click('button[type=submit]');
            await page.waitForSelector('.modal');
            await page.screenshot({ path: `${screenshotsPath}${fileName}-result-of-submit-screenshot.png` });
        }).timeout(0);
    })
);