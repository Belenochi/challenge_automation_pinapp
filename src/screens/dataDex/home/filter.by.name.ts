import utils from "../../../helpers/utils"

const SELECTORS = {
    TXT_BOX_FILTER_BY_NAME: 'android=new UiSelector().resourceId("com.talzz.datadex:id/search_src_text")',
    FIRST_ITEM_FILTER_BY_NAME: 'android=new UiSelector().resourceId("com.talzz.datadex:id/list_item_dex_name")',
};

class FilterByName{
    get txtBoxFilterByName() {
        return $(SELECTORS.TXT_BOX_FILTER_BY_NAME);
    }

    get firstItemFilterByName() {
        return $(SELECTORS.FIRST_ITEM_FILTER_BY_NAME);
    }
}

export default new FilterByName();