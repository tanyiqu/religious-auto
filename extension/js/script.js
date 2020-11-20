/**
 * 被注入的脚本
 */

main();

function main() {
    let msg = `
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

        点击确定后 等待相应的时间，然后手动点击提交即可
        
        `);

        if (text) {
            alert("输入的内容为：" + text)
        }

        // match();
    }
}


function match() {
    console.log('遍历题库');
    question_bank.forEach(item => {
        // console.log(item);
        // console.log(index);

        let opts = $("input[name='" + item.id + "']");
        // 没有这道题就跳过
        if (opts['length'] === 0) {
            return;
        }

        // 遍历选项，如果选项的value包含答案，就选中它，然后跳出循环
        $.each(opts, (i, it) => {
            console.log(it);
            // 判断内容包含
            if (item.answer.indexOf($(it).val()) != -1) {
                $(it).attr('checked', 'true');
            }
        });
    });
}