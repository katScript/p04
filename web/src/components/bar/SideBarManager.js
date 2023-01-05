import {useEffect} from "react";
import $ from "jquery";

function SideBarManager() {
    const url = window.location.href;
    useEffect(() => {
        const changeUrlAction = () => {
            $("ul#menu a.active").filter(
                function() {
                    return true;
                }).removeClass("active")
                .parent().removeClass("active");

            let o = $("ul#menu a").filter(
                function() {
                    return this.href === url;
                }).addClass("active").parent();

            o.find("ul").addClass("in");
            while (o.is("li")) {
                o = o.addClass("active")
                    .parent()
                    .addClass("in")
                    .parent();
            }
        }

        $(window).on("load", function() {
            changeUrlAction();
        });

        if (document.readyState === "complete") {
            changeUrlAction();
        }
    }, [url]);
}

export default SideBarManager;