(function(i,t,e,a){i('.article img:not(".not-gallery-item")').each((function(){if(i(this).parent("a").length===0){i(this).wrap('<a class="gallery-item" href="'+i(this).attr("src")+'"></a>');if(this.alt){i(this).after('<p class="has-text-centered is-size-6 caption">'+this.alt+"</p>")}}}));if(typeof i.fn.lightGallery==="function"){i(".article").lightGallery({selector:".gallery-item"})}if(typeof i.fn.justifiedGallery==="function"){if(i(".justified-gallery > p > .gallery-item").length){i(".justified-gallery > p > .gallery-item").unwrap()}i(".justified-gallery").justifiedGallery()}i(".article > .content > table").each((function(){if(i(this).width()>i(this).parent().width()){i(this).wrap('<div class="table-overflow"></div>')}}));function n(){const t=i(".navbar-main .navbar-start").outerWidth()+i(".navbar-main .navbar-end").outerWidth();if(i(document).outerWidth()<t){i(".navbar-main .navbar-menu").addClass("justify-content-start")}else{i(".navbar-main .navbar-menu").removeClass("justify-content-start")}}n();i(window).resize(n);function l(t,e){const a=i(t).find(".fold i");!e?i(t).removeClass("folded"):i(t).addClass("folded");!e?a.removeClass("fa-angle-right"):a.removeClass("fa-angle-down");!e?a.addClass("fa-angle-down"):a.addClass("fa-angle-right")}function s(i){return'<span class="fold">'+(i==="unfolded"?'<i class="fas fa-angle-down"></i>':'<i class="fas fa-angle-right"></i>')+"</span>"}i("figure.highlight table").wrap('<div class="highlight-body">');if(typeof a!=="undefined"&&typeof a.article!=="undefined"&&typeof a.article.highlight!=="undefined"){i("figure.highlight").addClass("hljs");i("figure.highlight .code .line span").each((function(){const t=i(this).attr("class").split(/\s+/);if(t.length===1){i(this).addClass("hljs-"+t[0]);i(this).removeClass(t[0])}}));const t=a.article.highlight.clipboard;const n=a.article.highlight.fold.trim();i("figure.highlight").each((function(){if(i(this).find("figcaption").length){i(this).find("figcaption").addClass("level is-mobile");i(this).find("figcaption").append('<div class="level-left">');i(this).find("figcaption").append('<div class="level-right">');i(this).find("figcaption div.level-left").append(i(this).find("figcaption").find("span"));i(this).find("figcaption div.level-right").append(i(this).find("figcaption").find("a"))}else{if(t||n){i(this).prepend('<figcaption class="level is-mobile"><div class="level-left"></div><div class="level-right"></div></figcaption>')}}}));if(typeof e!=="undefined"&&t){i("figure.highlight").each((function(){const t="code-"+Date.now()+(Math.random()*1e3|0);const e='<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#'+t+' .code"><i class="fas fa-copy"></i></a>';i(this).attr("id",t);i(this).find("figcaption div.level-right").append(e)}));new e(".highlight .copy")}if(n){i("figure.highlight").each((function(){if(i(this).find("figcaption").find("span").length>0){const t=i(this).find("figcaption").find("span");if(t[0].innerText.indexOf(">folded")>-1){t[0].innerText=t[0].innerText.replace(">folded","");i(this).find("figcaption div.level-left").prepend(s("folded"));l(this,true);return}}i(this).find("figcaption div.level-left").prepend(s(n));l(this,n==="folded")}));i("figure.highlight figcaption .fold").click((function(){const t=i(this).closest("figure.highlight");l(t.eq(0),!t.hasClass("folded"))}))}}const f=i("#toc");if(f.length>0){const t=i("<div>");t.attr("id","toc-mask");i("body").append(t);function d(){f.toggleClass("is-active");t.toggleClass("is-active")}f.on("click",d);t.on("click",d);i(".navbar-main .catalogue").on("click",d)}})(jQuery,window.moment,window.ClipboardJS,window.IcarusThemeSettings);