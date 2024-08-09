/* -------闲鱼主动好评脚本1.0---------
### 闲鱼主动评价脚本 1.0

**运行环境**：
- 开启无障碍
- 使用 autojspro
- 小米14
- 安卓系统

**如何使用**：
1. 进入待评价列表后，通过悬浮窗点击启动脚本。
*/

auto();
suspension_log();

while (true) {
    var evaluation_page = className("android.view.View").desc("待评价\n第 5 个标签，共 6 个").findOne();
    //  点击进到待评价列表
    if (evaluation_page) {
        evaluation_page.click();
        sleep(1000);

        // 下滑刷新
        swipe(600, 1000, 600, 1500, 300);
        console.log("下滑刷新");
        sleep(2000);

        // 点击待评价按钮
        click(1050, 800);
        console.log("点击待评价");
        sleep(500);

        // 点击好评表情
        give_good_reviews = className("android.view.View").desc("赏好评").findOne();
        if (give_good_reviews) {
            console.log("点击好评标签");
            give_good_reviews.click();
        }
        sleep(500);

        // 设置评语
        var set_comments = className("android.widget.EditText").text("聊聊本次交易感受，你的评价能帮助到其他人~").findOne();
        if (set_comments) {
            console.log("设置评语");
            set_comments.click();
            sleep(500);
            set_comments.setText("很好，交易愉快~");
        }

        // 点击发布按钮
        var release = className("android.view.View").desc("发布").findOne();
        if (release) {
            release.click();
        }
        sleep(3000);

        // 判断是否评价成功
        var review_details = className("android.view.View").desc("评价详情").findOne();
        if (review_details) {
            console.log("评价成功");
            back();
            sleep(1000);
        }
    }
}



function suspension_log() {
    console_floaty = floaty.rawWindow(
        <vertical id="日志" gravity="center" w="*" h="*">
            <card gravity="center" layout_gravity="" cardCornerRadius="10" w="210" h="150" cardBackgroundColor="#464646" cardElevation="0">
                <vertical id="root">
                    
                    <horizontal gravity="center" padding="5" marginTop="1" marginBottom="1">
                        <console id="console" w="*" h="*" />
                    </horizontal>
                </vertical>
                
            </card>
        </vertical>
    );


    let console_floaty_options = {
        gravity: "bottom", //位置，可选值:top、bottom 默认值:bottom
        size: "middle", //大小，可选值:small、middle、big 默认值:middle
        alpha: 1, //透明度，可选值:0.0-1.0 默认值:0.6
        frontColor: "#ffffff", //文字颜色，可选值:颜色代码 默认值:"#ffffff"
        frontSize: 18, //文字大小，单位sp，可选值:0+ 默认值:16
    };
    ui.run(() => {
        let scale = 0.25;
        switch (console_floaty_options.size) {
            case "small":
                scale = 0.1;
                break;
            case "big":
                scale = 0.5;
            default:
                break;
        }
        if (console_floaty_options.alpha < 1 && console_floaty_options.alpha > 0) bg = colors.parseColor("#" + parseInt(console_floaty_options.alpha * 255).toString(16) + "000000");
        console_floaty.setPosition(0, device.height * 0.6);
        console_floaty.setSize(device.width, device.height * 0.2);
        console_floaty.setTouchable(false);
        console_floaty.console.setConsole(runtime.console);
        console_floaty.console.setColor("D", console_floaty_options.frontColor || "#ffffff");
        console_floaty.console.setInputEnabled(false);
    });

}
