
import Home from "./components/Home";
import Test1 from "./components/Test1";
import Search from "./components/Search";


export default [{
  path: '/',
  component: Home,
  childrens: [],
  icon: 'icon-appstore',
  name: "首页",
  exact: true,
}, {
  path: '/video',
  component: Test1,
  childrens: [],
  icon: 'icon-filesearch',
  name: "视频课"
}, {
  path: '/file',
  component: Test1,
  childrens: [],
  icon: 'icon-folder-add',
  name: "文档"
}, {
  notRender: true,
  path: '/search/:title',
  component: Search,
  childrens: [],
  icon: 'icon-folder-add',
  name: "文档"
}]