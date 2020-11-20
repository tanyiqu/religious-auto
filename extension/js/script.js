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
        match();
    }
}


function match() {
    console.log('遍历题库');
    question_bank.forEach((item, index) => {
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