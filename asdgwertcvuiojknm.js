Hints.characters = 'asdgwertcvuiojknm';

// 映射
imap('jj', "<Esc>");  // 按两次j退出当前输入框

// Vimium-C 映射
//map('O', 't')
//map('o', 'go')
//map('F', 'gf')


// #快捷键访问指定网站
/* 模板
mapkey(',', '#120Open ', function () {
    tabOpenLink("");
});
*/
mapkey(',y', '#120Open YouTube', function () {
    tabOpenLink("https://www.youtube.com/");
});
mapkey(',b', '#120Open bilibili', function () {
    tabOpenLink("https://www.bilibili.com/");
});
mapkey(',a', '#120Open Acfun', function () {
    tabOpenLink("https://www.acfun.cn/u/4075269.aspx");
});
mapkey(',g', '#120Open GitHub', function () {
    tabOpenLink("https://www.github.com/");
});
mapkey(',q', '#120Open QQ邮箱', function () {
    tabOpenLink("https://mail.qq.com/");
});
mapkey(',qm', '#120Open QQ邮箱', function () {
    tabOpenLink("https://mail.qq.com/");
});
mapkey(',i', '#120Open 查Ip', function () {
    tabOpenLink("https://whoer.net/zh");
});
mapkey(',n', '#120Open 有道云笔记', function () {
    tabOpenLink("https://note.youdao.com/web/");
});
mapkey(',z', '#120Open 人人影视字幕组', function () {
    tabOpenLink("http://www.zmz2019.com/");
});
mapkey(',e', '#120Open Chrome Extensions', function () {
    tabOpenLink("chrome://extensions/");
});


// set theme
settings.theme = `
#sk_omnibar {
    opacity: 0.91;  // Omnibar 透明化
}
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    // background: #24272f;  // 背景颜色
    // color: #123456;  // 字体颜色
}
.sk_theme input {
    // color: #12abcd;
    color: #bcde10;  // 输入的字的颜色
}
.sk_theme .url {
    color: #12abcd;
}
`;

 // J/K 向下/上滚动一页(源自dslztx@gmail.com)
//mapkey('J', '#2Scroll a page down', Normal.scroll.bind(Normal, "pageDown"), {repeatIgnore: true});
//mapkey('K', '#2Scroll a page up', Normal.scroll.bind(Normal, "pageUp"), {repeatIgnore: true});
mapkey('J', '#2Scroll a page down', scrollNode.skScrollBy(0, Math.round(size[1] / 2)), {repeatIgnore: true});
mapkey('K', '#2Scroll a page up', scrollNode.skScrollBy(0, -Math.round(size[1] / 2)), {repeatIgnore: true});