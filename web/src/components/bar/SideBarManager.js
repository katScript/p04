import {useEffect} from "react";
import $ from "jquery";

function SideBarManager() {
    const url = window.location.href;
    useEffect(() => {
        const changeUrlAction = () => {
            const li = $("ul#menu li.active");
            if (li.length > 0) {
                li.removeClass("active");
                li.find(".active").removeClass("active");
                li.find(".in").removeClass("in");
            }

            $("ul#menu ul.in").removeClass("in");
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

        if (document.readyState === "complete") {
            $(document).ready(() => {
                changeUrlAction();
            });
        } else {
            $(window).on("load", () => {
                changeUrlAction();
            });
        }
    }, [url]);
}

export default SideBarManager;