/*
    ==================================================
    «               SIMULAREA CURCUBEULUI            »
    ==================================================
    « Author: Ionica Bizau                           »
    « COPYRIGHT (C) 2013 IONICA BIZAU                »
    « UNDER GNU LICENSE                              »
    ==================================================
*/

var interval;

/**
 * Init function
 */
function init() {
    clearInterval(interval);
}

$("document").ready(function() {
    init();
    $("html").hide().fadeIn(800);
    handlers();
});


function handlers() {
    $(".btn-start").on("click", function() {
        $(".btn-reset").attr("disabled", "");
        $(".btn-start").attr("disabled", "");
        start(function() {
            $(".btn-reset").removeAttr("disabled");
        });
    });

    $(".btn-reset").on("click", function() {
        $(".btn-reset").attr("disabled", "");
        reset(function() {
            $(".btn-start").removeAttr("disabled");
        });
    });
}

/* 
    ===========================================
                START, RESET FUNCTIONS
    ===========================================
*/

function start(callback) {
    // Sun
    $("#sun").animate({ "opacity": "1"}, 300, function() {
        setTimeout(function() {
            $("#circle").animate({ "opacity": "1" }, 300, function() {
                $("#firstRay").animate({ "opacity": "1" }, 300, function() {
                    $("#ref1").animate({ "opacity": "1" }, 500, function() {
                        $("#ref2").animate({ "opacity": "1" }, 500, function() {
                            $("#ref3").animate({ "opacity": "1" }, 500, function() {
                                setTimeout(function() {
                                    $("#ref4").animate({ "opacity": "1" }, 500, function() {
                                        callback();
                                    });
                                }, 1000);
                            });
                        });
                    });
                });
            });
        }, 100);
    });
}

function reset(callback) {
    $("#sun").animate({ "opacity": "0.01"});
    $("#circle").animate({ "opacity": "0.01" })
    $("#firstRay").animate({ "opacity": "0.01" });
    $("#ref1").animate({ "opacity": "0.01" });
    $("#ref2").animate({ "opacity": "0.01" });
    $("#ref3").animate({ "opacity": "0.01" });
    $("#ref4").animate({ "opacity": "0.01" }, function() {
        callback();
    });
}
