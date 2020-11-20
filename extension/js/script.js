/**
 * 被注入的脚本
 */

main();


function main() {
    let msg = `
    作者：tanyiqu
    开源地址：https://github.com/tanyiqu/religious-auto
    
    请确保你在答题的页面
    点击 “确定” 开始
    `;

    let res = confirm(msg);
    if (res === true) {

        var text = prompt(`
        你想要每道题的答题间隔为( )秒？

        15秒间隔做完大概25分钟
        10秒间隔做完大概17分钟
        5秒间隔做完大概8分半
        也可以输入0秒，然后想什么时候提交就什么时候提交
        默认为5秒

        点击确定后 等待相应的时间，然后手动点击提交即可
        
        `);

        let t = 5;
        if (text) {
            t = text - 0;
        }

        let min = (t * 100) / 60;

        alert(`
        答题是按照题库的顺序，而不是当前页面的题目的顺序
        请耐心等待` + min + '分钟');

        start(t);
    }
}


// 做题
function start(interval) {
    let toast = new Ygtoast();
    toast.toast("正在遍历题库", 900);

    // 指示当前循环到题库的第几道
    let poiter = -1;

    // 指示当前做了多少题目
    let num = 0;

    // 定时循环执行
    let id = window.setInterval(() => {
        poiter = finishOne(poiter + 1);
        if (poiter === -1) {
            clearInterval(id);
            alert("已全部完成！,快交卷吧！");
        }
        num++;
        if (num <= 100) {
            toast.toast('已完成' + num + '道题，剩余' + (100 - num) + '道', 600);
        }
    }, interval * 1000);
}


// 从begin开始遍历题库，找到一道题并完成它，然后返回当前做的是哪一道题。如果找不到就返回-1
function finishOne(begin) {
    for (let i = begin; i < question_bank.length; i++) {
        let item = question_bank[i];
        let opts = $("input[name='" + item.id + "']");
        // 没有这道题就跳过
        if (opts['length'] === 0) {
            continue;
        }

        // 遍历选项，如果选项的value包含答案，就选中它，然后跳出循环
        let n = 1;
        $.each(opts, (i, it) => {
            // console.log(it);
            // 判断内容包含
            if (item.answer.indexOf($(it).val()) != -1) {
                $(it).attr('checked', 'true');
            }
        });

        // 让下面的按钮变绿
        // topicid_1000001 => examanswer_1000001
        let id = '#examanswer_' + item.id.slice(8);
        let green = $(id);
        green.addClass('on');
        return i;
    }
    return -1;
}