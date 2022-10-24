const {
    aceVimMap,
    mapkey,
    imap,
    imapkey,
    getClickableElements,
    vmapkey,
    map,
    unmap,
    vunmap,
    cmap,
    addSearchAlias,
    removeSearchAlias,
    tabOpenLink,
    readText,
    Clipboard,
    Front,
    Hints,
    Visual,
    RUNTIME
} = api;

// Hints.characters = 'asdgwertcvuionm'; 从 1.0.2 开始，Hints.characters = "abcd";被替换为Hints.setCharacters("abcd");
Hints.setCharacters = ("asdgwertcvuionm");
Hints.scrollKeys = '0jkhlG$';
settings.startToShowEmoji = 0;


// Settings with key mappings like vimium
map('u', 'e');
mapkey('p', "Open the clipboard's URL in the current tab", function() {
    Front.getContentFromClipboard(function(response) {
        window.location.href = response.data;
    });
});
map('P', 'cc');
map('gi', 'i');
map('F', 'gf');
map('gf', 'w');
map('`', '\'');
map('>_t', 't');  // save default key `t` to temp key `>_t`
map('t', 'on');  // create a new key `t` for default key `on`
map('oO', '>_t');  // create a new key `O` for saved temp key `>_t`
map('oo', 'go');
map('>_S', 'S');
map('H', 'S');
map('L', 'D');
map('gt', 'R');
map('gT', 'E');
map('K', 'R');
map('J', 'E');

// 映射
imap('jj', "<Esc>");  // 按两次j退出当前输入框

// Vimium-C 映射
//map('O', 't')
//map('o', 'go')
//map('F', 'gf')

// 在gmail.com、twitter.com只保留 E、R和T
api.unmapAllExcept(['E','R','T'], /gmail.com|twitter.com/);


// #快捷键访问指定网站
/* 模板
mapkey(',', '#120Open ', function () {
    api.tabOpenLink("");
});
*/
mapkey(',a', '#120Open Acfun', function () {
    api.tabOpenLink("https://www.acfun.cn/u/4075269.aspx");
});
mapkey(',b', '#120Open bilibili', function () {
    api.tabOpenLink("https://www.bilibili.com/");
});
mapkey(',e', '#120Open Chrome Extensions', function () {
    api.tabOpenLink("chrome://extensions/");
});
mapkey(',fh', '#120Open FeHelper', function () {
    api.tabOpenLink("https://www.baidufe.com/fehelper/index/index.html");
});
mapkey(',fq', '#120Open 有道云笔记分享', function () {
    api.tabOpenLink("https://note.youdao.com/s/dTdNWA9P");
});
mapkey(',gh', '#120Open GitHub', function () {
    api.tabOpenLink("https://www.github.com/");
});
mapkey(',gc', '#120Open 公务用车管理平台', function () {
    api.tabOpenLink("https://210.76.80.148/");
});
mapkey(',h', '#120Open 海兔影院', function () {
    api.tabOpenLink("http://www.haitum.com/");
});
mapkey(',i', '#120Open 查Ip', function () {
    api.tabOpenLink("https://whoer.net/zh");
});
mapkey(',m', '#120Open mattkaydiary', function () {
    api.tabOpenLink("https://www.mattkaydiary.com/");
});
mapkey(',n', '#120Open 有道云笔记', function () {
    api.tabOpenLink("https://note.youdao.com/web/");
});
mapkey(',p', '#120Open ProtonMail', function () {
    api.tabOpenLink("https://protonmail.com/");
});
mapkey(',qq', '#120Open QQ邮箱', function () {
    api.tabOpenLink("https://mail.qq.com/");
});
mapkey(',qw', '#120Open 微信网页版', function () {
    api.tabOpenLink("https://wx.qq.com/");
});
mapkey(',wh', '#120Open 52哇哈', function () {
    api.tabOpenLink("https://bbs.52waha.com/");
});
mapkey(',wk', '#120Open wikiHow', function () {
    api.tabOpenLink("https://zh.wikihow.com/");
});
mapkey(',xq', '#120Open 天天象棋网页版', function () {
    api.tabOpenLink("https://h5login.qqchess.qq.com/");
});
mapkey(',xw', '#120Open 新闻简讯', function () {
    api.tabOpenLink("https://cloud.gd.gov.cn/login#/");
});
mapkey(',y', '#120Open YouTube', function () {
    api.tabOpenLink("https://www.youtube.com/");
});
mapkey(',za', '#120Open 人人影视字幕组', function () {
    api.tabOpenLink("http://yysub.net/");
});
mapkey(',zc', '#120Open 国有资产系统', function () {
    api.tabOpenLink("https://zc.czt.gd.gov.cn/index.html");
});
mapkey(',zj', '#120Open 91美剧网', function () {
    api.tabOpenLink("https://91mjw.com/");
});
mapkey(',zm', '#120Open 在线电影网站', function () {
    api.tabOpenLink("https://github.com/pojiezhiyuanjun/freemovie/wiki");
});
mapkey(',zn', '#120Open 耐卡网', function () {
    api.tabOpenLink("https://mcar.vip/");
});
mapkey(',zs', '#120Open 深影字幕组', function () {
    api.tabOpenLink("https://forum.shinybbs.vip/");
});
mapkey(',zw', '#120Open 债务监测系统', function () {
    api.tabOpenLink("http://lfpt.mof.gov.cn/");
});
// https://zh.wikihow.com/wikiHowTo?search=%s

// 注册内联查询
// mapkey('q', );   // 不会写，闲置
mapkey('qq', "Open the clipboard's URL in the current tab", function() {
    Front.registerInlineQuery({
        url: "https://api.shanbay.com/bdc/search/?word=",
        parseResult: function(res) {
            try {
                res = JSON.parse(res.text);
                var exp = res.msg;
                if (res.data.definition) {
                    var pronunciations = [];
                    for (var reg in res.data.pronunciations) {
                        pronunciations.push(`<div>[${reg}] ${res.data.pronunciations[reg]}</div>`);
                        // pronunciations.push(`<div><audio src="${res.data[reg+'_audio']}" controls></audio></div>`);
                    }
                    var definition = res.data.definition.split("\n").map(function(d) {
                        return `<li>${d}</li>`;
                    }).join("");
                    exp = `${pronunciations.join("")}<ul>${definition}</ul>`;
                }
                if (res.data.en_definitions) {
                    exp += "<hr/>";
                    for (var lex in res.data.en_definitions) {
                        var sense = res.data.en_definitions[lex].map(function(s) {
                            return `<li>${s}</li>`;
                        }).join("");
                        exp += `<div>${lex}</div><ul>${sense}</ul>`;
                    }
                }
                return exp;
            } catch (e) {
                return "";
            }
        }
    });
});

Front.registerInlineQuery({
    url: "https://api.shanbay.com/bdc/search/?word=",
    parseResult: function(res) {
        try {
            res = JSON.parse(res.text);
            var exp = res.msg;
            if (res.data.definition) {
                var pronunciations = [];
                for (var reg in res.data.pronunciations) {
                    pronunciations.push(`<div>[${reg}] ${res.data.pronunciations[reg]}</div>`);
                    // pronunciations.push(`<div><audio src="${res.data[reg+'_audio']}" controls></audio></div>`);
                }
                var definition = res.data.definition.split("\n").map(function(d) {
                    return `<li>${d}</li>`;
                }).join("");
                exp = `${pronunciations.join("")}<ul>${definition}</ul>`;
            }
            if (res.data.en_definitions) {
                exp += "<hr/>";
                for (var lex in res.data.en_definitions) {
                    var sense = res.data.en_definitions[lex].map(function(s) {
                        return `<li>${s}</li>`;
                    }).join("");
                    exp += `<div>${lex}</div><ul>${sense}</ul`;
                }
            }
            return exp;
        } catch (e) {
            return "";
        }
    }
});


// set theme
settings.theme = `
// Example of ACE editor theming 【
:root {
    --theme-ace-bg:#282828ab; /*Note the fourth channel, this adds transparency*/
    --theme-ace-bg-accent:#3c3836;
    --theme-ace-fg:#ebdbb2;
    --theme-ace-fg-accent:#7c6f64;
    --theme-ace-cursor:#928374;
    --theme-ace-select:#458588;
}
#sk_editor {
    height: 50% !important; /*Remove this to restore the default editor size*/
    background: var(--theme-ace-bg) !important;
}
.ace_dialog-bottom{
    border-top: 1px solid var(--theme-ace-bg) !important;
}
.ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog{
    background: var(--theme-ace-bg-accent) !important;
}
.ace-chrome{
    color: var(--theme-ace-fg) !important;
}
.ace_gutter, .ace_dialog {
    color: var(--theme-ace-fg-accent) !important;
}
.ace_cursor{
    color: var(--theme-ace-cursor) !important;
}
.normal-mode .ace_cursor{
    background-color: var(--theme-ace-cursor) !important;
    border: var(--theme-ace-cursor) !important;
}
.ace_marker-layer .ace_selection {
    background: var(--theme-ace-select) !important;
}  // Example of ACE editor theming 】
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
