import utils from "../../../helpers/utils"

const SELECTORS = {
    TXT_PRO_TRAINER: 'android=new UiSelector().resourceId("com.talzz.datadex:id/onboarding_screen_3_upgrade_title")',
    TXT_DATADEX_CONFIG:'android=new UiSelector().textContains("Everything on this page is optional.")',
    BTN_START:'android=new UiSelector().resourceId("com.talzz.datadex:id/onboarding_screen_3_start_button")',
};

class FinishSetProfile{
    get txtProTrainer() {
        return $(SELECTORS.TXT_PRO_TRAINER);
    }

    get txtDatadexConfig() {
        return $(SELECTORS.TXT_DATADEX_CONFIG);
    }

    get btnStart() {
        return $(SELECTORS.BTN_START);
    }

    async startUseApp() {
        let flag;
        await this.txtProTrainer.waitForDisplayed({ timeout: 15000 });

        await this.txtDatadexConfig.waitForDisplayed({ timeout: 10000 });

        await this.btnStart.waitForDisplayed({ timeout: 10000 });

        if (await this.btnStart.isDisplayed()){
            flag = true;
        }else flag = false;

        utils.tap(await this.btnStart);

        return flag;
    }
}

export default new FinishSetProfile();