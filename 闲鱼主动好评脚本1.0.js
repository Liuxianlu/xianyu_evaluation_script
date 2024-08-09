/* -------闲鱼主动好评脚本1.0---------
运行环境：开启无障碍，autojspro、小米14、安卓
进入待评价列表后，通过悬浮窗点击启动脚本
*/

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
            set_comments.setText("很好，交易愉快~"); // 要设置的评语
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
