Hints.characters = 'asdgwertcvuionm';
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
unmapAllExcept(['E','R','T'], /gmail.com|twitter.com/);


// #快捷键访问指定网站
/* 模板
mapkey(',', '#120Open ', function () {
    tabOpenLink("");
});
*/
mapkey(',a', '#120Open Acfun', function () {
    tabOpenLink("https://www.acfun.cn/u/4075269.aspx");
});
mapkey(',b', '#120Open bilibili', function () {
    tabOpenLink("https://www.bilibili.com/");
});
mapkey(',e', '#120Open Chrome Extensions', function () {
    tabOpenLink("chrome://extensions/");
});
mapkey(',f', '#120Open FeHelper', function () {
    tabOpenLink("https://www.baidufe.com/fehelper/index/index.html");
});
mapkey(',g', '#120Open GitHub', function () {
    tabOpenLink("https://www.github.com/");
});
mapkey(',h', '#120Open 海兔影院', function () {
    tabOpenLink("http://www.haitum.com/");
});
mapkey(',i', '#120Open 查Ip', function () {
    tabOpenLink("https://whoer.net/zh");
});
mapkey(',m', '#120Open mattkaydiary', function () {
    tabOpenLink("https://www.mattkaydiary.com/");
});
mapkey(',n', '#120Open 有道云笔记', function () {
    tabOpenLink("https://note.youdao.com/web/");
});
mapkey(',p', '#120Open ProtonMail', function () {
    tabOpenLink("https://protonmail.com/");
});
mapkey(',qq', '#120Open QQ邮箱', function () {
    tabOpenLink("https://mail.qq.com/");
});
mapkey(',qw', '#120Open 微信网页版', function () {
    tabOpenLink("https://wx.qq.com/");
});
mapkey(',w', '#120Open wikiHow', function () {
    tabOpenLink("https://zh.wikihow.com/");
});
mapkey(',y', '#120Open YouTube', function () {
    tabOpenLink("https://www.youtube.com/");
});
mapkey(',za', '#120Open 人人影视字幕组', function () {
    tabOpenLink("http://yysub.net/");
});
mapkey(',zj', '#120Open 91美剧网', function () {
    tabOpenLink("https://91mjw.com/");
});
mapkey(',zm', '#120Open 在线电影网站', function () {
    tabOpenLink("https://github.com/pojiezhiyuanjun/freemovie/wiki");
});
mapkey(',zn', '#120Open 耐卡网', function () {
    tabOpenLink("https://mcar.vip/");
});
mapkey(',zs', '#120Open 深影字幕组', function () {
    tabOpenLink("https://forum.shinybbs.vip/");
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
