/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description Mobile UI Components built on Vue of Vant, Use babel-plugin-import to import components on demand.
 */

import {
    Button, Row, Col, Icon, NavBar, Field, CellGroup, Cell, Tag, Tabbar,
    TabbarItem, Collapse, CollapseItem, Checkbox, CheckboxGroup, Picker, Popup,
    Loading, Tab, Tabs, RadioGroup, Radio, Notify, Sticky, Rate, Skeleton, Toast,
    Dialog, Uploader, Swipe, SwipeItem, PullRefresh, List
} from "vant";

export default Vue => {
    Vue.use(Button);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Icon);
    Vue.use(NavBar);
    Vue.use(Field);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Tag).use(Tabbar).use(TabbarItem);
    Vue.use(Popup);
    Vue.use(Picker);
    Vue.use(CellGroup);
    Vue.use(Collapse).use(CollapseItem);
    Vue.use(Checkbox).use(CheckboxGroup);
    Vue.use(Tag).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs);
    Vue.use(Loading);
    Vue.use(RadioGroup);
    Vue.use(Radio);
    Vue.use(Notify);
    Vue.use(Sticky);
    Vue.use(Rate);
    Vue.use(Skeleton);
    Vue.use(Toast);
    Vue.use(Dialog);
    Vue.use(Uploader);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(PullRefresh);
    Vue.use(List);
}