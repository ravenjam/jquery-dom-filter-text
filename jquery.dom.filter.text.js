(function($) {

    $.fn.domFilterText = function (opts) {
        var opts = $.extend(true, {}, $.fn.domFilterText.defaults, opts);

        var cacheCss = function (targets) {
            targets.each(function () {
                $(this).data('display', $(this).css('display'));
            });

            if (targets.children().length) {
                cacheCss(targets.children());
            }
        }

        cacheCss(opts.filterTarget);

        return this.each(function () {
            if (this.nodeName.toLowerCase() !== 'input' || this.type.toLowerCase() !== 'text') {
                console.warn((this.id ? this.id : 'Node') + ' ' + 'type is invalid, use <input type="text"> instead.');
                return false;
            }

            $(this).on('keyup', function (e) {
                var filterVal = $(e.target).val();

                var filter = function (targets) {
                    targets.each(function () {
                        $(this).css('display', $(this).data('display'));
                    });

                    var targetRemove = targets.filter(function () {
                        var comparator = '';

                        if (opts.filterProperty === 'html') {
                            comparator = $(this).html(); 
                        } else {
                            comparator = $(this).filterProperty;
                        }

                        if (opts.caseSensitive) {
                            return comparator.indexOf(filterVal) < 0;
                        } else {
                            return comparator.toLowerCase().indexOf(filterVal.toLowerCase()) < 0;
                        }
                    });

                    targetRemove.not(e.target).css('display', 'none');

                    if (targets.children().length) {
                        filter(targets.children());
                    }
                };

                filter(opts.filterTarget);
            });
        });
    };


    $.fn.domFilterText.defaults = {
        filterTarget: $(document.body),
        filterProperty: 'html',
        caseSensitive: false
    };

}(jQuery));
