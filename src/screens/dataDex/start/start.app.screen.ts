import utils from "../../../helpers/utils";
import birthday from "../../../screens/dataDex/start/birthday.screen";

const SELECTORS = {
    TXT_WELCOME: 'android=new UiSelector().textContains("Welcome to")',
    TXT_DATADEX_INFO:'android=new UiSelector().textContains("dataDex is a beautifully designed Pokédex for everyone to use.")',
    BTN_START:'android=new UiSelector().descriptionContains("Continue")',
};

class StartApp{
    get txtWelcome() {
        return $(SELECTORS.TXT_WELCOME);
    }

    get txtDatadexInfo() {
        return $(SELECTORS.TXT_DATADEX_INFO);
    }

    get btnStart() {
        return $(SELECTORS.BTN_START);
    }

    async startApp() {
        let flag;

        await this.txtWelcome.waitForDisplayed({ timeout: 10000 });

        await this.txtDatadexInfo.waitForDisplayed({ timeout: 10000 });

        utils.waitAndTap(10000, await this.btnStart);

        await birthday.txtWhyBirthday.waitForDisplayed({ timeout: 10000 });

        if(await birthday.txtWhyBirthday.isDisplayed()) {
            flag = true;
        }else flag = false;

        return flag;
    }
}

export default new StartApp();