import utils from "../../../helpers/utils"

const SELECTORS = {
    TXT_WHY_BIRTHDAY: 'android=new UiSelector().resourceId("com.talzz.datadex:id/onboarding_screen_2_why_we_need_button")',
    ///LIST PICKERS///
    LIST_DAY_PICKER:'android=new UiSelector().resourceId("com.talzz.datadex:id/onboarding_screen_2_date_picker_day_spinner")',
    LIST_MONTH_PICKER:'android=new UiSelector().resourceId("com.talzz.datadex:id/onboarding_screen_2_date_picker_month_spinner")',
    LIST_YEAR_PICKER:'android=new UiSelector().resourceId("com.talzz.datadex:id/onboarding_screen_2_date_picker_year_spinner")',
    ///TEXT LIST BY DATE///
    TXT_LIST_DAY: 'android=new UiSelector().textMatches("4")',
    TXT_LIST_MONTH:'android=new UiSelector().textMatches("7")',
    TXT_LIST_YEAR:'android=new UiSelector().textContains("2012")',
    ///BUTTONS HIDDENS BEFORE SELECT BIRTHDAY///
    BTN_PRIVACY_POLICY:'android=new UiSelector().resourceId("com.talzz.datadex:id/user_agreement_privacy_policy_button")',
    BTN_TERMS_OF_SERVICE:'android=new UiSelector().resourceId("com.talzz.datadex:id/user_agreement_terms_of_service_button")',
    BTN_CONTINUE:'android=new UiSelector().resourceId("com.talzz.datadex:id/onboarding_screen_2_continue_fab")',
};

class BirthDay{
    get txtWhyBirthday() {
        return $(SELECTORS.TXT_WHY_BIRTHDAY);
    }

    get listDayPicker() {
        return $(SELECTORS.LIST_DAY_PICKER);
    }

    get listMonthPicker() {
        return $(SELECTORS.LIST_MONTH_PICKER);
    }

    get listYearPicker() {
        return $(SELECTORS.LIST_YEAR_PICKER);
    }

    get txtListDay() {
        return $(SELECTORS.TXT_LIST_DAY);
    }

    get txtListMonth() {
        return $(SELECTORS.TXT_LIST_MONTH);
    }

    get txtListYear() {
        return $(SELECTORS.TXT_LIST_YEAR);
    }

    get btnPrivacyPolicy() {
        return $(SELECTORS.BTN_PRIVACY_POLICY);
    }

    get btnTermsOfService() {
        return $(SELECTORS.BTN_TERMS_OF_SERVICE);
    }

    get btnContinue() {
        return $(SELECTORS.BTN_CONTINUE);
    }


    async setBirthDay() {
        let flag;

        await this.txtWhyBirthday.waitForDisplayed({ timeout: 10000 });

        await utils.waitAndTap(20000, await this.listDayPicker);

        await utils.waitAndTap(20000, await this.txtListDay);

        await utils.waitAndTap(20000, await this.listMonthPicker);

        await utils.waitAndTap(20000, await this.txtListMonth);

        await utils.waitAndTap(20000, await this.listYearPicker);

        await utils.waitAndTap(20000, await this.txtListYear);

        await this.btnPrivacyPolicy.waitForDisplayed({ timeout: 10000 });
        await this.btnTermsOfService.waitForDisplayed({ timeout: 10000 });
        await this.btnContinue.waitForDisplayed({ timeout: 10000 });

        if (await this.btnContinue.isDisplayed()){
            flag = true;
        }else flag = false;

        utils.tap(await this.btnContinue);

        return flag
    }
}

export default new BirthDay();