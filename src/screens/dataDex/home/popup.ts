import utils from "../../../helpers/utils"
import home from "./home.screen";
import gestures from "../../../helpers/gestures";

const SELECTORS = {
    BTN_VISIT_WEBSITE: 'android=new UiSelector().resourceId("button3")',
    TXT_DATADEX_CONFIG:'android=new UiSelector().textContains("Everything on this page is optional. To skip and start using dataDex, press the button below.")',
    BTN_START:'android=new UiSelector().resourceId("onboarding_screen_3_start_button")',
};

class Popup{
    get btnVisitWebsite() {
        return $(SELECTORS.BTN_VISIT_WEBSITE);
    }

    get txtDatadexConfig() {
        return $(SELECTORS.TXT_DATADEX_CONFIG);
    }

    get btnStart() {
        return $(SELECTORS.BTN_START);
    }

    async backWebsite() {
        let flag;

        await gestures.tapByCoordinates(480, 1700);

        await browser.pause(2000);
        await browser.pressKeyCode(4);
        await browser.pause(2000);
        
        await home.btnFilterAllGames.waitForDisplayed({timeout:10000});

        if (await home.btnFilterAllGames.isDisplayed()){
            flag = true;
        }else flag = false;

        return flag;   
    }

    
}

export default new Popup();