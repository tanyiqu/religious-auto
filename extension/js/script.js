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
        matchSingle();
    }

}


function matchSingle() {
    console.log('匹配单选题');
    let inputs = $("input[type='radio']");
    console.log(inputs);
    $(inputs[0]).attr('checked', 'true');
    $(inputs[4]).attr('checked', 'true');
}

function matchMultiple() {

}

function matchJudge() {

}